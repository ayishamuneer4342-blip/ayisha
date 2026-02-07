import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import logoBridgewater from '../assets/logo-bridgewater.png';
import logoNeonights from '../assets/logo-neonights.png';
import logoZapmart from '../assets/logo-zapmart.webp';



const MajorClients = () => {
    // Duplicating logos to simulate more clients for the carousel effect if needed
    // or just showing what we have. 
    // The reference showed 5 logos. We have 4.
    const clients = [
        { name: "Bridgewater", logo: logoBridgewater },
        { name: "Neonights", logo: logoNeonights },
        { name: "Zapmart", logo: logoZapmart },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-900">
                        Our Major Clients
                    </h2>
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
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate lists for seamless loop */}
                        {[...Array(4)].map((_, loopIndex) => (
                            <React.Fragment key={loopIndex}>
                                {clients.map((client, index) => (
                                    <div
                                        key={`${loopIndex}-${index}`}
                                        className="transition-all duration-300 hover:scale-105"
                                    >
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="h-16 md:h-20 w-auto object-contain transition-all duration-300 hover:scale-105"
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

export default MajorClients;
