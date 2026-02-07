import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "How long does a typical project take?",
        a: "Simple sites: 2-4 weeks. Complex builds: 6-12 weeks. We'll give you an exact timeline after our discovery call. We don't rush quality, but we also don't waste your time."
    },
    {
        q: "Do I need to provide content or do you write it?",
        a: "We can do either. If you have content ready, great. If not, we can create it or connect you with professional copywriters who specialize in conversion-focused web content."
    },
    {
        q: "What if I need changes after launch?",
        a: "Minor tweaks during our support period? Covered. Bigger changes or new features? We offer flexible monthly retainers or project-based pricing. You're never stuck."
    },
    {
        q: "Will my site work on mobile?",
        a: "Absolutely. Over 60% of web traffic is mobile. Every site we build looks perfect and functions flawlessly on phones, tablets, and desktops."
    },
    {
        q: "What about SEO?",
        a: "Every site includes technical SEO foundations — fast loading, clean code, proper structure. For ongoing SEO and content strategy, we can recommend trusted partners or include it in your package."
    },
    {
        q: "Do you offer hosting?",
        a: "We can handle everything or work with your existing hosting. We'll recommend the best solution for your needs and budget."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        FAQ
                    </h2>
                    <p className="text-slate-600">Got questions? We've got answers.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-gold-600' : 'text-slate-900'}`}>
                                    {faq.q}
                                </span>
                                {openIndex === index ?
                                    <Minus className="w-5 h-5 text-gold-500 shrink-0" /> :
                                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                                }
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-slate-600 leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
