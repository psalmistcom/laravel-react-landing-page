import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Header({ scrollToSection }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-10 transition-all duration-300 ${
                scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-indigo-600"
                        >
                            BrandName
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-gray-700 hover:text-indigo-600"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-gray-700 hover:text-indigo-600"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("services")}
                            className="text-gray-700 hover:text-indigo-600"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection("faq")}
                            className="text-gray-700 hover:text-indigo-600"
                        >
                            FAQ
                        </button>
                        <button
                            onClick={() => scrollToSection("pricing")}
                            className="text-gray-700 hover:text-indigo-600"
                        >
                            Pricing
                        </button>
                        <button
                            onClick={() => scrollToSection("testimonials")}
                            className="text-gray-700 hover:text-indigo-600"
                        >
                            Testimonials
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-gray-700 hover:text-indigo-600"
                        >
                            Contact
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        {/* Mobile menu button */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
