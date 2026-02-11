import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';

// Certification Logos
import hubspotLogo from '../assets/logo-hubspot.png';
import googleAnalyticsLogo from '../assets/logo-google-analytics.png';
import googleAdsLogo from '../assets/logo-google-ads.png';
import googleGarageLogo from '../assets/logo-google-garage.png';
import semrushLogo from '../assets/logo-semrush.png';
import metaLogo from '../assets/logo-meta.png';

const Achievements = () => {
    return (
        <section className="bg-deepBlue-900 text-white py-20 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Top Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-start opacity-70 mb-16">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-0.5 w-12 bg-gold-500"></div>
                            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">The Success Stories</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                            MY PROUDEST<br />ACHIEVEMENTS
                        </h2>
                        <a
                            href="https://www.linkedin.com/in/ayishamuneer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#0077B5] border border-[#0077B5] hover:bg-[#006097] hover:border-[#006097] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            CONNECT WITH ME ON LINKEDIN
                            <Linkedin size={20} />
                        </a>

                        {/* Certifications Block */}
                        <div className="mt-12">
                            <p className="text-gold-500 font-medium tracking-wider uppercase text-sm mb-6">Certified By</p>
                            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-lg max-w-xl">
                                <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
                                    <img src={googleGarageLogo} alt="Google Digital Garage" className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                                    <img src={hubspotLogo} alt="HubSpot" className="h-8 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                                    <img src={semrushLogo} alt="Semrush" className="h-8 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                                    <img src={googleAnalyticsLogo} alt="Google Analytics" className="h-8 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                                    <img src={googleAdsLogo} alt="Google Ads" className="h-8 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                                    <img src={metaLogo} alt="Meta" className="h-6 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center h-full">
                        <div className="border-l-2 border-white/10 pl-8 lg:pl-12 py-4">
                            <div className="space-y-4 text-base lg:text-lg text-slate-300 leading-relaxed text-left">
                                <p>
                                    Hey, I’m <strong>AYISHA MUNEER</strong>, a <a href="https://www.linkedin.com/in/ayishamuneer/" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors underline decoration-gold-500/50">Freelance Digital Marketing Strategist in Dubai</a> with deep insight into human behaviour and the creation of impactful results. I hold a Bachelor’s degree in <a href="https://www.britannica.com/science/psychology" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-gold-500 underline decoration-slate-500/50 transition-colors">Psychology</a>, and acquiring certification for marketing provided the platform to have hands-on knowledge that blends to create uniqueness in the digital landscape.
                                </p>
                                <p>
                                    As a <a href="https://www.instagram.com/brandingbysha?igsh=MnVsM29ubWM5eTVv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors underline decoration-gold-500/50">Freelance Digital Marketing Strategist in Dubai</a>, I deliver tailored solutions across key areas such as <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-gold-500 underline decoration-slate-500/50 transition-colors">SEO</a>, <a href="https://www.wordstream.com/search-engine-marketing" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-gold-500 underline decoration-slate-500/50 transition-colors">SEM</a>, <a href="https://www.wordstream.com/pay-per-click-advertising" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-gold-500 underline decoration-slate-500/50 transition-colors">PPC</a>, SMM, <a href="https://www.semrush.com/blog/content-creation/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-gold-500 underline decoration-slate-500/50 transition-colors">Content creation</a>, and <a href="https://www.w3schools.com/whatis/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-gold-500 underline decoration-slate-500/50 transition-colors">Web development</a>. Leveraging expertise in local SEO specific to your industry, I ensure your brand reaches its targeted audience, driving measurable growth and success.
                                </p>
                                <p>
                                    I believe that effective digital marketing is less about mastering algorithms and more about understanding people. By blending insights from psychology with cutting-edge digital tools, I empower businesses to unlock their full potential in today’s dynamic digital landscape. Let’s transform your online presence and achieve remarkable results together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wrapper for white background area if desired, or just stats on blue. 
                   The reference image has a white card for stats. Let's replicate that premium look 
                   but maybe keep it consistent with dark theme or use a white section.
                   User said "keep the color aligned with our website". 
                   The reference image uses RED bg and WHITE stats card.
                   I will use Deep Blue BG and White Stats card to match the reference structure but with my colors. 
                */}

                <div className="bg-white text-deepBlue-900 p-8 md:p-12 shadow-2xl rounded-2xl border border-slate-100 relative z-20 -mt-10 lg:mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {/* Stat 1 */}
                        <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 font-display text-deepBlue-900 group-hover:text-gold-500 transition-colors">
                                8+
                            </div>
                            <div className="text-sm font-bold tracking-wider text-slate-500 uppercase group-hover:text-slate-700">
                                Years of Experience
                            </div>
                            <div className="text-xs text-slate-400 mt-1 uppercase">
                                In Digital Marketing
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 font-display text-deepBlue-900 group-hover:text-gold-500 transition-colors">
                                100k+
                            </div>
                            <div className="text-sm font-bold tracking-wider text-slate-500 uppercase group-hover:text-slate-700">
                                Ad Budget Managed
                            </div>
                            <div className="text-xs text-slate-400 mt-1 uppercase">
                                Across Platforms
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 font-display text-deepBlue-900 group-hover:text-gold-500 transition-colors">
                                50+
                            </div>
                            <div className="text-sm font-bold tracking-wider text-slate-500 uppercase group-hover:text-slate-700">
                                Satisfied Clients
                            </div>
                            <div className="text-xs text-slate-400 mt-1 uppercase">
                                Globally
                            </div>
                        </div>

                        {/* Stat 4 */}
                        <div className="text-center px-4 py-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl lg:text-5xl font-bold mb-2 font-display text-deepBlue-900 group-hover:text-gold-500 transition-colors">
                                1M+
                            </div>
                            <div className="text-sm font-bold tracking-wider text-slate-500 uppercase group-hover:text-slate-700">
                                Revenue Generated
                            </div>
                            <div className="text-xs text-slate-400 mt-1 uppercase">
                                For My Clients
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Achievements;
