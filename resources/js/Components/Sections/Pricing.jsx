export default function Pricing() {
    const plans = [
        {
            name: "Basic",
            price: "$19",
            features: ["Feature 1", "Feature 2", "Feature 3"],
            popular: false,
        },
        {
            name: "Pro",
            price: "$49",
            features: [
                "All Basic features",
                "Feature 4",
                "Feature 5",
                "Priority Support",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "$99",
            features: [
                "All Pro features",
                "Feature 6",
                "Feature 7",
                "Dedicated Account Manager",
            ],
            popular: false,
        },
    ];

    return (
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the perfect plan for your needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow-md overflow-hidden ${
                                plan.popular
                                    ? "ring-2 ring-indigo-600 transform md:-translate-y-4"
                                    : ""
                            }`}
                        >
                            {plan.popular && (
                                <div className="bg-indigo-600 text-white text-center py-1">
                                    <p className="text-sm font-medium">
                                        Most Popular
                                    </p>
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-4xl font-bold mb-6">
                                    {plan.price}
                                    <span className="text-lg font-normal text-gray-500">
                                        /month
                                    </span>
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center"
                                        >
                                            <svg
                                                className="h-5 w-5 text-indigo-500 mr-2"
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
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-3 px-4 rounded-lg font-medium ${
                                        plan.popular
                                            ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    } transition`}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
