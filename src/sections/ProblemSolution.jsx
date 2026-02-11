import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Zap, TrendingUp, Calendar } from 'lucide-react';

const ProblemSolution = () => {
    const cards = [
        {
            title: "No Consistent Leads",
            problem: "Your website or social media looks good, but leads come in randomly.",
            solution: "I design high-converting funnels and traffic strategies tailored to your business.",
            result: "A steady flow of qualified leads — even when you’re not actively selling."
        },
        {
            title: "Low Conversion Rates",
            problem: "Visitors come, but they don’t buy or contact you.",
            solution: "I optimize landing pages, messaging, and CTAs using data-driven CRO techniques.",
            result: "More sales from the same traffic (higher ROI, lower cost per lead)."
        },
        {
            title: "Wasted Ad Spend",
            problem: "You’re spending money on ads but not seeing real results.",
            solution: "I build and manage performance-focused ad campaigns with constant testing and optimization.",
            result: "Lower ad costs, better targeting, and campaigns that actually convert."
        },
        {
            title: "Weak Online Presence",
            problem: "Your brand doesn’t stand out or build trust online.",
            solution: "I create a strong digital brand strategy using content, social proof, and positioning.",
            result: "More authority, credibility, and customers who trust you before they buy."
        },
        {
            title: "No Clear Marketing Strategy",
            problem: "You’re trying everything — SEO, ads, social media — but nothing feels connected.",
            solution: "I build a clear, scalable digital marketing roadmap aligned with your business goals.",
            result: "Clarity, focus, and marketing that works together instead of against itself."
        },
        {
            title: "Hard to Scale Growth",
            problem: "Growth depends too much on you and can’t scale easily.",
            solution: "I automate and systemize your marketing using funnels, email automation, and analytics.",
            result: "A scalable marketing engine that grows your business without burning you out."
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-deepBlue-900/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-deepBlue-900 mb-6 leading-tight">
                            Stop Guessing. <span className="text-gold-500">Start Scaling.</span>
                        </h2>
                        <h3 className="text-xl md:text-2xl text-deepBlue-800 font-medium mb-4">
                            Here’s how I turn struggling marketing into predictable growth.
                        </h3>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            I don’t just run ads or post content — I build systems that bring traffic, leads, and sales on autopilot.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariant}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-gold-400 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="mb-6 pb-4 border-b border-slate-100">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <h4 className="text-xl font-bold text-deepBlue-900">
                                        {card.title}
                                    </h4>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Problem */}
                                <div className="relative pl-4 border-l-2 border-red-200">
                                    <h5 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                                        <AlertCircle size={12} /> Problem
                                    </h5>
                                    <p className="text-slate-600 text-sm">
                                        {card.problem}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="relative pl-4 border-l-2 border-gold-400">
                                    <h5 className="text-xs font-bold text-gold-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                                        <Zap size={12} /> How I Solve It
                                    </h5>
                                    <p className="text-slate-700 text-sm font-medium">
                                        {card.solution}
                                    </p>
                                </div>

                                {/* Result */}
                                <div className="relative pl-4 border-l-2 border-green-400 bg-green-50/50 -mr-8 py-3 rounded-l-lg">
                                    <h5 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                                        <TrendingUp size={12} /> Result for You
                                    </h5>
                                    <p className="text-deepBlue-900 text-sm font-semibold">
                                        {card.result}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Strong Closing CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-deepBlue-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    {/* Abstract shapes for background interest using CSS only */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                        Ready to scale your business with a proven digital strategy?
                    </h3>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                        Let’s identify what’s holding your growth back — and fix it.
                    </p>
                    <a
                        href="https://wa.me/971543491544"
                        className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-deepBlue-900 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-xl relative z-10"
                    >
                        <Calendar size={20} />
                        Book a Free Strategy Call
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSolution;
