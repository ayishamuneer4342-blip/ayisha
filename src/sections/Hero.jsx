import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react';
import logoBridgewater from '../assets/logo-bridgewater.webp';
import logoNeonights from '../assets/logo-neonights.webp';
import logoZapmart from '../assets/logo-zapmart.webp';
import logoAiva from '../assets/logo-aiva.svg';
import logoMws from '../assets/logo-mws.avif';
import logoClient1 from '../assets/logo-client1.webp';
import logoClient2 from '../assets/logo-client2.webp';
import logoClient3 from '../assets/logo-client3.webp';
import logoClient4 from '../assets/logo-client4.webp';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-[100dvh] flex items-center pt-24 pb-10 overflow-hidden bg-slate-50">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-400/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-deepBlue-900/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6 z-10">
                <div className="flex flex-col items-center justify-center">

                    {/* Main Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full max-w-5xl mx-auto px-1 sm:px-0 pt-24 text-center"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-deepBlue-900 mb-4 lg:mb-6 break-words"
                        >
                            Digital Marketing Strategist in Dubai, UAE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepBlue-800 to-gold-500">
                                Grow Your Business Online
                            </span>
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 mb-4"
                        >
                            SEO Consultant, Performance Marketing Specialist & Lead Generation Expert
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-sm sm:text-lg text-slate-600 mb-6 lg:mb-8 leading-relaxed">
                            As a Digital Marketing Strategist and SEO Consultant in Dubai, I specialize in performance marketing, Google Ads, Meta Ads, and lead generation strategies. I help businesses across the UAE transform their online presence into a revenue-generating machine through data-driven SEO, PPC campaigns, and marketing automation.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 lg:mb-10 justify-center">
                            <a
                                href="https://wa.me/971543491544"
                                className="inline-flex justify-center items-center px-6 py-3.5 sm:px-8 sm:py-4 bg-deepBlue-900 text-white font-semibold rounded-lg hover:bg-deepBlue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
                            >
                                Book Your Free Consultation
                            </a>
                            <a
                                href="#services"
                                className="inline-flex justify-center items-center px-6 py-3.5 sm:px-8 sm:py-4 bg-transparent border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-gold-500 hover:text-deepBlue-900 transition-all text-sm sm:text-base"
                            >
                                View My Services
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="hidden sm:flex flex-col items-center pt-6 sm:pt-8 border-t border-slate-200">
                            <p className="text-xs sm:text-sm font-medium text-black mb-3 flex items-center justify-center gap-2">
                                <CheckCircle size={14} className="text-gold-500" />
                                Trusted by 50+ businesses in Real Estate, Hospitality & E-commerce
                            </p>
                            <div className="overflow-hidden w-full max-w-4xl mx-auto relative">
                                <motion.div
                                    className="flex gap-16 items-center w-max"
                                    animate={{ x: [0, -1000] }} // Moving left to simulate continuous scroll (standard marquee) 
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 20,
                                            ease: "linear",
                                        },
                                    }}
                                >
                                    {[...Array(2)].map((_, i) => (
                                        <React.Fragment key={i}>
                                            <img src={logoBridgewater} alt="Bridgewater" className="h-10 md:h-16 w-auto object-contain transition-all duration-300" />
                                            <img src={logoNeonights} alt="Neonights" className="h-10 md:h-16 w-auto object-contain transition-all duration-300" />
                                            <img src={logoZapmart} alt="Zapmart" className="h-10 md:h-16 w-auto object-contain transition-all duration-300" />
                                            <img src={logoAiva} alt="AIVA" className="h-10 md:h-16 w-auto object-contain transition-all duration-300" />
                                            <img src={logoClient1} alt="Client Partner" className="h-10 md:h-16 w-auto object-contain transition-all duration-300" />
                                            <img src={logoClient2} alt="Client Partner" className="h-10 md:h-16 w-auto object-contain transition-all duration-300" />
                                            <img src={logoClient4} alt="Client Partner" className="h-10 md:h-16 w-auto object-contain transition-all duration-300" />
                                        </React.Fragment>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
