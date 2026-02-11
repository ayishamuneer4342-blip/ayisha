import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Search, BarChart2, Globe, ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaJSONLD from '../components/SchemaJSONLD';

const SeoService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "SEO Services",
        "provider": {
            "@type": "Person",
            "name": "Ayisha Muneer"
        },
        "areaServed": {
            "@type": "City",
            "name": "Dubai"
        },
        "description": "Comprehensive SEO services for Dubai businesses including Technical SEO, Content Strategy, and Local SEO to dominate search results.",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does SEO take to show results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEO is a long-term strategy. Typically, you will start seeing initial movement in 3 months, with significant traffic and revenue impact between 6-12 months."
                }
            },
            {
                "@type": "Question",
                "name": "Do you guarantee #1 rankings?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No reputable SEO expert guarantees #1 rankings because Google's algorithm is a black box. However, I guarantee a process aimed at maximizing your visibility and revenue based on proven data-driven strategies."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between SEO and PPC?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PPC (Ads) gives you instant traffic that stops when you stop paying. SEO builds a long-term asset that continues to drive free organic traffic for years."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="SEO Services Dubai | Dominate Search Results | Ayisha Muneer"
                description="Expert SEO services in Dubai. From Technical Audits to Content Strategy, I help businesses rank higher and drive qualified leads."
                keywords="SEO Services Dubai, SEO Expert UAE, Technical SEO, Content Strategy, Local SEO Dubai"
                url="https://ayishamuneer.com/services/seo"
            />
            <SchemaJSONLD data={[jsonLd, faqSchema]} />

            <Header theme="light" />

            <main>
                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepBlue-900 text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold-400 text-sm font-semibold mb-6"
                        >
                            SEO Services Dubai
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                        >
                            Stop Being Invisible <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                                On Google.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Traffic is vanity. Revenue is sanity. I build comprehensive SEO strategies that don't just increase rankings, but drive qualified leads who are ready to buy.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <a href="https://wa.me/971543491544" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/20">
                                Get Your Free Audit
                            </a>
                            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                                See How I Work
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* PROBLEM / AGITATION */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-900 mb-6">
                                Most SEO "Strategies" Are Failing
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                You've likely updated your keywords and written some blog posts, but your traffic is flatlining. Why? Because modern Search is evolving.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Target size={32} className="text-red-500" />,
                                    title: "Wrong Targets",
                                    desc: "Ranking for vanity keywords that get traffic but zero sales."
                                },
                                {
                                    icon: <Globe size={32} className="text-red-500" />,
                                    title: "Technical Debt",
                                    desc: "Your site is slow or broken, so Google refuses to index your best pages."
                                },
                                {
                                    icon: <Users size={32} className="text-red-500" />,
                                    title: "Content Mismatch",
                                    desc: "Writing content that assumes intent instead of answering real user questions."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                                    <div className="mb-6 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-deepBlue-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SERVICES PILLARS */}
                <section id="services" className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-20">
                            <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">My Expertise</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mt-3">The 4 Pillars of SEO Dominance</h2>
                        </div>

                        <div className="space-y-24">
                            {/* Pillar 1: Technical SEO */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                        <Search size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Technical SEO & Audits</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        Before we build, we fix the foundation. I crawl your site like Google does to uncover hidden issues—broken links, slow load times, and crawl errors—that are killing your rankings.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Core Web Vitals Optimization', 'Crawl Budget Management', 'Schema Markup Implementation', 'JavaScript SEO'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <Check size={20} className="text-green-500" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Technical SEO Audit Data"
                                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pillar 2: Content Strategy */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row-reverse gap-12 items-center"
                            >
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                        <BarChart2 size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Content Strategy (AEO)</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        We don't just write "blog posts." We create comprehensive topical maps that establish you as the authority, answering user questions better than AI summaries.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Answer Engine Optimization (AEO)', 'Topical Authority Maps', 'Content Gap Analysis', 'Click-Through Rate Optimization'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <Check size={20} className="text-green-500" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Content Strategy Planning"
                                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pillar 3: Local SEO */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                                        <Globe size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Local SEO & GMB</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        Dominate the "Near Me" searches in Dubai. We optimize your Google Business Profile (Maps) to ensure local customers find you first.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Google Maps Pack Optimization', 'Local Citation Building', 'Review Management Strategy', 'NAP Consistency Audits'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <Check size={20} className="text-green-500" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Dubai Skyline Local SEO"
                                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pillar 4: Analytics & CRO */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row-reverse gap-12 items-center"
                            >
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                                        <TrendingUp size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Authority & Analytics</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        Traffic is useless if it doesn't convert. We build high-quality backlinks to boost authority and use deep data analytics to turn visitors into revenue.
                                    </p>
                                    <ul className="space-y-3">
                                        {['High-Quality Backlink Building', 'Digital PR & Guest Posting', 'Conversion Rate Optimization (CRO)', 'ROI & Revenue Tracking'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <Check size={20} className="text-green-500" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Data Analytics and Growth"
                                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* PROCESS SECTION */}
                <section id="process" className="py-20 bg-deepBlue-900 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Roadmap to Results</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">SEO is not magic. It's a process. Here is what the first 90 days look like.</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Audit", desc: "Deep dive into technical errors and competitor analysis." },
                                { step: "02", title: "Fix", desc: "Resolving critical errors and optimizing site speed." },
                                { step: "03", title: "Content", desc: "Publishing high-authority content targeting buyer intent." },
                                { step: "04", title: "Scale", desc: "Building backlinks and expanding keyword reach." }
                            ].map((item, idx) => (
                                <div key={idx} className="relative p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="text-6xl font-bold text-white/5 absolute top-2 right-4">{item.step}</div>
                                    <h3 className="text-xl font-bold text-gold-500 mb-3 relative z-10">{item.title}</h3>
                                    <p className="text-slate-300 relative z-10">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-deepBlue-900 mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faqSchema.mainEntity.map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                    <h3 className="font-bold text-lg text-deepBlue-900 mb-2">{item.name}</h3>
                                    <p className="text-slate-600">{item.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-gradient-to-r from-gold-500 to-gold-600 text-deepBlue-900 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Outrank Your Competitors?</h2>
                        <p className="text-xl mb-10 font-medium max-w-2xl mx-auto">Stop losing customers to businesses that just rank better than you. Let's fix your SEO today.</p>
                        <a href="https://wa.me/971543491544" className="inline-flex items-center gap-2 px-8 py-4 bg-deepBlue-900 text-white font-bold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-xl">
                            Book Your Strategy Call <ArrowRight size={20} />
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default SeoService;
