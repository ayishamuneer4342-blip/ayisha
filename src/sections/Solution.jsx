import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Globe, Filter, FlaskConical, TrendingUp } from 'lucide-react';

const Solution = () => {
    const steps = [
        {
            title: "Deep Discovery",
            description: "We start with your world, not generic templates. Your offers, numbers, customers, margins, past campaigns, and goals—so the strategy is built on reality, not assumptions.",
            icon: Search,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Market Intelligence",
            description: "We analyze your competitors, audience behavior, and local UAE search & social trends to see where the real opportunities (and wasted spend) are.",
            icon: Globe,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Strategic Filtering",
            description: "Not every channel deserves your budget. Together we select the 2–3 highest-leverage platforms and tactics that will move the needle fastest for you. No vanity metrics, only growth metrics.",
            icon: Filter,
            color: "bg-amber-100 text-amber-600"
        },
        {
            title: "Smart Experimentation",
            description: "We launch focused test campaigns, track every dirham, and quickly see what resonates. We keep what works, kill what doesn’t, and keep optimizing.",
            icon: FlaskConical,
            color: "bg-pink-100 text-pink-600"
        },
        {
            title: "Profitable Scaling",
            description: "Once we find your winning formula, we scale with confidence—more budget into top-performing campaigns, more content that converts, and more of the right traffic to your offers.",
            icon: TrendingUp,
            color: "bg-green-100 text-green-600"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="process">
            <div className="container mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-gold-500 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        What changes when strategy leads
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mb-6">
                        Strategic Marketing That Actually Converts
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        I’m Ayisha Muneer, a Dubai-based freelance digital marketer with 9 years of turning silent social feeds and underperforming ad accounts into predictable sales machines. Not with guesswork rules—but with a data-driven system.
                    </p>
                </motion.div>

                {/* Timeline Process */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-slate-200 lg:-translate-x-1/2"></div>

                    <div className="space-y-12 lg:space-y-0 relative">
                        {steps.map((step, index) => (
                            <StepCard key={index} step={step} index={index} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-20 relative z-10"
                    >
                        <p className="text-xl font-medium text-deepBlue-900 mb-6">
                            You stop guessing, you stop bleeding budget—and you start seeing predictable, measurable growth.
                        </p>
                        <a href="https://wa.me/971543491544" className="inline-block px-8 py-4 bg-gold-500 text-white font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg hover:shadow-xl">
                            Let’s Build Your Strategy
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const StepCard = ({ step, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-start gap-8 lg:gap-0 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between`}
        >
            {/* Icon Circle (Center) */}
            <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-slate-50 shadow-md z-10 flex items-center justify-center">
                <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center`}>
                    <step.icon size={20} />
                </div>

                {/* Step Number Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-deepBlue-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {index + 1}
                </div>
            </div>

            {/* Content Card */}
            <div className={`w-full lg:w-5/12 ml-20 lg:ml-0 ${isEven ? 'lg:pr-12' : 'lg:pl-12 text-left'}`}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-deepBlue-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        {step.description}
                    </p>
                </div>
            </div>

            {/* Spacer for the other side */}
            <div className="hidden lg:block w-5/12" />
        </motion.div>
    );
};

export default Solution;
