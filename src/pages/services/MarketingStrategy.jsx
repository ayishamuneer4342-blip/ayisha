import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Target, TrendingUp, Compass, BarChart2, ArrowRight, Lightbulb } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import SchemaJSONLD from '../../components/SchemaJSONLD';

const MarketingStrategy = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const jsonLd = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Marketing Strategy & Consulting", "provider": { "@type": "Person", "name": "Ayisha Muneer" }, "areaServed": { "@type": "City", "name": "Dubai" }, "description": "Expert marketing strategy consulting in Dubai. Build a data-driven roadmap that aligns all your marketing efforts for maximum ROI." };
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Do I need a marketing strategy or can I just run ads?", "acceptedAnswer": { "@type": "Answer", "text": "Running ads without a strategy is like driving without a map. You'll burn budget fast. A strategy ensures every dollar spent is aligned with your business goals and target audience." } }, { "@type": "Question", "name": "How long does it take to see results from a new strategy?", "acceptedAnswer": { "@type": "Answer", "text": "Strategy implementation takes 30-60 days to set up properly. You'll see initial traction in 90 days, with significant momentum building over 6-12 months as all channels compound." } }, { "@type": "Question", "name": "What's included in a marketing strategy?", "acceptedAnswer": { "@type": "Answer", "text": "A complete strategy includes market research, competitor analysis, customer personas, channel selection, content roadmap, budget allocation, and KPI tracking—everything you need to execute with confidence." } }] };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO title="Marketing Strategy Consultant Dubai | Ayisha Muneer" description="Expert marketing strategy consulting in Dubai. Build a data-driven roadmap that aligns all your marketing efforts for maximum ROI." keywords="Marketing Strategy Dubai, Marketing Consultant UAE, Growth Strategy, Business Consulting" url="https://ayishamuneer.com/services/marketing-strategy" />
            <SchemaJSONLD data={[jsonLd, faqSchema]} />
            <Header theme="dark" />
            <main>
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepBlue-900 text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold-400 text-sm font-semibold mb-6">Marketing Strategy & Consulting</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            Stop Guessing. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Start Growing.</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Tired of random marketing tactics that don't connect? I build data-driven strategies that align every channel—SEO, ads, content, email—into a cohesive growth engine.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://wa.me/971543491544" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg">Book Your Strategy Session</a>
                            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">See My Approach</a>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-900 mb-6">Why Your Marketing Feels Chaotic</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">You're doing "all the things" but nothing seems to work together. Here's why.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: <Compass size={32} className="text-red-500" />, title: "No Clear Direction", desc: "Jumping between tactics without a unified plan or goal." },
                                { icon: <Target size={32} className="text-red-500" />, title: "Wrong Audience", desc: "Marketing to everyone instead of your ideal customer profile." },
                                { icon: <BarChart2 size={32} className="text-red-500" />, title: "No Data Tracking", desc: "Flying blind with no metrics to measure what's actually working." }
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
                            <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mt-3">My Strategy Services</h2>
                        </div>
                        <div className="space-y-24">
                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Lightbulb size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Full Marketing Audit</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I analyze your entire marketing ecosystem—website, SEO, ads, social, email—to identify what's working, what's broken, and where the biggest opportunities lie.</p>
                                    <ul className="space-y-3">
                                        {['Competitor Benchmarking', 'Channel Performance Analysis', 'Customer Journey Mapping', 'Budget Allocation Review'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Marketing Audit" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><Compass size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Custom Growth Roadmap</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I create a 90-day action plan that prioritizes high-impact initiatives, aligns your team, and gives you a clear path from where you are to where you want to be.</p>
                                    <ul className="space-y-3">
                                        {['Quarterly Goal Setting', 'Channel Prioritization', 'Content & Campaign Calendar', 'KPI Dashboard Setup'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Growth Strategy" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6"><TrendingUp size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Ongoing Consulting & Optimization</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">Strategy isn't set-it-and-forget-it. I provide monthly consulting to review performance, pivot when needed, and ensure you're always moving toward your goals.</p>
                                    <ul className="space-y-3">
                                        {['Monthly Performance Reviews', 'Strategic Pivots & Adjustments', 'Team Training & Workshops', 'Executive Reporting'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Marketing Consulting" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="process" className="py-20 bg-deepBlue-900 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Strategy Process</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">From audit to execution, here's how I build strategies that drive growth.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Audit", desc: "Deep dive into your current marketing performance." },
                                { step: "02", title: "Research", desc: "Analyze competitors, market trends, and customer insights." },
                                { step: "03", title: "Plan", desc: "Build a 90-day roadmap with clear priorities and KPIs." },
                                { step: "04", title: "Execute", desc: "Guide implementation and optimize based on results." }
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build a Winning Strategy?</h2>
                        <p className="text-xl mb-10 font-medium max-w-2xl mx-auto">Stop wasting budget on tactics that don't align. Let's build a roadmap that drives real growth.</p>
                        <a href="https://wa.me/971543491544" className="inline-flex items-center gap-2 px-8 py-4 bg-deepBlue-900 text-white font-bold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-xl">
                            Book Your Strategy Session <ArrowRight size={20} />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default MarketingStrategy;
