import { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Bus, Train, Car, Bike, Footprints, MapPin, CheckCircle, Leaf } from 'lucide-react';
import '../styles/journey.css';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

// Carbon emissions in kg CO2 per kilometer (per passenger)
const CARBON_EMISSIONS = {
  bus: 0.089,      // Public bus is very efficient
  train: 0.041,    // Train is the most efficient
  car: 0.21,       // Average passenger car
  bike: 0,         // Zero emissions
  walk: 0,         // Zero emissions
};

const transitOptions = [
  { id: 'bus', name: 'Bus', icon: Bus, color: 'bg-blue-500', time: '35 min', cost: '$2.50' },
  { id: 'train', name: 'Train', icon: Train, color: 'bg-purple-500', time: '28 min', cost: '$3.00' },
  { id: 'car', name: 'Car', icon: Car, color: 'bg-orange-500', time: '22 min', cost: '$4.50' },
  { id: 'bike', name: 'Bike', icon: Bike, color: 'bg-green-500', time: '42 min', cost: 'Free' },
  { id: 'walk', name: 'Walk', icon: Footprints, color: 'bg-indigo-500', time: '1h 15m', cost: 'Free' },
];

const MapClickHandler = ({ onMapClick }) => {
  const map = useMap();
  
  useEffect(() => {
    const handleClick = (e) => {
      onMapClick(e.latlng);
    };
    
    map.on('click', handleClick);
    return () => map.off('click', handleClick);
  }, [map, onMapClick]);
  
  return null;
};

const calculateEmissions = (distance) => {
  const emissions = {};
  transitOptions.forEach(option => {
    emissions[option.id] = (distance * CARBON_EMISSIONS[option.id]).toFixed(2);
  });
  return emissions;
};

const getEmissionLevel = (emission, transitId) => {
  if (CARBON_EMISSIONS[transitId] === 0) return 'zero';
  const avgEmission = 0.122; // Average of non-zero emissions
  if (emission < avgEmission * 0.5) return 'low';
  if (emission < avgEmission) return 'medium';
  return 'high';
};

export const Journey = () => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [selectedTransit, setSelectedTransit] = useState(null);
  const [isSelectingStart, setIsSelectingStart] = useState(false);
  const mapRef = useRef(null);

  const handleMapClick = (latlng) => {
    if (isSelectingStart) {
      setStartPoint(latlng);
      setIsSelectingStart(false);
    } else if (!selectedTransit) {
      setEndPoint(latlng);
    }
  };

  const resetJourney = () => {
    setStartPoint(null);
    setEndPoint(null);
    setSelectedTransit(null);
  };

  const distance = startPoint && endPoint 
    ? (startPoint.distanceTo(endPoint) / 1000).toFixed(2) 
    : null;

  const emissions = distance ? calculateEmissions(distance) : null;

  const selectedOption = transitOptions.find(t => t.id === selectedTransit);
  const selectedEmission = selectedTransit && emissions ? emissions[selectedTransit] : null;
  const emissionLevel = selectedTransit ? getEmissionLevel(selectedEmission, selectedTransit) : null;

  return (
    <section className="journey-page">
      <div className="journey-container">
        <div className="journey-header">
          <h1>Plan Your Journey</h1>
          <p>Click on the map to select your route, then choose a transit option</p>
        </div>

        <div className="journey-content">
          {/* Map Section */}
          <div className="map-section">
            <div className="map-instructions">
              {!startPoint && (
                <div className="instruction-banner active">
                  <MapPin size={20} />
                  <span onClick={() => setIsSelectingStart(true)} className="instruction-text clickable">
                    Click to select starting point
                  </span>
                </div>
              )}
              {startPoint && !endPoint && (
                <div className="instruction-banner active">
                  <MapPin size={20} />
                  <span className="instruction-text">Click on map to select destination</span>
                </div>
              )}
              {startPoint && endPoint && (
                <div className="instruction-banner success">
                  <CheckCircle size={20} />
                  <span className="instruction-text">Route selected! Choose a transit option</span>
                </div>
              )}
            </div>

            <MapContainer 
              center={[40.7128, -74.0060]} 
              zoom={12} 
              style={{ height: '100%', width: '100%' }}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <MapClickHandler onMapClick={handleMapClick} />
              
              {startPoint && (
                <Marker position={[startPoint.lat, startPoint.lng]}>
                  <Popup>Start Point</Popup>
                </Marker>
              )}
              
              {endPoint && (
                <Marker position={[endPoint.lat, endPoint.lng]}>
                  <Popup>Destination</Popup>
                </Marker>
              )}
            </MapContainer>
          </div>

          {/* Transit Selection Section */}
          <div className="transit-section">
            {startPoint && endPoint ? (
              <>
                <div className="route-summary">
                  <h2>Route Summary</h2>
                  <div className="summary-details">
                    <div className="detail-item">
                      <span className="detail-label">Distance:</span>
                      <span className="detail-value">{distance} km</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Status:</span>
                      <span className="detail-value">Ready to travel</span>
                    </div>
                  </div>
                </div>

                <div className="transit-options">
                  <h2>Choose Transit Method</h2>
                  <div className="options-grid">
                    {transitOptions.map((option) => {
                      const IconComponent = option.icon;
                      const emission = emissions[option.id];
                      const level = getEmissionLevel(emission, option.id);
                      
                      return (
                        <button
                          key={option.id}
                          className={`transit-option ${selectedTransit === option.id ? 'selected' : ''}`}
                          onClick={() => setSelectedTransit(option.id)}
                        >
                          <div className={`icon-wrapper ${option.color}`}>
                            <IconComponent size={28} color="white" />
                          </div>
                          <h3>{option.name}</h3>
                          <p className="time">{option.time}</p>
                          <p className="cost">{option.cost}</p>
                          <div className={`emission-badge emission-${level}`}>
                            <Leaf size={14} />
                            <span>{emission} kg CO₂</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedTransit && (
                  <div className="journey-confirmation">
                    <div className="confirmation-card">
                      <CheckCircle size={32} className="success-icon" />
                      <h3>Journey Confirmed!</h3>
                      <p>
                        Your {selectedOption?.name} journey is ready.
                      </p>
                      <div className="confirmation-details">
                        <span>Distance: {distance} km</span>
                        <span>Estimated Time: {selectedOption?.time}</span>
                        <span>Cost: {selectedOption?.cost}</span>
                      </div>
                      
                      <div className={`carbon-impact emission-${emissionLevel}`}>
                        <div className="carbon-header">
                          <Leaf size={20} />
                          <span>Carbon Footprint</span>
                        </div>
                        <div className="carbon-value">
                          {selectedEmission} kg CO₂
                        </div>
                        <p className="carbon-message">
                          {emissionLevel === 'zero' && "Zero emissions! Great choice for the environment."}
                          {emissionLevel === 'low' && "Low emissions. This is an eco-friendly option."}
                          {emissionLevel === 'medium' && "Medium emissions. Consider a greener alternative."}
                          {emissionLevel === 'high' && "High emissions. Choose a more sustainable option if possible."}
                        </p>
                      </div>

                      <button className="start-journey-btn">Start Journey</button>
                      <button className="reset-btn" onClick={resetJourney}>Plan Another Route</button>
                    </div>
                  </div>
                )}

                {!selectedTransit && (
                  <button className="reset-btn" onClick={resetJourney}>Clear Route</button>
                )}
              </>
            ) : (
              <div className="empty-state">
                <MapPin size={48} />
                <h2>Select Your Journey</h2>
                <p>Use the map on the left to choose your starting point and destination</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section className="journey-page">
      <div className="journey-container">
        <div className="journey-header">
          <h1>Plan Your Journey</h1>
          <p>Click on the map to select your route, then choose a transit option</p>
        </div>

        <div className="journey-content">
          {/* Map Section */}
          <div className="map-section">
            <div className="map-instructions">
              {!startPoint && (
                <div className="instruction-banner active">
                  <MapPin size={20} />
                  <span onClick={() => setIsSelectingStart(true)} className="instruction-text clickable">
                    Click to select starting point
                  </span>
                </div>
              )}
              {startPoint && !endPoint && (
                <div className="instruction-banner active">
                  <MapPin size={20} />
                  <span className="instruction-text">Click on map to select destination</span>
                </div>
              )}
              {startPoint && endPoint && (
                <div className="instruction-banner success">
                  <CheckCircle size={20} />
                  <span className="instruction-text">Route selected! Choose a transit option</span>
                </div>
              )}
            </div>

            <MapContainer 
              center={[40.7128, -74.0060]} 
              zoom={12} 
              style={{ height: '100%', width: '100%' }}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <MapClickHandler onMapClick={handleMapClick} />
              
              {startPoint && (
                <Marker position={[startPoint.lat, startPoint.lng]}>
                  <Popup>Start Point</Popup>
                </Marker>
              )}
              
              {endPoint && (
                <Marker position={[endPoint.lat, endPoint.lng]}>
                  <Popup>Destination</Popup>
                </Marker>
              )}
            </MapContainer>
          </div>

          {/* Transit Selection Section */}
          <div className="transit-section">
            {startPoint && endPoint ? (
              <>
                <div className="route-summary">
                  <h2>Route Summary</h2>
                  <div className="summary-details">
                    <div className="detail-item">
                      <span className="detail-label">Distance:</span>
                      <span className="detail-value">{distance} km</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Status:</span>
                      <span className="detail-value">Ready to travel</span>
                    </div>
                  </div>
                </div>

                <div className="transit-options">
                  <h2>Choose Transit Method</h2>
                  <div className="options-grid">
                    {transitOptions.map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <button
                          key={option.id}
                          className={`transit-option ${selectedTransit === option.id ? 'selected' : ''}`}
                          onClick={() => setSelectedTransit(option.id)}
                        >
                          <div className={`icon-wrapper ${option.color}`}>
                            <IconComponent size={28} color="white" />
                          </div>
                          <h3>{option.name}</h3>
                          <p className="time">{option.time}</p>
                          <p className="cost">{option.cost}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedTransit && (
                  <div className="journey-confirmation">
                    <div className="confirmation-card">
                      <CheckCircle size={32} className="success-icon" />
                      <h3>Journey Confirmed!</h3>
                      <p>
                        Your {transitOptions.find(t => t.id === selectedTransit)?.name} journey 
                        is ready.
                      </p>
                      <div className="confirmation-details">
                        <span>Distance: {distance} km</span>
                        <span>Estimated Time: {transitOptions.find(t => t.id === selectedTransit)?.time}</span>
                        <span>Cost: {transitOptions.find(t => t.id === selectedTransit)?.cost}</span>
                      </div>
                      <button className="start-journey-btn">Start Journey</button>
                      <button className="reset-btn" onClick={resetJourney}>Plan Another Route</button>
                    </div>
                  </div>
                )}

                {!selectedTransit && (
                  <button className="reset-btn" onClick={resetJourney}>Clear Route</button>
                )}
              </>
            ) : (
              <div className="empty-state">
                <MapPin size={48} />
                <h2>Select Your Journey</h2>
                <p>Use the map on the left to choose your starting point and destination</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
