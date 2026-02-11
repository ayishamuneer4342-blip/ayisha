import React from 'react';
import { Award } from 'lucide-react';
import hubspotLogo from '../assets/logo-hubspot.png';
import googleAnalyticsLogo from '../assets/logo-google-analytics.png';
import googleAdsLogo from '../assets/logo-google-ads.png';
import googleGarageLogo from '../assets/logo-google-garage.png';
import semrushLogo from '../assets/logo-semrush.png';
import metaLogo from '../assets/logo-meta.png';

const Certifications = () => {
    return (
        <section className="py-20 bg-white border-b border-slate-50" id="certifications">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 relative inline-block">
                        My Certifications
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text */}
                    <div className="text-center flex flex-col justify-center h-full">
                        <p className="text-slate-600 leading-relaxed text-lg mb-8">
                            As a <a href="https://www.facebook.com/share/15JXeBfADY/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-gold-500 font-bold hover:text-deepBlue-900 transition-colors">Freelance Digital Marketing Strategist in Dubai</a>, I mastered leading tools and earned certifications from <a href="https://en-gb.facebook.com/business/learn/certification" target="_blank" rel="noopener noreferrer" className="text-gold-500 font-bold hover:text-deepBlue-900 transition-colors">Meta</a>, <a href="https://academy.hubspot.com/courses?page=1" target="_blank" rel="noopener noreferrer" className="text-gold-500 font-bold hover:text-deepBlue-900 transition-colors">Hubspot</a>, <a href="https://www.semrush.com/blog/seo-certification/" target="_blank" rel="noopener noreferrer" className="text-gold-500 font-bold hover:text-deepBlue-900 transition-colors">Semrush</a> and <a href="https://www.coursera.org/google-career-certificates" target="_blank" rel="noopener noreferrer" className="text-gold-500 font-bold hover:text-deepBlue-900 transition-colors">Google</a>. I assure you that I will surely implement these skills in my professional endeavour to ensure success for any business.
                        </p>
                    </div>

                    {/* Right Column: Logos (Text-based mockups) */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
                        {/* HubSpot */}
                        {/* HubSpot */}
                        <a href="https://academy.hubspot.com/courses?page=1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
                            <img src={hubspotLogo} alt="HubSpot" className="h-10 md:h-12 w-auto object-contain" />
                        </a>

                        {/* Google Analytics */}
                        <a href="https://marketingplatform.google.com/about/analytics/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
                            <img src={googleAnalyticsLogo} alt="Google Analytics" className="h-10 md:h-12 w-auto object-contain" />
                        </a>

                        {/* Google Ads */}
                        <a href="https://www.wordstream.com/blog/ws/2022/03/21/how-to-run-google-ads" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
                            <img src={googleAdsLogo} alt="Google Ads" className="h-10 md:h-12 w-auto object-contain" />
                        </a>

                        {/* Google Digital Garage */}
                        <a href="https://learndigital.withgoogle.com/digitalgarage" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
                            <img src={googleGarageLogo} alt="Google Digital Garage" className="h-12 md:h-14 w-auto object-contain" />
                        </a>

                        {/* Semrush */}
                        <a href="https://www.semrush.com/blog/seo-certification/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
                            <img src={semrushLogo} alt="Semrush" className="h-8 md:h-10 w-auto object-contain" />
                        </a>

                        {/* Meta */}
                        <a href="https://en-gb.facebook.com/business/learn/certification" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
                            <img src={metaLogo} alt="Meta" className="h-8 md:h-10 w-auto object-contain" />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
