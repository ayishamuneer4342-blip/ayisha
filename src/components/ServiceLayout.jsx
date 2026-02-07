import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import SchemaJSONLD from './SchemaJSONLD';

const ServiceLayout = ({
    title,
    subtitle,
    description,
    benefits,
    icon: Icon,
    image,
    seoTitle,
    seoDesc,
    seoKeywords,
    url
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": title,
        "provider": {
            "@type": "Person",
            "name": "Ayisha Muneer"
        },
        "description": description,
        "areaServed": {
            "@type": "City",
            "name": "Dubai"
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title={seoTitle}
                description={seoDesc}
                keywords={seoKeywords}
                url={url}
            />
            <SchemaJSONLD data={jsonLd} />
            <Header theme="light" />

            <main className="pt-24 lg:pt-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:w-1/2"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-6">
                                {Icon && <Icon size={16} />}
                                {title}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deepBlue-900 mb-6 leading-tight">
                                {subtitle}
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                {description}
                            </p>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                                <h3 className="font-bold text-deepBlue-900 mb-4">Why Choose This Service?</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-slate-700 text-sm font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a
                                href="https://wa.me/971543491544"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/20"
                            >
                                Get Started <ArrowRight size={20} />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <div className="absolute inset-0 bg-gradient-to-tr from-deepBlue-900/40 to-transparent"></div>
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ServiceLayout;
