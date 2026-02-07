import React from 'react';
import { motion } from 'framer-motion';

const BlogHero = () => {
    return (
        <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
            {/* Background Accents (Consistent with Hero.jsx) */}
            <div className="absolute top-0 right-0 w-1/3 h-64 bg-gold-400/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-20 left-0 w-1/3 h-64 bg-deepBlue-900/5 blur-3xl rounded-full -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-gold-500 uppercase bg-gold-500/10 rounded-full">
                        The Growth Journal
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deepBlue-900 mb-6 leading-tight">
                        Insights that Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepBlue-800 to-gold-500">Real Results</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        Discover actionable strategies on digital marketing, SEO, and brand growth tailored for the UAE market.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogHero;
