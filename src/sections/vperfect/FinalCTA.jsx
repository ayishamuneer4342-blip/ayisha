import React from 'react';
import { Check } from 'lucide-react';

export function FinalCTA() {
    return (
        <section className="py-20 bg-slate-900 text-white text-center border-t border-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to Stop Losing Customers to a <br className="hidden md:block" /> Mediocre Website?
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                    Book a free 30-minute strategy call. We'll audit your current situation, discuss your goals, and map out exactly what you need to succeed online.
                </p>

                <button className="px-8 py-4 bg-gold-500 text-deepBlue-900 hover:bg-gold-400 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl mb-8">
                    Schedule Your Free Strategy Call
                </button>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-300 text-sm mb-12">
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-500" /> No-obligation consultation</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-500" /> Get a custom action plan</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-500" /> Honest pricing, no surprises</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-500" /> Same-day response guaranteed</div>
                </div>

                <p className="text-slate-400 text-sm">
                    Not ready to talk? Email us at <a href="mailto:ayishamuneer4342@gmail.com" className="underline hover:text-gold-400">ayishamuneer4342@gmail.com</a> with your biggest <br className="md:hidden" /> website challenge for a free video breakdown.
                </p>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
            <div className="container mx-auto px-4">
                <p className="text-lg font-medium text-slate-300">
                    Building websites that work harder than your competition's sales team.
                </p>
            </div>
        </footer>
    );
}
