import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

// Import assets
import imgJewelry from '../assets/portfolio_jewelry_mockup.png';
import imgFood from '../assets/portfolio_food_mockup.png';
import imgCorporate from '../assets/portfolio_corporate_mockup.png';
import imgDental from '../assets/portfolio_dental_mockup.png';
import imgBWMC from '../assets/portfolio_bwmc_real.png';
import imgPayyoli from '../assets/portfolio_payyoli_real.png';
import imgLampsPlus from '../assets/portfolio_lampsplus_real.png';
import imgJaypeedent from '../assets/portfolio_jaypeedent_real.png';
import imgSynops from '../assets/portfolio_synopslabs_real.png';
import imgRizq from '../assets/portfolio_rizq_real.png';

const WebsitePortfolio = () => {
    const scrollContainerRef = useRef(null);
    const [isPaused, setIsPaused] = React.useState(false);

    const projects = [
        {
            title: "BWMC",
            category: "Business Setup & Corporate",
            url: "https://bwmc.ae",
            image: imgBWMC
        },
        {
            title: "Synops Labs",
            category: "AI & Automation",
            url: "https://synopslabs.com/",
            image: imgSynops
        },
        {
            title: "Payyoli Mixture",
            category: "Food & Beverage",
            url: "https://www.payyolimixture.co.in/",
            image: imgPayyoli
        },
        {
            title: "Aurora Souq",
            category: "E-commerce Jewelry",
            url: "https://www.aurorasouq.com/",
            image: imgJewelry
        },
        {
            title: "Jaypeedent",
            category: "Medical & Dental",
            url: "https://jaypeedent.com/",
            image: imgJaypeedent
        },
        {
            title: "Al Rizq Trading",
            category: "Trading & Distribution",
            url: "https://www.alrizq.sa/",
            image: imgRizq
        },
        {
            title: "Lamps Plus",
            category: "LED Solutions",
            url: "http://34.133.208.55/",
            image: imgLampsPlus
        },
        {
            title: "Alduz Trading",
            category: "General Trading & Wholesale",
            url: "https://www.alduztrading.com/",
            image: imgCorporate
        }
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 400;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                // Reset to start if we've reached the end to create infinite scroll effect (simple version)
                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }
    };

    // Auto-scroll effect
    React.useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                scroll('right');
            }, 3000); // Scroll every 3 seconds
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="py-20 bg-slate-50 relative border-b border-slate-200" id="portfolio">
            <div className="container mx-auto px-6 relative">

                <div className="mb-12 text-center">
                    <span className="text-gold-500 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        My Development Work
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900">
                        Recent Work
                    </h2>
                </div>

                <div
                    className="relative group/carousel"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Arrows - Absolute Positioned */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute top-1/2 -left-3 md:-left-6 z-10 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-deepBlue-900 hover:bg-gold-500 hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Scroll left"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute top-1/2 -right-3 md:-right-6 z-10 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-deepBlue-900 hover:bg-gold-500 hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Scroll right"
                    >
                        <ArrowRight size={20} />
                    </button>

                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((project, index) => {
                            // Determine background color based on project
                            const isDarkBg = project.title === "Lamps Plus" || project.title === "Synops Labs";
                            const isScreenshot = ["BWMC", "Lamps Plus", "Jaypeedent", "Synops Labs", "Al Rizq Trading"].includes(project.title);

                            return (
                                <div
                                    key={index}
                                    className="min-w-[320px] md:min-w-[400px] group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex-shrink-0"
                                >
                                    {/* Image Container */}
                                    <div className={`relative h-64 overflow-hidden ${isDarkBg ? "bg-black" : "bg-white"} border-b border-slate-100`}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={`w-full h-full object-top transition-transform duration-500 ${isScreenshot
                                                ? "object-contain p-2 group-hover:scale-105"
                                                : "object-cover group-hover:scale-105"
                                                }`}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-deepBlue-900/0 group-hover:bg-deepBlue-900/40 transition-colors duration-300 flex items-center justify-center">
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-deepBlue-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg"
                                            >
                                                Visit Website <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-deepBlue-900 mb-2 group-hover:text-gold-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm font-medium">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WebsitePortfolio;
