import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, TrendingUp, CheckCircle, Briefcase } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Certifications from '../sections/Certifications';
import Testimonials from '../sections/Testimonials';
import ConnectMe from '../sections/ConnectMe';
import SEO from '../components/SEO';
import SchemaJSONLD from '../components/SchemaJSONLD';
import pic1 from '../assets/pic1.jpg';

const About = () => {
    const stats = [
        { icon: Users, value: '50+', label: 'Happy Clients' },
        { icon: TrendingUp, value: '200%', label: 'Avg. ROI Increase' },
        { icon: Award, value: '8+', label: 'Years Experience' },
        { icon: Briefcase, value: '100+', label: 'Projects Completed' }
    ];

    const expertise = [
        'SEO & Content Strategy',
        'Paid Advertising (Google Ads, Meta Ads)',
        'Social Media Marketing',
        'Email Marketing & Automation',
        'Marketing Strategy & Consulting',
        'Web Design & Development',
        'Lead Generation & Conversion Optimization',
        'AI Integration & Marketing Automation'
    ];

    const journey = [
        {
            year: '2016',
            title: 'Started Digital Marketing Journey',
            description: 'Began career in digital marketing, focusing on SEO and content strategy for local businesses in Dubai.'
        },
        {
            year: '2018',
            title: 'Expanded to Full-Service Marketing',
            description: 'Grew expertise to include paid advertising, social media, and comprehensive marketing strategies.'
        },
        {
            year: '2020',
            title: 'Launched Freelance Practice',
            description: 'Established independent consultancy, helping businesses across UAE scale their digital presence.'
        },
        {
            year: '2024',
            title: 'Award-Winning Strategist',
            description: 'Recognized as a leading Digital Marketing Strategist in Dubai, serving 50+ clients with proven results.'
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ayisha Muneer",
        "url": "https://ayishamuneer.com/about",
        "image": "https://ayishamuneer.com/ayisha-muneer.jpg",
        "jobTitle": "Digital Marketing Strategist",
        "description": "Award-winning Digital Marketing Strategist in Dubai with 8+ years of experience helping businesses scale through SEO, paid advertising, and comprehensive marketing strategies.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": "UAE"
        },
        "alumniOf": "Digital Marketing Certification Programs",
        "knowsAbout": [
            "Digital Marketing Strategy",
            "SEO",
            "Paid Advertising",
            "Content Marketing",
            "Marketing Automation",
            "Social Media Marketing",
            "Email Marketing",
            "Web Design"
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="About Ayisha Muneer | Digital Marketing Strategist in Dubai"
                description="Learn about Ayisha Muneer, an award-winning Digital Marketing Strategist in Dubai with 8+ years of experience. Certified expert in SEO, paid ads, and marketing automation."
                keywords="About Ayisha Muneer, Digital Marketing Strategist Dubai, Marketing Expert UAE, SEO Specialist"
                canonical="https://ayishamuneer.com/about"
            />
            <SchemaJSONLD data={jsonLd} />
            <Header theme="light" />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-400/10 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-deepBlue-900/5 blur-3xl rounded-full" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deepBlue-900 mb-6">
                                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepBlue-800 to-gold-500">Ayisha Muneer</span>
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
                                    Digital Marketing Strategist in Dubai
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    I help businesses across the UAE transform their digital presence into revenue-generating machines. With over 8 years of experience and 50+ successful client partnerships, I specialize in creating data-driven marketing strategies that deliver measurable results.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    My approach combines technical SEO expertise, creative content strategy, and performance marketing to help businesses scale sustainably. Whether you're a startup looking to establish your brand or an established company aiming to dominate your market, I bring the strategic insight and hands-on execution you need.
                                </p>
                            </motion.div>

                            {/* Right Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={pic1}
                                        alt="Ayisha Muneer - Digital Marketing Strategist in Dubai"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deepBlue-900/40 to-transparent" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-100">
                                    <stat.icon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-deepBlue-900 mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-600">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Expertise Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepBlue-900 mb-4">
                                My Expertise
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Comprehensive digital marketing services tailored to your business goals
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {expertise.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition-shadow"
                                >
                                    <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Journey Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deepBlue-900 mb-4">
                                My Journey
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                From passionate beginner to award-winning strategist
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            {journey.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative pl-8 pb-12 border-l-2 border-gold-500 last:pb-0"
                                >
                                    <div className="absolute left-0 top-0 w-4 h-4 bg-gold-500 rounded-full -translate-x-[9px]" />
                                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                                        <div className="text-gold-600 font-bold text-sm mb-2">{milestone.year}</div>
                                        <h3 className="text-xl font-bold text-deepBlue-900 mb-2">{milestone.title}</h3>
                                        <p className="text-slate-600">{milestone.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <Certifications />

                {/* Testimonials */}
                <Testimonials />

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-deepBlue-900 to-deepBlue-800 text-white">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Ready to Grow Your Business?
                            </h2>
                            <p className="text-xl mb-10 text-slate-200 max-w-2xl mx-auto">
                                Let's discuss how I can help you achieve your marketing goals and scale your business in Dubai and across the UAE.
                            </p>
                            <a
                                href="https://wa.me/971543491544"
                                className="inline-flex items-center px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                Book Your Free Consultation
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Connect Section */}
                <ConnectMe />
            </main>

            <Footer />
        </div>
    );
};

export default About;
