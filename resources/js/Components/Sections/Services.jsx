export default function Services() {
    const services = [
        {
            title: "Web Development",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "💻",
        },
        {
            title: "Mobile Apps",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "📱",
        },
        {
            title: "UI/UX Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "🎨",
        },
        {
            title: "SEO Optimization",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "🔍",
        },
        {
            title: "Digital Marketing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "📈",
        },
        {
            title: "Cloud Solutions",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "☁️",
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We offer a wide range of services to meet your needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
