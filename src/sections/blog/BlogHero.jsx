import React from 'react';
import { Search } from 'lucide-react';
import dubaiSkyline from '../../assets/dubai-sunset-hero.png';

const BlogHero = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={dubaiSkyline}
                    alt="Dubai Skyline"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepBlue-900/90 via-deepBlue-900/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Unlock Digital <br />
                    <span className="text-gold-400">Growth in Dubai</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light max-w-2xl mx-auto">
                    Insights, strategies & case studies to elevate your brand.
                </p>

                {/* Search Box */}
                <div className="bg-white p-2 rounded-lg shadow-2xl max-w-xl mx-auto flex items-center">
                    <div className="flex-grow flex items-center px-4">
                        <Search className="text-slate-400 w-5 h-5 mr-3" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full py-3 outline-none text-slate-700 bg-transparent placeholder-slate-400"
                        />
                    </div>
                    <button className="bg-gold-500 hover:bg-gold-600 text-deepBlue-900 font-bold py-3 px-8 rounded-md transition-colors duration-300">
                        Subscribe for
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
