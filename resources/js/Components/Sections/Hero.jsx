export default function Hero() {
    return (
        <section
            id="home"
            className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Your Awesome Product
                        </h1>
                        <p className="text-xl mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                                Get Started
                            </button>
                            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://via.placeholder.com/500x400"
                            alt="Hero"
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
