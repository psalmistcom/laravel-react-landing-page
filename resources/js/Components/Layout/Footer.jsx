export default function Footer({ scrollToSection }) {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection("home")}
                                    className="text-gray-400 hover:text-white"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("services")}
                                    className="text-gray-400 hover:text-white"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("pricing")}
                                    className="text-gray-400 hover:text-white"
                                >
                                    Pricing
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <address className="text-gray-400 not-italic">
                            123 Main St
                            <br />
                            City, State 12345
                            <br />
                            info@example.com
                            <br />
                            (123) 456-7890
                        </address>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Newsletter
                        </h3>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 rounded-l text-gray-800 w-full"
                            />
                            <button
                                type="submit"
                                className="bg-indigo-600 px-4 py-2 rounded-r"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Your Company. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
