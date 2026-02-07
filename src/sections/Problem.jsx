import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { XCircle } from 'lucide-react';

const Problem = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    const problems = [
        "You’re watching potential customers scroll past your brand every single day—without stopping, clicking, or buying.",
        "Your marketing budget is bleeding into ads that bring clicks and likes… but almost zero real sales.",
        "Competitors with weaker offers are outranking you, outspending you, and quietly stealing your customers.",
        "You’re posting, boosting, emailing and “doing marketing”—but your revenue graph looks flat.",
        "Every month without a real strategy is money left on the table and market share lost forever."
    ];

    return (
        <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
            {/* Darkening Overlay */}
            <motion.div
                style={{ opacity: backgroundOpacity }}
                className="absolute inset-0 bg-slate-900 pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="block text-gold-500 font-semibold tracking-wider text-sm uppercase mb-3">
                        If this sounds familiar, keep reading
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-900 dark:text-white transition-colors duration-500">
                        Your Business Deserves Better Than This
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex items-start gap-4 p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
                        >
                            <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
                            <p className="text-lg text-slate-700 dark:text-slate-200">{problem}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-16 max-w-3xl mx-auto text-center bg-deepBlue-900 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                    <p className="text-xl md:text-2xl font-serif text-white leading-relaxed relative z-10">
                        "The real cost is NOT just the money going into campaigns. It’s the customers who never discover you, the deals you never close, and the growth your business never sees."
                    </p>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-gold-400 font-bold text-lg md:text-xl">
                            You don’t have a business problem. You have a marketing strategy problem—and that’s exactly what I fix.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
