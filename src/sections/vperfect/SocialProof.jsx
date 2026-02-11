import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: "Our lead generation increased 340% in the first 60 days.",
        author: "Sarah Martinez",
        role: "Founder @ GreenScape Consulting"
    },
    {
        quote: "Finally, a developer who understands business, not just code.",
        author: "James Chen",
        role: "CEO @ TechForward Solutions"
    },
    {
        quote: "They didn't just build us a website. They built us a sales system.",
        author: "Amanda Rodriguez",
        role: "Owner @ Luxe Interiors"
    }
];

const stats = [
    { label: "Websites Launched", value: "150+" },
    { label: "Avg. Conversion Increase", value: "67%" },
    { label: "Client Satisfaction", value: "4.8/5" },
    { label: "Return Clients", value: "92%" }
];

export default function SocialProof() {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Results Our Clients Actually Care About
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-lg italic text-slate-300 mb-6">"{t.quote}"</p>
                            <div>
                                <p className="font-bold text-white">{t.author}</p>
                                <p className="text-sm text-slate-400">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-slate-800 pt-12">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-400 text-sm md:text-base font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
