

export const Profile = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-6 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="relative">
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-full p-5">
                                <img src="/stevenPFP.jpg" alt="User PFP" className="w-full aspect-[4/4] object-cover rounded-full"/>
                            </div>

                            <div className="relative p-10 flex justify-center">
                                <h2 className="text-4xl roboto-flex-body font-bold">
                                    @Steven_The__Seagull
                                </h2>
                            </div>

                            <div className="relative glass rounded-full p-8 flex justify-center">
                                <h3 className="roboto-flex-body text-xl">
                                    Yo yo yo, I'm Steven the Seagull!
                                    <br/>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative max-w-md mx-auto">
                            <h3 className="roboto-flex-body text-xl">
                                Yo yo yo, I'm Steven the Seagull!
                                <br/>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}