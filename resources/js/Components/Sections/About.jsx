export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        About Us
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are a team of passionate professionals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://via.placeholder.com/500x400"
                            alt="About Us"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Our Story
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Professional team with 10+ years experience",
                                "Trusted by 1000+ clients worldwide",
                                "24/7 customer support",
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full">
                                        <svg
                                            className="h-6 w-6 text-indigo-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-gray-600">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
