import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Share2, TrendingUp, Users, Target, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import SchemaJSONLD from '../../components/SchemaJSONLD';

const SocialMedia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Social Media Marketing",
        "provider": {
            "@type": "Person",
            "name": "Ayisha Muneer"
        },
        "areaServed": {
            "@type": "City",
            "name": "Dubai"
        },
        "description": "Expert social media marketing services in Dubai. Build engaged communities and drive conversions across Instagram, LinkedIn, TikTok, and Facebook."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which platforms should my business focus on?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on your audience. B2B businesses thrive on LinkedIn, while B2C brands see better results on Instagram and TikTok. I analyze your target market and recommend the best platforms for your goals."
                }
            },
            {
                "@type": "Question",
                "name": "How often should I post on social media?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Quality over quantity. I recommend 3-5 strategic posts per week on each platform, focusing on content that drives engagement and conversions rather than posting daily just to stay visible."
                }
            },
            {
                "@type": "Question",
                "name": "Can social media actually drive sales?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. With the right strategy—targeted content, community engagement, and conversion-focused campaigns—social media becomes a powerful sales channel, not just a branding tool."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="Social Media Marketing Dubai | Instagram, LinkedIn & TikTok | Ayisha Muneer"
                description="Expert social media marketing services in Dubai. I help brands grow their audience and drive engagement on Instagram, LinkedIn, and TikTok."
                keywords="Social Media Marketing Dubai, Instagram Marketing, LinkedIn Growth, SMM Expert UAE"
                url="https://ayishamuneer.com/services/social-media"
            />
            <SchemaJSONLD data={[jsonLd, faqSchema]} />

            <Header theme="dark" />

            <main>
                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepBlue-900 text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-pink-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold-400 text-sm font-semibold mb-6"
                        >
                            Social Media Marketing
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                        >
                            Build a Community <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                                That Converts
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Stop posting into the void. I build data-driven social media strategies that turn followers into customers across Instagram, LinkedIn, TikTok, and Facebook.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <a href="https://wa.me/971543491544" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/20">
                                Get Your Strategy Call
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
                                Why Your Social Media Isn't Working
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                You're posting consistently, but the engagement is low and sales are non-existent. Here's why most social strategies fail.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Target size={32} className="text-red-500" />,
                                    title: "No Clear Strategy",
                                    desc: "Random posts with no content calendar or goal alignment."
                                },
                                {
                                    icon: <Users size={32} className="text-red-500" />,
                                    title: "Wrong Audience",
                                    desc: "Posting content that doesn't resonate with your ideal customer."
                                },
                                {
                                    icon: <TrendingUp size={32} className="text-red-500" />,
                                    title: "Zero Conversion Focus",
                                    desc: "Building vanity metrics (likes) instead of driving actual revenue."
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

                {/* SERVICE FEATURES */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-20">
                            <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">What I Do</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mt-3">My Social Media Services</h2>
                        </div>

                        <div className="space-y-24">
                            {/* Feature 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                        <Calendar size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Content Strategy & Calendar</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        I create platform-specific content calendars that align with your business goals, ensuring every post has a purpose—whether it's awareness, engagement, or conversion.
                                    </p>
                                    <ul className="space-y-3">
                                        {['30-Day Content Roadmap', 'Platform-Specific Formats', 'Trending Topic Integration', 'Brand Voice Guidelines'].map(item => (
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
                                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Social Media Content Calendar"
                                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row-reverse gap-12 items-center"
                            >
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                        <MessageCircle size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Community Management</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        Building a loyal audience requires more than just posting. I actively engage with your community, respond to comments, and foster relationships that turn followers into brand advocates.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Daily Engagement & Replies', 'DM Management', 'Crisis Response Protocol', 'User-Generated Content Campaigns'].map(item => (
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
                                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Community Engagement"
                                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Feature 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                                        <TrendingUp size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Performance Analytics</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        I track what matters—not just likes and shares, but actual business metrics like website traffic, lead generation, and revenue attribution from social channels.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Monthly Performance Reports', 'Competitor Benchmarking', 'Content Performance Analysis', 'ROI Tracking & Optimization'].map(item => (
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
                                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Social Media Analytics"
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">How I Build Your Social Presence</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">A proven 4-step process to transform your social media from a time-sink into a revenue driver.</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Audit", desc: "Analyze your current presence and competitor strategies." },
                                { step: "02", title: "Strategy", desc: "Build a custom content plan aligned with your goals." },
                                { step: "03", title: "Create", desc: "Produce high-quality content and schedule strategically." },
                                { step: "04", title: "Optimize", desc: "Track performance and refine based on data insights." }
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build a Community That Buys?</h2>
                        <p className="text-xl mb-10 font-medium max-w-2xl mx-auto">Stop wasting time on social media. Let's turn your followers into customers.</p>
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

export default SocialMedia;
