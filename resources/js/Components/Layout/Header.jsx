import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Header({ scrollToSection }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Get all sections
            const sections = [
                "home",
                "about",
                "services",
                "faq",
                "pricing",
                "testimonials",
                "contact",
            ];

            // Determine which section is currently in view
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "faq", label: "FAQ" },
        { id: "pricing", label: "Pricing" },
        { id: "testimonials", label: "Testimonials" },
        { id: "contact", label: "Contact" },
    ];

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
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative px-1 py-2 text-gray-700 hover:text-indigo-600 transition-colors ${
                                    activeSection === item.id
                                        ? "text-indigo-600 font-medium"
                                        : ""
                                }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full"></span>
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        {/* Mobile menu button */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
