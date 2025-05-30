import Layout from "@/Layouts/Layout";
import Hero from "@/Components/Sections/Hero";
import About from "@/Components/Sections/About";
import Services from "@/Components/Sections/Services";
import FAQ from "@/Components/Sections/FAQ";
import Pricing from "@/Components/Sections/Pricing";
import Testimonials from "@/Components/Sections/Testimonials";
import Contact from "@/Components/Sections/Contact";

export default function LandingPage() {
    return (
        <Layout header="Welcome">
            <Hero />
            <About />
            <Services />
            <FAQ />
            <Pricing />
            <Testimonials />
            <Contact />
        </Layout>
    );
}
