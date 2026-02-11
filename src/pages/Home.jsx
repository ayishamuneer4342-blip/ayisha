import Header from '../components/Header';
import Hero from '../sections/Hero';
import Achievements from '../sections/Achievements';
import ProblemSolution from '../sections/ProblemSolution';
import ServicesOverview from '../sections/ServicesOverview';
import OnboardingProcess from '../sections/OnboardingProcess';
import MajorClients from '../sections/MajorClients';
import WhoIWorkWith from '../sections/WhoIWorkWith';
import FinalCTA from '../sections/FinalCTA';
import Certifications from '../sections/Certifications';
import Testimonials from '../sections/Testimonials';
import ConnectMe from '../sections/ConnectMe';
import Footer from '../components/Footer';
import WebsitePortfolio from '../sections/WebsitePortfolio';
import MarketingStrategyFAQ from '../sections/MarketingStrategyFAQ';
import SEO from '../components/SEO';
import SchemaJSONLD from '../components/SchemaJSONLD';

function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://ayishamuneer.com"
                    }
                ]
            },
            {
                "@type": "Person",
                "name": "Ayisha Muneer",
                "url": "https://ayishamuneer.com",
                "image": "https://ayishamuneer.com/ayisha-muneer.jpg",
                "jobTitle": "Digital Marketing Strategist",
                "description": "Award-winning Digital Marketing Strategist in Dubai specializing in SEO, paid advertising, content marketing, and marketing automation for businesses across UAE.",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dubai",
                    "addressCountry": "UAE"
                },
                "sameAs": [
                    "https://www.linkedin.com/in/ayishamuneer",
                    "https://twitter.com/ayishamuneer"
                ],
                "knowsAbout": [
                    "Digital Marketing Strategy",
                    "SEO",
                    "Paid Advertising",
                    "Content Marketing",
                    "Marketing Automation",
                    "Social Media Marketing",
                    "Email Marketing"
                ]
            },
            {
                "@type": "ProfessionalService",
                "name": "Ayisha Muneer - Digital Marketing Strategist",
                "image": "https://ayishamuneer.com/ayisha-muneer.jpg",
                "description": "Professional digital marketing strategy services in Dubai, UAE. Specializing in SEO, paid ads, content marketing, and marketing automation.",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dubai",
                    "addressCountry": "UAE"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "25.2048",
                    "longitude": "55.2708"
                },
                "url": "https://ayishamuneer.com",
                "telephone": "+971543491544",
                "priceRange": "$$",
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Dubai"
                    },
                    {
                        "@type": "Country",
                        "name": "United Arab Emirates"
                    }
                ],
                "serviceType": [
                    "Digital Marketing Strategy",
                    "SEO Services",
                    "Paid Advertising Management",
                    "Content Marketing",
                    "Social Media Marketing",
                    "Email Marketing",
                    "Marketing Automation",
                    "Web Design & Development"
                ]
            },
            {
                "@type": "Organization",
                "name": "Ayisha Muneer Digital Marketing",
                "url": "https://ayishamuneer.com",
                "logo": "https://ayishamuneer.com/logo.png",
                "description": "Digital Marketing Strategist in Dubai providing comprehensive marketing solutions for businesses across UAE.",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dubai",
                    "addressCountry": "UAE"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+971543491544",
                    "contactType": "Customer Service",
                    "areaServed": "AE",
                    "availableLanguage": ["English", "Arabic"]
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="Digital Marketing Strategist in Dubai | Ayisha Muneer | UAE Expert"
                description="Award-winning Digital Marketing Strategist in Dubai helping businesses scale with SEO, paid ads, content marketing & automation. 50+ clients across UAE. Book free consultation."
                keywords="Digital Marketing Strategist Dubai, Digital Marketing Strategist UAE, Marketing Strategist Dubai, Digital Marketing Consultant Dubai, Freelance Digital Marketing Strategist, SEO Expert Dubai, PPC Specialist UAE"
                canonical="https://ayishamuneer.com/"
            />
            <SchemaJSONLD data={jsonLd} />
            <Header theme="light" />
            <main>
                <Hero />
                <Achievements />
                <ProblemSolution />
                <WebsitePortfolio />
                <ServicesOverview />
                <OnboardingProcess />
                <MajorClients />
                <WhoIWorkWith />
                <FinalCTA />

                <Testimonials />
                <MarketingStrategyFAQ />
                <ConnectMe />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
