import React from 'react';
import { Linkedin, Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <a href="#" className="block w-24 mb-6">
                            <img src={logo} alt="Ayisha Muneer" className="w-full h-auto" />
                        </a>
                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                            Freelance Digital Marketing Expert based in Dubai, UAE. Helping businesses turn strategy into revenue.
                        </p>

                        <div className="flex gap-4 mt-6">
                            <a href="https://www.linkedin.com/in/ayishamuneer/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold-500 transition-colors" aria-label="LinkedIn Profile">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.instagram.com/brandingbysha?igsh=MnVsM29ubWM5eTVv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold-500 transition-colors" aria-label="Instagram Profile">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold text-deepBlue-900 mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><a href="/#services" className="hover:text-gold-500 transition-colors">Services</a></li>
                            <li><a href="/#portfolio" className="hover:text-gold-500 transition-colors">Case Studies</a></li>
                            <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Me</Link></li>
                            <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold text-deepBlue-900 mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><Link to="/services/social-media" className="hover:text-gold-500 transition-colors">Social Media Marketing</Link></li>
                            <li><Link to="/services/paid-ads" className="hover:text-gold-500 transition-colors">Paid Advertising</Link></li>
                            <li><Link to="/services/content-marketing" className="hover:text-gold-500 transition-colors">Content Marketing</Link></li>
                            <li><Link to="/services/email-marketing" className="hover:text-gold-500 transition-colors">Email Marketing</Link></li>
                            <li><Link to="/services/web-design" className="hover:text-gold-500 transition-colors">Web Design</Link></li>
                            <li><Link to="/services/marketing-strategy" className="hover:text-gold-500 transition-colors">Marketing Strategy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold text-deepBlue-900 mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-gold-500 shrink-0 mt-1" />
                                <a href="mailto:ayishamuneer4342@gmail.com" className="hover:text-deepBlue-900 transition-colors">ayishamuneer4342@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-gold-500 shrink-0 mt-1" />
                                <span>+971 54 349 1544</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-gold-500 shrink-0 mt-1" />
                                <span>147, Emarat Atrium, 1st Floor, Sheikh Zayed Road, Dubai</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2025 Ayisha Muneer. All Rights Reserved.
                    </p>
                    <p className="text-slate-500 text-xs text-center md:text-right max-w-xs">
                        Designed to convert. Built for growth.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
