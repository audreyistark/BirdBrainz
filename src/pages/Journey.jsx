import { TravelMap } from '../components/TravelMap';
import { Navbar } from '../components/Navbar';

export const Journey = () => {
    return (
        <>
            <section className="w-full min-h-screen bg-gray-50 pb-24">
                <div className="h-full">
                    <TravelMap />
                </div>
            </section>
            <Navbar />
        </>
    );
}