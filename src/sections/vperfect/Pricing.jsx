import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Starter Website",
        description: "Perfect for new businesses and solopreneurs",
        price: "$2,500",
        features: [
            "5-page custom website",
            "Mobile responsive",
            "Contact forms & integrations",
            "30 days post-launch support",
            "SEO foundation"
        ],
        highlight: false
    },
    {
        name: "Business Growth Package",
        description: "For established businesses ready to scale",
        price: "$6,500",
        features: [
            "10-15 page custom website",
            "Advanced features & integrations",
            "E-commerce (up to 50 products)",
            "Analytics & conversion tracking",
            "90 days optimization support"
        ],
        highlight: true
    },
    {
        name: "Enterprise Solution",
        description: "Custom web applications & complex builds",
        price: "Custom Quote",
        features: [
            "Unlimited pages & features",
            "Custom functionality",
            "Third-party integrations",
            "Dedicated project manager",
            "12-month support & optimization"
        ],
        highlight: false
    }
];

export default function Pricing() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Investment That Pays For Itself
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative rounded-2xl p-8 ${plan.highlight ? 'bg-white border-2 border-blue-600 shadow-xl scale-105 z-10' : 'bg-white border border-slate-100 shadow-sm'}`}>
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                            <div className="text-3xl font-bold text-slate-900 mb-8">{plan.price}</div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-2xl mx-auto text-slate-600 text-sm bg-blue-50 p-6 rounded-xl">
                    <p className="font-semibold mb-2">Every project includes:</p>
                    <p>
                        Free strategy consultation, unlimited revisions during design phase, training on how to manage your site, and our "No Surprises" guarantee — if we quote it, that's what you pay.
                    </p>
                </div>
            </div>
        </section>
    );
}
