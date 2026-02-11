import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, DollarSign, TrendingUp, Target, BarChart2, ArrowRight, Zap, MousePointer } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import SchemaJSONLD from '../../components/SchemaJSONLD';

const PaidAds = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Paid Advertising (PPC)",
        "provider": {
            "@type": "Person",
            "name": "Ayisha Muneer"
        },
        "areaServed": {
            "@type": "City",
            "name": "Dubai"
        },
        "description": "Expert PPC management in Dubai. Maximize ROAS with Google Ads, Facebook Ads, and LinkedIn campaigns that drive revenue."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much should I spend on ads?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on your industry and goals. I recommend starting with a test budget of AED 5,000-10,000/month to gather data, then scaling what works. The key is ROI, not budget size."
                }
            },
            {
                "@type": "Question",
                "name": "What's the difference between Google Ads and Facebook Ads?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Google Ads captures demand (people actively searching), while Facebook/Meta Ads create demand (targeting based on interests and behaviors). Both are powerful when used strategically."
                }
            },
            {
                "@type": "Question",
                "name": "How quickly will I see results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike SEO, paid ads deliver immediate traffic. You'll see initial data within days, but optimal performance typically comes after 30-60 days of testing and optimization."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="PPC & Paid Ads Expert Dubai | Google & Meta Ads | Ayisha Muneer"
                description="Maximize your ROAS with expert PPC management in Dubai. Specializing in Google Ads, Facebook Ads, and LinkedIn campaigns that drive revenue."
                keywords="PPC Agency Dubai, Google Ads Expert, Facebook Ads Manager, Paid Social UAE"
                url="https://ayishamuneer.com/services/paid-ads"
            />
            <SchemaJSONLD data={[jsonLd, faqSchema]} />

            <Header theme="dark" />

            <main>
                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepBlue-900 text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold-400 text-sm font-semibold mb-6"
                        >
                            Paid Advertising (PPC)
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                        >
                            Maximize ROI with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                                Targeted Campaigns
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Stop burning budget on clicks that don't convert. I manage high-performance campaigns on Meta, Google Ads, and LinkedIn to bring you ready-to-buy leads.
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
                                Why Your Ads Are Bleeding Money
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                You're spending thousands on ads but seeing minimal returns. Here's what's going wrong.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Target size={32} className="text-red-500" />,
                                    title: "Poor Targeting",
                                    desc: "Showing ads to everyone instead of your ideal customer profile."
                                },
                                {
                                    icon: <MousePointer size={32} className="text-red-500" />,
                                    title: "Weak Ad Creative",
                                    desc: "Generic messaging that doesn't stop the scroll or drive action."
                                },
                                {
                                    icon: <BarChart2 size={32} className="text-red-500" />,
                                    title: "No Optimization",
                                    desc: "Set-it-and-forget-it campaigns that waste budget on underperforming ads."
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
                            <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mt-3">My PPC Services</h2>
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
                                        <Target size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Google Ads Management</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        Capture high-intent buyers actively searching for your product or service. I optimize Search, Display, and Shopping campaigns to maximize conversions at the lowest cost per acquisition.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Search Campaign Optimization', 'Shopping Ads for E-commerce', 'Display Retargeting', 'Conversion Tracking Setup'].map(item => (
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
                                            alt="Google Ads Dashboard"
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
                                        <Zap size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Meta Ads (Facebook & Instagram)</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        Reach your ideal customers where they spend their time. I create scroll-stopping creatives and laser-targeted campaigns that drive awareness, engagement, and sales.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Audience Research & Segmentation', 'Creative Testing & Optimization', 'Retargeting Campaigns', 'Lead Generation Funnels'].map(item => (
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
                                            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Meta Ads Campaign"
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
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">LinkedIn B2B Campaigns</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        Target decision-makers by job title, company, and industry. Perfect for B2B lead generation, I create campaigns that fill your pipeline with qualified prospects.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Account-Based Marketing (ABM)', 'Sponsored Content & InMail', 'Lead Gen Forms', 'C-Suite Targeting'].map(item => (
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
                                            alt="LinkedIn Ads B2B"
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">My PPC Process</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">A data-driven approach to scaling profitable ad campaigns.</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Research", desc: "Analyze competitors, audience, and market opportunities." },
                                { step: "02", title: "Launch", desc: "Build campaigns with optimized targeting and creative." },
                                { step: "03", title: "Test", desc: "A/B test ads, audiences, and landing pages." },
                                { step: "04", title: "Scale", desc: "Double down on winners and cut losers ruthlessly." }
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Ad Spend Profitably?</h2>
                        <p className="text-xl mb-10 font-medium max-w-2xl mx-auto">Stop wasting money on ads that don't convert. Let's build campaigns that drive real ROI.</p>
                        <a href="https://wa.me/971543491544" className="inline-flex items-center gap-2 px-8 py-4 bg-deepBlue-900 text-white font-bold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-xl">
                            Get Your Free Audit <ArrowRight size={20} />
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default PaidAds;
