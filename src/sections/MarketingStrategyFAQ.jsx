import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const MarketingStrategyFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What does a Digital Marketing Strategist do?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Digital Marketing Strategist develops comprehensive marketing plans that align all digital channels—SEO, paid ads, content marketing, social media, and email—to achieve specific business goals. They analyze data, identify opportunities, create roadmaps, and optimize campaigns for maximum ROI."
                }
            },
            {
                "@type": "Question",
                "name": "Why hire a Digital Marketing Strategist in Dubai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A local Digital Marketing Strategist in Dubai understands the UAE market dynamics, cultural nuances, consumer behavior, and regulatory requirements. They can navigate the competitive Dubai business landscape and create strategies tailored to regional preferences and trends."
                }
            },
            {
                "@type": "Question",
                "name": "How much does a Digital Marketing Strategist cost in UAE?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Digital Marketing Strategist fees in UAE vary based on experience and scope. Freelance strategists typically charge AED 5,000-20,000 per month for retainer services, while project-based work ranges from AED 10,000-50,000. The investment often delivers 3-10x ROI through improved marketing performance."
                }
            },
            {
                "@type": "Question",
                "name": "What's the difference between a Digital Marketing Strategist and a Marketing Manager?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Digital Marketing Strategist focuses on high-level planning, data analysis, and creating comprehensive marketing roadmaps across all channels. A Marketing Manager typically handles day-to-day execution and team management. Many businesses hire strategists for strategic direction while managers handle implementation."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to see results from digital marketing strategy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Initial results from a digital marketing strategy typically appear within 30-60 days for paid campaigns and 90-180 days for organic channels like SEO. Full momentum builds over 6-12 months as all channels compound. The timeline depends on your industry, competition, and budget."
                }
            }
        ]
    };

    return (
        <section className="py-20 bg-white">
            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <HelpCircle className="text-gold-500" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepBlue-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Common questions about hiring a Digital Marketing Strategist in Dubai
                    </p>
                </motion.div>

                {/* Two Column Grid */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    {faqSchema.mainEntity.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {/* Question Header - Clickable */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-slate-100 transition-colors"
                            >
                                <div className="flex items-start gap-3 flex-1">
                                    <span className="text-gold-500 text-xl font-bold flex-shrink-0">Q{index + 1}.</span>
                                    <h3 className="text-lg font-bold text-deepBlue-900">
                                        {faq.name}
                                    </h3>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {/* Answer - Collapsible */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-0">
                                            <p className="text-slate-700 leading-relaxed ml-8">
                                                {faq.acceptedAnswer.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-slate-600 mb-6">
                        Still have questions about digital marketing strategy?
                    </p>
                    <a
                        href="https://wa.me/971543491544"
                        className="inline-flex items-center px-8 py-4 bg-deepBlue-900 text-white font-semibold rounded-lg hover:bg-deepBlue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Book Your Free Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default MarketingStrategyFAQ;
