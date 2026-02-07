import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
    {
        title: "We Speak Human, Not Jargon",
        description: "No 'synergizing the UX paradigm' nonsense. We explain everything in plain English because clear communication builds better websites."
    },
    {
        title: "Speed Matters (To Us AND Google)",
        description: "A one-second delay kills 7% of conversions. We obsess over performance because your revenue depends on it."
    },
    {
        title: "Built to Scale",
        description: "Your website should grow with your business. We architect solutions that handle ten visitors or ten thousand without breaking a sweat."
    },
    {
        title: "You Own Everything",
        description: "Your code. Your design files. Your content. No proprietary platforms. No vendor lock-in. You take it all with you."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            We're Not Just Developers. <br /> We're Business Partners.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex gap-4 md:gap-6 items-start p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-base">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
