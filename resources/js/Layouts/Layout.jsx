import { Head } from "@inertiajs/react";
import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import { useState } from "react";

export default function Layout({ children, header }) {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Head title={header} />

            <Header scrollToSection={scrollToSection} />

            <main className="pt-20">{children}</main>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
