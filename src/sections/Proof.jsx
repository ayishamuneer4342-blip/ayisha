import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from 'lucide-react';

const Proof = () => {
    const caseStudies = [
        {
            category: "E-commerce Brand (UAE)",
            title: "AED 250K Revenue in 6 Months",
            subtitle: "400% ROAS from Paid Campaigns",
            challenge: "Zero online sales, relying only on walk-ins.",
            solution: "Rebuilt messaging, Meta & Google Shopping campaigns, email flows.",
            stats: { value: "250K", label: "Revenue generated" },
            color: "bg-blue-600"
        },
        {
            category: "Real Estate Developer (Dubai)",
            title: "150+ Qualified Leads/Month",
            subtitle: "approx. 25% Conversion to Showings",
            challenge: "High competition, low-quality leads.",
            solution: "Refined buyer persona, landing pages, qualification filters.",
            stats: { value: "150+", label: "Monthly Leads" },
            color: "bg-gold-500"
        },
        {
            category: "Boutique Hospitality Brand",
            title: "40% Increase in Direct Bookings",
            subtitle: "300% Increase in Engagement",
            challenge: "Declining bookings, poor engagement.",
            solution: "Content system, website optimization, remarketing.",
            stats: { value: "40%", label: "Direct Bookings" },
            color: "bg-deepBlue-900"
        }
    ];

    const testimonials = [
        {
            quote: "I had a really good experience working with Ayisha. She has strong knowledge in digital marketing and clearly understands what a business actually needs. She explained things properly, communication was smooth, and her ideas were very practical. We could see good results as well. Definitely recommend her if you’re looking for a reliable digital marketing strategist in Dubai.",
            author: "Mohammad Fazil",
            role: "Client",
            company: "Google Review",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
        },
        {
            quote: "We’d tried agencies before. The difference with Ayisha was her transparency, reporting, and honest advice. No fluff, just results.",
            author: "Mohammed Al-Fayed",
            role: "Founder",
            company: "TechRetail",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
        }
    ];

    return (
        <section className="py-24 bg-slate-50" id="case-studies">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold-500 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Proof over promises
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mb-6">
                        Real Results for Real Businesses
                    </h2>
                    <p className="text-lg text-slate-600">
                        Here’s what happens when sharp strategy meets consistent execution.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className={`h-2 ${study.color} w-full`} />
                            <div className="p-8 flex-1 flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                    {study.category}
                                </span>
                                <h3 className="text-xl font-bold text-deepBlue-900 mb-2">
                                    {study.title}
                                </h3>
                                <p className="text-gold-600 font-medium text-sm mb-6">
                                    {study.subtitle}
                                </p>

                                <div className="space-y-4 mb-8 flex-1">
                                    <div>
                                        <p className="text-xs font-semibold text-slate-900 mb-1">Challenge:</p>
                                        <p className="text-sm text-slate-600">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-900 mb-1">Solution:</p>
                                        <p className="text-sm text-slate-600">{study.solution}</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <span className="block text-2xl font-bold text-deepBlue-900">{study.stats.value}</span>
                                        <span className="text-xs text-slate-500">{study.stats.label}</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                                        <ArrowUpRight size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials - Google Style */}
                <div className="max-w-5xl mx-auto mt-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 mb-4">
                            <span className="font-bold text-slate-700 flex items-center gap-1">
                                <span className="text-blue-500">G</span>
                                <span className="text-red-500">o</span>
                                <span className="text-yellow-500">o</span>
                                <span className="text-blue-500">g</span>
                                <span className="text-green-500">l</span>
                                <span className="text-red-500">e</span>
                            </span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <span className="text-xs text-slate-500 font-medium">5.0 Star Rating</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-100 shrink-0">
                                        <img
                                            src={t.image}
                                            alt={t.author}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800 text-sm">{t.author}</p>
                                        <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                                        <div className="flex gap-0.5 mt-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                                        </div>
                                    </div>

                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {t.quote.substring(0, 150)}... <span className="text-slate-400 font-medium cursor-pointer">More</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Proof;
