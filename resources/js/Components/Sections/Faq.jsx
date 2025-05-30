export default function FAQ() {
    const faqs = [
        {
            question: "How do I get started?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers.",
        },
        {
            question: "Can I cancel my subscription?",
            answer: "Yes, you can cancel anytime with no hidden fees.",
        },
        {
            question: "Do you offer refunds?",
            answer: "We offer a 30-day money-back guarantee for all our plans.",
        },
        {
            question: "How can I contact support?",
            answer: "You can reach our support team 24/7 via email or live chat.",
        },
    ];

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about our services.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center">
                                    <span>{item.question}</span>
                                    <svg
                                        className="h-5 w-5 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div className="p-4 bg-white">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
