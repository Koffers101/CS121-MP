import logo from "../assets/images/logo.png";
const Hero = () => {
    return (
        <>
                <section>
                    <div className="m-5 flex max-h-screen bg-cream-0 rounded-lg shadow-lg">
                        <img
                            className="m-5 h-auto w-auto"
                            src={logo}
                            alt="placeholder"
                        />
                        <div className="text-start">
                            <h1 className="m-2 text-4xl font-extrabold text-off-white sm:text-5xl md:text-6xl">
                                Isabella Aguinaldo
                            </h1>
                            <p className="m-2 text-xl text-off-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="m-5 flex max-h-screen bg-cream-2 rounded-lg shadow-lg">
                        <div className="text-end">
                            <h1 className="m-2 text-4xl font-extrabold text-off-white sm:text-5xl md:text-6xl">
                                Kofi Reyes
                            </h1>
                            <p className="m-2 text-xl text-off-white ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <img
                            className="m-5 h-auto w-auto"
                            src={logo}
                            alt="placeholder"
                        />
                    </div>
                </section>

                <section>
                    <div className="m-5 flex max-h-screen bg-cream-0 rounded-lg shadow-lg">
                        <img
                            className="m-5 h-auto w-auto"
                            src={logo}
                            alt="placeholder"
                        />
                        <div className="text-start">
                            <h1 className="m-2 text-4xl font-extrabold text-off-white sm:text-5xl md:text-6xl">
                                Nico Ferrer
                            </h1>
                            <p className="m-2 text-xl text-off-white ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </section>
        </>
    );
};
export default Hero;