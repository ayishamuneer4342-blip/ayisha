import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Target, TrendingUp, Users, Magnet, ArrowRight, Filter } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import SchemaJSONLD from '../../components/SchemaJSONLD';

const LeadGeneration = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const jsonLd = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Lead Generation & Sales Conversion", "provider": { "@type": "Person", "name": "Ayisha Muneer" }, "areaServed": { "@type": "City", "name": "Dubai" }, "description": "Expert lead generation services in Dubai. Build funnels, landing pages, and campaigns that attract qualified leads and convert them into paying customers." };
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What's the difference between lead generation and brand awareness?", "acceptedAnswer": { "@type": "Answer", "text": "Brand awareness is about visibility. Lead generation is about capturing contact information from people who are actively interested in your product or service. Both are important, but lead gen drives immediate revenue." } }, { "@type": "Question", "name": "How much does a lead cost?", "acceptedAnswer": { "@type": "Answer", "text": "It varies by industry. B2B leads can range from AED 50-500+, while B2C leads might be AED 10-100. The key is not cost per lead, but cost per acquisition (CPA) and lifetime value (LTV)." } }, { "@type": "Question", "name": "How quickly can I start getting leads?", "acceptedAnswer": { "@type": "Answer", "text": "With paid ads, you can start generating leads within days. Organic methods (SEO, content) take 3-6 months to build momentum. I recommend a hybrid approach for consistent flow." } }] };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO title="Lead Generation Expert Dubai | Sales Conversion | Ayisha Muneer" description="Expert lead generation services in Dubai. Build funnels, landing pages, and campaigns that attract qualified leads and convert them into paying customers." keywords="Lead Generation Dubai, Sales Funnel, Landing Page Optimization, Conversion Rate Optimization" url="https://ayishamuneer.com/services/lead-generation" />
            <SchemaJSONLD data={[jsonLd, faqSchema]} />
            <Header theme="dark" />
            <main>
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepBlue-900 text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold-400 text-sm font-semibold mb-6">Lead Generation & Sales Conversion</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            Fill Your Pipeline with <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Ready-to-Buy Leads</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Stop chasing unqualified prospects. I build high-converting funnels, landing pages, and lead magnets that attract your ideal customers and turn them into sales.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://wa.me/971543491544" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg">Get More Qualified Leads</a>
                            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">See My Process</a>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-900 mb-6">Why Your Leads Aren't Converting</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">You're getting leads, but they're not buying. Here's what's broken in your funnel.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: <Filter size={32} className="text-red-500" />, title: "Unqualified Leads", desc: "Attracting tire-kickers instead of buyers ready to purchase." },
                                { icon: <Magnet size={32} className="text-red-500" />, title: "Weak Offers", desc: "Lead magnets that don't provide enough value to capture interest." },
                                { icon: <TrendingUp size={32} className="text-red-500" />, title: "Broken Funnels", desc: "Too many steps, confusing messaging, or poor follow-up." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                                    <div className="mb-6 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-deepBlue-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-20">
                            <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">What I Do</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mt-3">My Lead Generation Services</h2>
                        </div>
                        <div className="space-y-24">
                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Magnet size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">High-Converting Landing Pages</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I design and build landing pages that convert at 20-40%+. Every element—headline, copy, CTA, form—is optimized to capture leads and drive action.</p>
                                    <ul className="space-y-3">
                                        {['Conversion-Focused Copywriting', 'A/B Testing & Optimization', 'Mobile-First Design', 'Fast Load Times (<2s)'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Landing Page" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><Target size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Lead Magnet Creation</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I create irresistible lead magnets—e-books, checklists, templates, webinars—that solve real problems and position you as the expert your audience trusts.</p>
                                    <ul className="space-y-3">
                                        {['Topic Research & Validation', 'Professional Content Writing', 'Design & Formatting', 'Automated Delivery Setup'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lead Magnet" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6"><TrendingUp size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Sales Funnel Optimization</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I map your entire customer journey and optimize every touchpoint—from first click to final sale—to maximize conversion rates and revenue.</p>
                                    <ul className="space-y-3">
                                        {['Funnel Mapping & Analysis', 'Conversion Rate Optimization (CRO)', 'Retargeting Campaigns', 'Lead Nurture Sequences'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sales Funnel" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="process" className="py-20 bg-deepBlue-900 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Lead Generation Process</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">From strategy to optimization, here's how I fill your pipeline with qualified leads.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Research", desc: "Identify your ideal customer profile and their pain points." },
                                { step: "02", title: "Build", desc: "Create high-converting landing pages and lead magnets." },
                                { step: "03", title: "Launch", desc: "Drive traffic through ads, SEO, and content marketing." },
                                { step: "04", title: "Optimize", desc: "Test, refine, and scale what's working." }
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

                <section className="py-24 bg-gradient-to-r from-gold-500 to-gold-600 text-deepBlue-900 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Fill Your Pipeline?</h2>
                        <p className="text-xl mb-10 font-medium max-w-2xl mx-auto">Stop wasting money on unqualified leads. Let's build a funnel that drives real sales.</p>
                        <a href="https://wa.me/971543491544" className="inline-flex items-center gap-2 px-8 py-4 bg-deepBlue-900 text-white font-bold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-xl">
                            Get More Qualified Leads <ArrowRight size={20} />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LeadGeneration;
