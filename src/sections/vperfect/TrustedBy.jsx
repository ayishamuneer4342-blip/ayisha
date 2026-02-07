import React from 'react';
import { motion } from 'framer-motion';

import logoBridgewater from '../../assets/logo-bridgewater.png';
import logoNeonights from '../../assets/logo-neonights.png';
import logoZapmart from '../../assets/logo-zapmart.webp';

const TrustedBy = () => {
    const clients = [
        { name: "Bridgewater", logo: logoBridgewater },
        { name: "Neonights", logo: logoNeonights },
        { name: "Zapmart", logo: logoZapmart },
    ];

    return (
        <section className="py-10 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <p className="text-sm md:text-base font-semibold text-slate-500 uppercase tracking-widest">
                        Trusted by 50+ businesses in <span className="text-blue-600">Real Estate, Hospitality & E-commerce</span>
                    </p>
                </div>

                {/* Logo Row - Marquee */}
                <div className="overflow-hidden w-full relative">
                    <motion.div
                        className="flex gap-16 items-center w-max"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate lists for seamless loop */}
                        {[...Array(6)].map((_, loopIndex) => (
                            <React.Fragment key={loopIndex}>
                                {clients.map((client, index) => (
                                    <div
                                        key={`${loopIndex}-${index}`}
                                        className="transition-all duration-300 hover:scale-105"
                                    >
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="h-10 md:h-12 w-auto object-contain"
                                        />
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
