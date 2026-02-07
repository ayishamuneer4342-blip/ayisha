import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Send, Users, Zap, ArrowRight, MailOpen } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import SchemaJSONLD from '../../components/SchemaJSONLD';

const EmailMarketing = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Email Marketing",
        "provider": { "@type": "Person", "name": "Ayisha Muneer" },
        "areaServed": { "@type": "City", "name": "Dubai" },
        "description": "Expert email marketing services in Dubai. Build automated flows and newsletters that drive revenue 24/7."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "What's a good email open rate?", "acceptedAnswer": { "@type": "Answer", "text": "Industry average is 15-25%, but with proper segmentation and personalization, I aim for 30-40%+ open rates and 3-5% click-through rates." } },
            { "@type": "Question", "name": "How often should I email my list?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on your audience and value. I recommend 1-2 value-driven emails per week for most businesses, with promotional emails mixed in strategically." } },
            { "@type": "Question", "name": "Can email marketing really drive sales?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Email has the highest ROI of any marketing channel—$42 for every $1 spent. With the right automation and segmentation, it's a revenue machine." } }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO title="Email Marketing Specialist Dubai | Automation & Newsletters" description="Boost customer retention with expert email marketing services in Dubai. I create automated flows and newsletters that drive revenue." keywords="Email Marketing Dubai, Klaviyo Expert, Mailchimp Automation, Newsletter Strategy" url="https://ayishamuneer.com/services/email-marketing" />
            <SchemaJSONLD data={[jsonLd, faqSchema]} />
            <Header theme="dark" />
            <main>
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepBlue-900 text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold-400 text-sm font-semibold mb-6">Email Marketing</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            Turn Subscribers into <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Loyal Customers</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Your email list is your most valuable asset. I build automated email flows that welcome new leads, recover lost carts, and drive repeat sales 24/7.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://wa.me/971543491544" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg">Get Your Email Strategy</a>
                            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">See How I Work</a>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-900 mb-6">Why Your Emails Get Ignored</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">You're sending emails, but open rates are low and sales are non-existent. Here's why.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: <MailOpen size={32} className="text-red-500" />, title: "Boring Subject Lines", desc: "Generic subject lines that blend into the inbox noise." },
                                { icon: <Users size={32} className="text-red-500" />, title: "No Segmentation", desc: "Sending the same message to everyone instead of personalizing." },
                                { icon: <Send size={32} className="text-red-500" />, title: "No Automation", desc: "Manual sending instead of automated flows that nurture leads." }
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
                            <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mt-3">My Email Services</h2>
                        </div>
                        <div className="space-y-24">
                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Zap size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Automated Email Flows</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I build automated sequences that nurture leads and drive sales while you sleep. Welcome series, abandoned cart recovery, post-purchase upsells—all on autopilot.</p>
                                    <ul className="space-y-3">
                                        {['Welcome Series (5-7 emails)', 'Abandoned Cart Recovery', 'Post-Purchase Nurture', 'Re-engagement Campaigns'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Email Automation" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><Mail size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Newsletter Strategy</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">Keep your audience engaged with value-packed newsletters that build trust and keep you top-of-mind when they're ready to buy.</p>
                                    <ul className="space-y-3">
                                        {['Content Calendar Planning', 'High-Converting Copywriting', 'Design & Template Setup', 'A/B Testing & Optimization'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Newsletter Design" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6"><Users size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">List Segmentation & Personalization</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">Stop sending generic blasts. I segment your list by behavior, purchase history, and engagement to deliver hyper-relevant messages that convert.</p>
                                    <ul className="space-y-3">
                                        {['Behavioral Segmentation', 'Dynamic Content Blocks', 'Personalized Product Recommendations', 'List Cleaning & Hygiene'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Email Segmentation" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="process" className="py-20 bg-deepBlue-900 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Email Process</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">From strategy to automation, here's how I turn your email list into a revenue engine.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Audit", desc: "Review your current email performance and list health." },
                                { step: "02", title: "Strategy", desc: "Build a segmentation and automation roadmap." },
                                { step: "03", title: "Create", desc: "Write high-converting copy and design templates." },
                                { step: "04", title: "Optimize", desc: "Test, track, and refine for maximum ROI." }
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Turn Emails into Revenue?</h2>
                        <p className="text-xl mb-10 font-medium max-w-2xl mx-auto">Stop leaving money on the table. Let's build an email strategy that drives repeat sales.</p>
                        <a href="https://wa.me/971543491544" className="inline-flex items-center gap-2 px-8 py-4 bg-deepBlue-900 text-white font-bold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-xl">
                            Get Your Email Strategy <ArrowRight size={20} />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default EmailMarketing;
