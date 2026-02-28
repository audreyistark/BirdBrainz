import { Sprout, Leaf, Trees, Shrub, Flower, Binoculars, Footprints, Bike, Bus, Car, Flame, ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-white to-green-50 overflow-hidden pt-20 pb-32">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
                    {/* Profile Card */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm">
                            {/* Profile Image Container */}
                            <div className="relative mb-8">
                                <div className="glass rounded-3xl p-8 shadow-lg">
                                    <div className="relative mb-8">
                                        <img src="/stevenPFP.jpg" alt="User PFP" className="w-full aspect-square object-cover rounded-2xl"/>
                                        <div className="absolute -bottom-4 -right-4 p-4 rounded-full glass shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <Flame className="w-8 h-8 text-title"/>
                                        </div>
                                    </div>
                                    
                                    {/* Username */}
                                    <div className="text-center mb-4">
                                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl roboto-flex-body font-bold text-title mb-2 break-words">
                                            @Steven_The_Seagull
                                        </h1>
                                        <div className="h-1 w-16 bg-gradient-to-r from-subtitle to-green-mid rounded-full mx-auto"></div>
                                    </div>
                                    
                                    {/* Bio */}
                                    <div className="mb-6">
                                        <p className="roboto-flex-body text-lg text-text text-center">
                                            I'm Steven the Seagull, and I want to explore the world sustainably. Join me on my journey to reduce my carbon footprint!
                                        </p>
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h3 className="text-sm font-semibold text-subtitle uppercase tracking-widest mb-3">Achievements:</h3>
                                        <div className="flex justify-center gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="p-4 rounded-full glass transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default">
                                                    <Binoculars className="w-6 h-6 text-title"/>
                                                </div>
                                                <p className="mt-2 roboto-flex-body text-sm font-medium">Explorer</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="p-4 rounded-full glass transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default">
                                                    <Sprout className="w-6 h-6 text-title"/>
                                                </div>
                                                <p className="mt-2 roboto-flex-body text-sm font-medium">Newbie</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="glass rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-4xl font-bold text-title mb-2">1,038</div>
                                    <p className="text-sm text-text opacity-75">Lbs of CO₂ Saved</p>
                                    <div className="mt-3 h-1 w-12 bg-gradient-to-r from-green-mid to-green-light rounded-full"></div>
                                </div>

                                <div className="glass rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4">
                                    <Bus className="w-10 h-10 text-title flex-shrink-0"/>
                                    <div>
                                        <p className="text-sm text-text opacity-75">Top Travel Method</p>
                                        <p className="font-semibold text-title">Public Transit</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        
                    </div>

                    {/* Friends Feed Section */}
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-title mb-6">Friends Feed</h2>
                        
                        {/* Friend 1 */}
                        <div className="glass rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-mid to-subtitle flex items-center justify-center text-white font-bold text-lg">
                                        S
                                    </div>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-bold text-title break-words">@Shirley</h3>
                                    <p className="text-xs text-text opacity-60">2 hours ago</p>
                                </div>
                                <Bike className="w-5 h-5 text-orange-500 flex-shrink-0"/>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm text-text">Just completed a 23-mile bike trip! 🚴</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white bg-opacity-50 rounded-lg p-3">
                                        <p className="text-xl font-bold text-subtitle">856</p>
                                        <p className="text-xs text-text opacity-75">CO₂ Saved</p>
                                    </div>
                                    <div className="bg-white bg-opacity-50 rounded-lg p-3">
                                        <p className="text-xl font-bold text-subtitle">142</p>
                                        <p className="text-xs text-text opacity-75">Points</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Friend 2 */}
                        <div className="glass rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-subtitle to-green-light flex items-center justify-center text-white font-bold text-lg">
                                        E
                                    </div>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-bold text-title break-words">@Edgar</h3>
                                    <p className="text-xs text-text opacity-60">5 hours ago</p>
                                </div>
                                <Binoculars className="w-5 h-5 text-green-600 flex-shrink-0"/>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm text-text">Reached the Explorer badge! 🎉</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white bg-opacity-50 rounded-lg p-3">
                                        <p className="text-xl font-bold text-subtitle">2,000</p>
                                        <p className="text-xs text-text opacity-75">CO₂ Saved</p>
                                    </div>
                                    <div className="bg-white bg-opacity-50 rounded-lg p-3">
                                        <p className="text-xl font-bold text-subtitle">90</p>
                                        <p className="text-xs text-text opacity-75">Trips</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Friend 3 */}
                        <div className="glass rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-light to-green-mid flex items-center justify-center text-white font-bold text-lg">
                                        HJ
                                    </div>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-bold text-title break-words">@HenryJ</h3>
                                    <p className="text-xs text-text opacity-60">8 hours ago</p>
                                </div>
                                <Bus className="w-5 h-5 text-blue-600 flex-shrink-0"/>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm text-text">Using public transit all week! 🚌</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white bg-opacity-50 rounded-lg p-3">
                                        <p className="text-xl font-bold text-subtitle">1,247</p>
                                        <p className="text-xs text-text opacity-75">CO₂ Saved</p>
                                    </div>
                                    <div className="bg-white bg-opacity-50 rounded-lg p-3">
                                        <p className="text-xl font-bold text-subtitle">203</p>
                                        <p className="text-xs text-text opacity-75">Points</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Friend 4 */}
                        <div className="glass rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-subtitle flex items-center justify-center text-white font-bold text-lg">
                                        S
                                    </div>
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-bold text-title break-words">@Susanne</h3>
                                    <p className="text-xs text-text opacity-60">1 day ago</p>
                                </div>
                                <Bike className="w-5 h-5 text-red-500 flex-shrink-0"/>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm text-text">Monthly goal: 500 miles - on track! 🎯</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white bg-opacity-50 rounded-lg p-3">
                                        <p className="text-xl font-bold text-subtitle">3,562</p>
                                        <p className="text-xs text-text opacity-75">CO₂ Saved</p>
                                    </div>
                                    <div className="bg-white bg-opacity-50 rounded-lg p-3">
                                        <p className="text-xl font-bold text-subtitle">456</p>
                                        <p className="text-xs text-text opacity-75">Points</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats Section */} {/*}
                <div className="mt-20 pt-12 border-t border-green-200">
                    <h3 className="text-2xl font-bold text-title mb-8 text-center">Your Impact This Week</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <div className="glass rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="text-3xl font-bold text-subtitle mb-2">7</div>
                            <p className="text-sm text-text opacity-75">Eco Trips</p>
                        </div>
                        <div className="glass rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="text-3xl font-bold text-subtitle mb-2">128</div>
                            <p className="text-sm text-text opacity-75">Miles Tracked</p>
                        </div>
                        <div className="glass rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="text-3xl font-bold text-subtitle mb-2">24</div>
                            <p className="text-sm text-text opacity-75">Points Earned</p>
                        </div>
                        <div className="glass rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                            <div className="text-3xl font-bold text-subtitle mb-2">🌱</div>
                            <p className="text-sm text-text opacity-75">Growing</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}