import React from 'react';
import { Code2, ShoppingBag, Paintbrush, LifeBuoy, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: "Custom Website Development",
        description: "Your business isn't cookie-cutter, so why should your website be? We build from scratch to match your exact needs — whether that's generating leads, selling products, or establishing authority in your industry."
    },
    {
        icon: ShoppingBag,
        title: "E-Commerce That Sells",
        description: "Shopping cart abandoned? Checkout too complicated? We create seamless buying experiences that turn browsers into buyers. Integrated payments, inventory management, and smooth UX."
    },
    {
        icon: Paintbrush,
        title: "Website Redesign & Optimization",
        description: "Already have a website that's underperforming? We diagnose what's broken, streamline the user journey, and transform it into a conversion machine. Faster load times and clearer messaging."
    },
    {
        icon: LifeBuoy,
        title: "Ongoing Support & Maintenance",
        description: "Launch isn't the finish line. We monitor, update, and continuously optimize your site so it stays fast, secure, and ahead of the competition. Think of us as your web development team on retainer."
    }
];

export default function Services() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Web Solutions That Actually Drive Results
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://wa.me/971543491544" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-deepBlue-900 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-gold-500/25">
                        Book Your Free Strategy Call <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
