import { Sprout, Leaf, Trees, Shrub, Flower, Binoculars, Footprints, Bike, Bus, Car, Flame} from "lucide-react";

export const Home = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-6 pb-20 relative z-10">
                <div className="grid lg:grid-cols-[33%_67%] gap-12 items-center py-10">
                    <div className="relative glass-2 rounded p-5">
                        <div className="relative py-4">
                            <div className="relative max-w-md mx-auto">
                                <div className="relative glass rounded-full p-5">
                                    <img src="/stevenPFP.jpg" alt="User PFP" className="w-full aspect-[4/4] object-cover rounded-full"/>
                                </div>
                                
                                <div className="absolute bottom-55 -right-4 rounded-2xl flex justify-center gap-10">
                                    <div className="p-5 rounded-full glass transition-all duration-300">
                                        <span className="text-title">
                                            <Flame className="w-20 h-20"/>
                                        </span>
                                    </div>
                                </div>

                                <div className="relative p-10 flex justify-center">
                                    <h2 className="text-4xl roboto-flex-body font-bold">
                                        @Steven_The_Seagull
                                    </h2>
                                </div>

                                <div className="relative glass rounded-2xl p-8 flex justify-center">
                                    <h3 className="roboto-flex-body text-xl">
                                        Yo yo yo, I'm Steven the Seagull!
                                        <br/>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex justify-center">
                            <h2 className="text-2xl roboto-flex-body font-bold text-title p-5">
                                Steven's Achievement's
                            </h2>
                        </div>

                    <div className="relative rounded-2xl flex justify-center gap-5">
                        <div>
                            <div className="p-4 rounded-full glass transition-all duration-300">
                                <span className="text-title">
                                    <Binoculars className="w-10 h-10"/>
                                </span>
                            </div>
                            
                            <p className="p-2 roboto-flex-body">Explorer</p>
                        </div>
                        <div>
                            <div className="p-4 rounded-full glass transition-all duration-300">
                                <span className="text-title">
                                    <Sprout className="w-10 h-10"/>
                                </span>
                            </div>
                            
                            <p className="px-3 py-2 roboto-flex-body">Newbie</p>
                        </div>
                    </div>

                    <div className="relative flex justify-center">
                        <p className="text-2xl roboto-flex-body font-bold text-title p-5">
                            Total carbon emissions saved: <br/> 1,038 Lbs of CO2
                            <br/>
                            <br/>
                            Top travel method: <br/> <Bus className="w-10 h-10"/>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}