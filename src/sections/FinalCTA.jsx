import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, Phone, ArrowRight, X } from 'lucide-react';

const FinalCTA = () => {
    const [formOpen, setFormOpen] = useState(false);

    const trustPoints = [
        "9 Years of Proven Results",
        "Dubai & UAE Specialist",
        "No Long-Term Contracts",
        "100% Transparent Reporting"
    ];

    return (
        <section className="py-24 bg-deepBlue-900 relative overflow-hidden text-white" id="contact">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-gold-400 font-bold tracking-wider text-sm uppercase mb-4 block">
                        Let’s talk about your growth
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Ready to Stop Struggling and <span className="text-gold-400">Start Growing?</span>
                    </h2>

                    <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Book a free 30-minute consultation—no pressure, no long-term commitments. Just clear, honest insights into what’s holding your marketing back and how to fix it.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a
                            href="https://wa.me/971543491544"
                            className="px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-all shadow-lg hover:shadow-gold-500/20 w-full sm:w-auto text-center"
                        >
                            Claim Your Free Consultation
                        </a>
                        <a
                            href="mailto:marketing@ayishamuneer.com"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            <Mail size={18} /> Email Me
                        </a>
                    </div>

                    {/* Trust Points */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {trustPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm md:text-base font-medium text-slate-300">
                                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Slide-over Consultation Form */}
            <AnimatePresence>
                {formOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setFormOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl p-8 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-bold text-deepBlue-900">Book Consultation</h3>
                                <button onClick={() => setFormOpen(false)} className="text-slate-400 hover:text-deepBlue-900">
                                    <X size={24} />
                                </button>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors text-slate-900" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors text-slate-900" placeholder="you@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Website (Optional)</label>
                                    <input type="url" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors text-slate-900" placeholder="https://..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">What is your biggest marketing challenge?</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors text-slate-900" placeholder="Tell me about your business..." />
                                </div>
                                <button type="submit" className="w-full py-4 bg-deepBlue-900 text-white font-bold rounded-lg hover:bg-deepBlue-800 transition-colors">
                                    Submit Request
                                </button>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default FinalCTA;
