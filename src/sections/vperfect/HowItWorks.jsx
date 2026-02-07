import React from 'react';
import { MessageSquare, Layout, Hammer, Rocket, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: MessageSquare,
        title: "1. Discovery & Strategy",
        description: "We don't start with code — we start with questions. What are your business goals? Who's your ideal customer? This isn't just a website project; it's a growth strategy."
    },
    {
        icon: Layout,
        title: "2. Design & Approval",
        description: "You'll see exactly what you're getting before we write a single line of code. We create mockups, gather your feedback, and refine until it's perfect."
    },
    {
        icon: Hammer,
        title: "3. Development & Testing",
        description: "This is where the magic happens. We build your site with clean, fast code. Then we test it obsessively — every button, every form, every page on every device."
    },
    {
        icon: Rocket,
        title: "4. Launch & Optimization",
        description: "Go-live day is just the beginning. We monitor performance, gather real user data, and make continuous improvements. Your site gets better over time."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        From First Call to Launch: Simple, Transparent, Effective
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="bg-slate-50 p-6 rounded-2xl h-full border border-slate-100 relative z-10 hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title.split('. ')[1]}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            {/* Connector line for desktop - hidden for now as it needs complex positioning logic depending on grid */}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://wa.me/971543491544" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-deepBlue-900 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-gold-500/25">
                        Start Your Project Now <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
