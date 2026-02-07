import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = ({ theme = 'dark' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        {
            name: 'Services',
            href: '/#services',
            dropdown: [
                { name: 'SEO Services', href: '/services/seo' },
                { name: 'Social Media Marketing', href: '/services/social-media' },
                { name: 'Paid Advertising', href: '/services/paid-ads' },
                { name: 'Content Marketing', href: '/services/content-marketing' },
                { name: 'Email Marketing', href: '/services/email-marketing' },
                { name: 'Web Design', href: '/services/web-design' },
                { name: 'Marketing Strategy', href: '/services/marketing-strategy' },
                { name: 'Marketing Automation', href: '/services/marketing-automation' },
                { name: 'Lead Generation', href: '/services/lead-generation' },
                { name: 'AI Integration', href: '/services/ai-integration' },
                { name: 'All Services', href: '/#services' }
            ]
        },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    const WhatsAppIcon = () => (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-[#25D366]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );

    const getTextColorClass = () => {
        if (isScrolled) return 'text-slate-600 hover:text-gold-500';
        return theme === 'dark' ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-gold-600';
    };

    const getLogoClass = () => {
        if (isScrolled) return '';
        return theme === 'dark' ? 'brightness-0 invert' : '';
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8 md:py-10'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link to="/" className="block w-16 md:w-24">
                    <img
                        src={logo}
                        alt="Ayisha Muneer"
                        className={`w-full h-auto transition-all duration-300 ${getLogoClass()}`}
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.dropdown ? (
                                <div
                                    className="relative"
                                    onMouseEnter={() => setServicesDropdownOpen(true)}
                                    onMouseLeave={() => setServicesDropdownOpen(false)}
                                >
                                    <button
                                        className={`text-sm font-medium transition-colors flex items-center gap-1 ${getTextColorClass()}`}
                                    >
                                        {link.name} <ChevronDown size={14} />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className={`absolute top-full left-0 w-48 pt-2 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                        <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-1">
                                            {link.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.href}
                                                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-gold-600"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={link.href.startsWith('/') ? link.href : undefined}
                                    href={!link.href.startsWith('/') ? link.href : undefined}
                                    className={`text-sm font-medium transition-colors flex items-center gap-2 ${getTextColorClass()}`}
                                >
                                    {link.name === 'Contact' ? (
                                        <>
                                            <WhatsAppIcon />
                                            <span>WhatsApp</span>
                                        </>
                                    ) : (
                                        link.name
                                    )}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        to="/contact"
                        className="px-5 py-2.5 bg-deepBlue-900 text-white text-sm font-semibold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-md hover:shadow-lg"
                    >
                        Contact Me
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${isScrolled || theme === 'light' ? 'text-slate-900' : 'text-white'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.dropdown ? (
                                        <div className="space-y-2">
                                            <span className="text-base font-bold text-slate-900 block">{link.name}</span>
                                            <div className="pl-4 border-l-2 border-slate-100 space-y-2">
                                                {link.dropdown.map(subItem => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.href}
                                                        className="block text-sm font-medium text-slate-600 hover:text-gold-500"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.href.startsWith('/') ? link.href : undefined}
                                            href={!link.href.startsWith('/') ? link.href : undefined}
                                            className="text-base font-medium text-slate-700 hover:text-gold-500 block"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <a
                                href="https://wa.me/971543491544"
                                className="inline-block text-center px-5 py-3 bg-gold-500 text-deepBlue-900 font-semibold rounded-lg hover:bg-gold-400 w-full mt-4"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book Free Consultation
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
