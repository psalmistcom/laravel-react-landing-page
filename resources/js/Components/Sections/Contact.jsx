export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-indigo-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-xl mb-8">
                            Have questions or want to discuss a project? We'd
                            love to hear from you.
                        </p>
                        <div className="space-y-6">
                            <ContactInfo
                                icon={
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                }
                                title="Email"
                                info="info@example.com"
                            />
                            <ContactInfo
                                icon={
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                }
                                title="Phone"
                                info="(123) 456-7890"
                            />
                            <ContactInfo
                                icon={
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                }
                                title="Address"
                                info="123 Main St, City, State 12345"
                            />
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

function ContactInfo({ icon, title, info }) {
    return (
        <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-700 p-3 rounded-full">
                {icon}
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-indigo-100">{info}</p>
            </div>
        </div>
    );
}

function ContactForm() {
    return (
        <div className="bg-white rounded-lg shadow-xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="subject"
                        className="block text-gray-700 mb-2"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
