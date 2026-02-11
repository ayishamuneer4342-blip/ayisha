import React from 'react';
import { motion } from 'framer-motion';

const OnboardingProcess = () => {
    const steps = [
        {
            number: 1,
            title: "Quick Intro Call",
            description: "We talk about your business, goals, and what's not working right now."
        },
        {
            number: 2,
            title: "I Review Your Business",
            description: "I check your website, ads, social media, and current marketing."
        },
        {
            number: 3,
            title: "Clear Plan",
            description: "I share a simple plan on what we'll do and how it helps you grow."
        },
        {
            number: 4,
            title: "Setup & Start",
            description: "I set up the tools, campaigns, or funnels we need to start."
        },
        {
            number: 5,
            title: "Launch & Improve",
            description: "We go live, track results, and improve what's working."
        },
        {
            number: 6,
            title: "Scale What Works",
            description: "Once we see results, we focus on scaling and steady growth."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-deepBlue-900 mb-4">
                        Onboarding Process
                    </h2>
                    <p className="text-lg text-slate-600">
                        No confusion. No long processes. Just clear steps.
                    </p>
                </motion.div>

                {/* Simple Grid Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.number}
                            variants={itemVariants}
                            className="bg-white rounded-xl p-6 border border-slate-200 hover:border-gold-400 hover:shadow-md transition-all duration-300"
                        >
                            {/* Number Badge */}
                            <div className="w-12 h-12 rounded-lg bg-deepBlue-900 flex items-center justify-center text-white font-bold text-lg mb-4">
                                {step.number}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-deepBlue-900 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://wa.me/971543491544"
                        className="inline-block px-8 py-3 bg-deepBlue-900 text-white font-semibold rounded-lg hover:bg-deepBlue-800 transition-all"
                    >
                        Let's Get Started
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default OnboardingProcess;
