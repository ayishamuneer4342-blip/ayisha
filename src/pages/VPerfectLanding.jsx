import React from 'react';
import Header from '../sections/vperfect/Header';
import Hero from '../sections/vperfect/Hero';
import TrustedBy from '../sections/vperfect/TrustedBy';
import Problem from '../sections/vperfect/Problem';
import Services from '../sections/vperfect/Services';
import WebsitePortfolio from '../sections/WebsitePortfolio';
import HowItWorks from '../sections/vperfect/HowItWorks';
import Testimonials from '../sections/Testimonials';
import WhyChooseUs from '../sections/vperfect/WhyChooseUs';

import FAQ from '../sections/vperfect/FAQ';
import { FinalCTA, Footer } from '../sections/vperfect/FinalCTA';
import SEO from '../components/SEO';
import SchemaJSONLD from '../components/SchemaJSONLD';

export default function VPerfectLanding() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Web Development",
        "provider": {
            "@type": "Person",
            "name": "Ayisha Muneer"
        },
        "description": "Custom web development that turns visitors into customers. Fast, beautiful, and built to grow your business."
    };

    return (
        <div className="min-h-screen font-sans">
            <SEO
                title="Custom Web Development Services | VPerfect"
                description="Custom web development that turns visitors into customers. Fast, beautiful, and built to grow your business."
                keywords="Web Development, Custom Websites, React Development, Business Websites"
                url="https://ayishamuneer.com/webdevelopment"
            />
            <SchemaJSONLD data={jsonLd} />
            <Header />
            <Hero />
            <TrustedBy />
            <Problem />
            <Services />
            <WebsitePortfolio />
            <HowItWorks />
            <Testimonials theme="vperfect" />
            <WhyChooseUs />

            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
}
