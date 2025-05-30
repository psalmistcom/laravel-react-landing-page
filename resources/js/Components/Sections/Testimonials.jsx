export default function Testimonials() {
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, Company A",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            rating: 5,
        },
        {
            name: "Jane Smith",
            role: "Marketing Director, Company B",
            quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            rating: 4,
        },
        {
            name: "Robert Johnson",
            role: "CTO, Company C",
            quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our clients
                        have to say.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-lg">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`h-5 w-5 ${
                                            i < testimonial.rating
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-gray-600 mb-6">
                                <p>"{testimonial.quote}"</p>
                            </blockquote>
                            <div className="flex items-center">
                                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center text-indigo-600 font-bold mr-4">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
