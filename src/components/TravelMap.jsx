import { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation } from 'lucide-react';

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Geocoding function (using Nominatim - OpenStreetMap's free service)
const geocodeLocation = async (address) => {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
        );
        const data = await response.json();
        if (data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon),
                name: data[0].display_name,
            };
        }
        return null;
    } catch (error) {
        console.error('Geocoding error:', error);
        return null;
    }
};

// Calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

// Calculate travel times and CO2 emissions for different methods
const calculateTravelMethods = (distance) => {
    // CO2 emissions in grams per km
    const CO2_PER_KM = {
        car: 250, // Average car ~250g CO2/km
        transit: 90, // Bus/Transit ~90g CO2/km per passenger
        cycling: 0,
        walking: 0,
    };

    const carEmissions = distance * CO2_PER_KM.car;

    return {
        walking: {
            time: Math.round((distance / 5) * 60), // 5 km/h average
            distance: distance.toFixed(2),
            icon: '🚶',
            speed: '5 km/h',
            co2: 0,
            saved: carEmissions,
            savedPercent: 100
        },
        cycling: {
            time: Math.round((distance / 20) * 60), // 20 km/h average
            distance: distance.toFixed(2),
            icon: '🚴',
            speed: '20 km/h',
            co2: 0,
            saved: carEmissions,
            savedPercent: 100
        },
        driving: {
            time: Math.round((distance / 80) * 60), // 80 km/h average
            distance: distance.toFixed(2),
            icon: '🚗',
            speed: '80 km/h',
            co2: carEmissions,
            saved: 0,
            savedPercent: 0
        },
        transit: {
            time: Math.round((distance / 40) * 60) + 5, // 40 km/h + 5 min wait
            distance: distance.toFixed(2),
            icon: '🚌',
            speed: '40 km/h (+ transfers)',
            co2: distance * CO2_PER_KM.transit,
            saved: carEmissions - (distance * CO2_PER_KM.transit),
            savedPercent: Math.round(((carEmissions - (distance * CO2_PER_KM.transit)) / carEmissions) * 100)
        },
    };
};

const MapUpdater = ({ fromCoords, toCoords }) => {
    const map = useMap();

    useEffect(() => {
        if (fromCoords && toCoords) {
            const bounds = L.latLngBounds([
                [fromCoords.lat, fromCoords.lng],
                [toCoords.lat, toCoords.lng],
            ]);
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [fromCoords, toCoords, map]);

    return null;
};

export const TravelMap = () => {
    const [fromAddress, setFromAddress] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [fromCoords, setFromCoords] = useState(null);
    const [toCoords, setToCoords] = useState(null);
    const [travelMethods, setTravelMethods] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!fromAddress.trim() || !toAddress.trim()) {
            setError('Please enter both from and to locations');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const [from, to] = await Promise.all([
                geocodeLocation(fromAddress),
                geocodeLocation(toAddress),
            ]);

            if (!from || !to) {
                setError('Could not find one or both locations. Please try different addresses.');
                setLoading(false);
                return;
            }

            setFromCoords(from);
            setToCoords(to);

            const distance = calculateDistance(from.lat, from.lng, to.lat, to.lng);
            setTravelMethods(calculateTravelMethods(distance));
        } catch (err) {
            setError('Error calculating route. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fromDefault = { lat: 40.7128, lng: -74.0060 }; // NYC default
    const toDefault = { lat: 34.0522, lng: -118.2437 }; // LA default

    return (
        <div className="w-full h-full flex flex-col gap-4 p-4 absolute z-10">
            {/* Input Section */}
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-semibold mb-2">From</label>
                        <input
                            type="text"
                            value={fromAddress}
                            onChange={(e) => setFromAddress(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            placeholder="Enter starting location (e.g., New York)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-2">To</label>
                        <input
                            type="text"
                            value={toAddress}
                            onChange={(e) => setToAddress(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            placeholder="Enter destination (e.g., Los Angeles)"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="w-full glass text-title px-4 py-3 rounded-2xl hover:shadow-lg disabled:opacity-50 font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                >
                    <Navigation size={18} />
                    {loading ? 'Calculating...' : 'Calculate Route'}
                </button>

                {error && <div className="mt-2 text-red-600 text-sm">{error}</div>}
            </div>

            {/* Map Section */}
            <div className="flex-1 rounded-lg overflow-hidden shadow-md">
                <MapContainer
                    center={fromCoords || fromDefault}
                    zoom={4}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap contributors'
                    />
                    {fromCoords && (
                        <Marker position={[fromCoords.lat, fromCoords.lng]}>
                            <Popup>{fromCoords.name}</Popup>
                        </Marker>
                    )}
                    {toCoords && (
                        <Marker position={[toCoords.lat, toCoords.lng]}>
                            <Popup>{toCoords.name}</Popup>
                        </Marker>
                    )}
                    <MapUpdater fromCoords={fromCoords} toCoords={toCoords} />
                </MapContainer>
            </div>

            {/* Travel Methods Section */}
            {travelMethods && (
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <MapPin size={20} />
                        Travel Options
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {Object.entries(travelMethods).map(([method, data]) => (
                            <div
                                key={method}
                                className={`rounded-lg p-3 text-center border-2 ${
                                    method === 'driving'
                                        ? 'bg-red-50 border-red-200'
                                        : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200'
                                }`}
                            >
                                <div className="text-3xl mb-2">{data.icon}</div>
                                <p className="font-semibold capitalize text-sm">{method}</p>
                                <p className="text-2xl font-bold text-blue-600 my-1">
                                    {data.time}
                                </p>
                                <p className="text-xs text-gray-600">minutes</p>
                                <p className="text-xs text-gray-500 mt-1">{data.distance} km</p>
                                <p className="text-xs text-gray-500">{data.speed}</p>
                                
                                {/* CO2 Display */}
                                <div className="mt-3 pt-3 border-t border-gray-300">
                                    {method === 'driving' ? (
                                        <div>
                                            <p className="text-xs text-red-600 font-semibold">
                                                {(data.co2 / 1000).toFixed(1)} kg CO₂
                                            </p>
                                            <p className="text-xs text-gray-500">emissions</p>
                                        </div>
                                    ) : (
                                        <div>
                                            {data.saved > 0 ? (
                                                <>
                                                    <p className="text-xs text-green-600 font-semibold">
                                                        {(data.saved / 1000).toFixed(2)} kg CO₂ saved
                                                    </p>
                                                    <p className="text-xs font-bold text-green-700">
                                                        {data.savedPercent}% less
                                                    </p>
                                                </>
                                            ) : (
                                                <p className="text-xs text-green-600 font-semibold">
                                                    0 emissions
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
