import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Briefcase, Crown, ArrowRight } from 'lucide-react';

const WhoIWorkWith = () => {
    const clients = [
        {
            title: "Ambitious Startups",
            description: "You’re launching or scaling in a noisy market. You need your first 100 customers—or your next 1,000—to come faster and more predictably.",
            solution: "I help you build your brand from the ground up and create marketing systems that generate leads even while you’re building the product.",
            icon: Rocket,
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            title: "Established Businesses",
            description: "You’re strong offline but underperforming online. Word of mouth is good, but you know you’re leaving serious revenue untouched.",
            solution: "I help you modernize your digital presence so your marketing finally matches the quality and reputation you’ve built over years.",
            icon: Briefcase,
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            title: "Industry Leaders",
            description: "You’re in hyper-competitive markets where visibility equals survival. Every wrong move in digital costs you market share.",
            solution: "I help you cut through the noise with strategies and campaigns engineered to win attention and convert it into bookings, showings, and sales.",
            icon: Crown,
            color: "text-gold-500",
            bg: "bg-gold-50"
        }
    ];

    return (
        <section className="py-24 bg-white" id="who-i-work-with">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold-700 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Who gets the best results
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mb-6">
                        Is This You?
                    </h2>
                    <p className="text-lg text-slate-600">
                        I specialize in helping three types of businesses dominate their market.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="group p-8 rounded-2xl border border-slate-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300 bg-white"
                        >
                            <div className={`w-14 h-14 ${client.bg} ${client.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <client.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-deepBlue-900 mb-4">{client.title}</h3>

                            <div className="space-y-6">
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {client.description}
                                </p>

                                <div className="pt-6 border-t border-slate-100">
                                    <p className="text-deepBlue-900 font-medium text-sm leading-relaxed">
                                        <span className="text-gold-500 font-bold block mb-2">How I Help:</span>
                                        {client.solution}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://wa.me/971543491544"
                        className="inline-flex justify-center items-center px-8 py-4 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 gap-2"
                    >
                        Which One Sounds Like You? Let’s Talk <ArrowRight size={20} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default WhoIWorkWith;
