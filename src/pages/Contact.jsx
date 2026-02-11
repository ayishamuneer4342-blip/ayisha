import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaJSONLD from '../components/SchemaJSONLD';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link with form data
        const subject = `Contact Form Submission from ${formData.name}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Message:
${formData.message}
        `;

        const mailtoLink = `mailto:ayishamuneer4342@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone',
            details: '+971 54 349 1544',
            link: 'tel:+971543491544'
        },
        {
            icon: Mail,
            title: 'Email',
            details: 'ayishamuneer4342@gmail.com',
            link: 'mailto:ayishamuneer4342@gmail.com'
        },
        {
            icon: MapPin,
            title: 'Location',
            details: 'Dubai, UAE',
            link: null
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Ayisha Muneer - Digital Marketing Strategist Dubai",
        "description": "Get in touch with Ayisha Muneer for digital marketing services in Dubai, UAE.",
        "url": "https://ayishamuneer.com/contact"
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="Contact Us | Ayisha Muneer | Digital Marketing Strategist Dubai"
                description="Get in touch with Ayisha Muneer for expert digital marketing services in Dubai. Book your free consultation today."
                keywords="Contact Digital Marketing Strategist Dubai, Marketing Consultation UAE, Get in Touch"
                canonical="https://ayishamuneer.com/contact"
            />
            <SchemaJSONLD data={jsonLd} />
            <Header theme="light" />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-deepBlue-900 to-deepBlue-800 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-400/10 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-400/10 blur-3xl rounded-full" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Let's Grow Your Business <span className="text-gold-400">Together</span>
                            </h1>
                            <p className="text-xl text-slate-200 mb-8">
                                Ready to transform your digital marketing? Get in touch for a free consultation and discover how we can help you achieve your goals.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
                            >
                                <h2 className="text-3xl font-bold text-deepBlue-900 mb-6">Send a Message</h2>

                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                                    >
                                        <CheckCircle className="text-green-600" size={24} />
                                        <p className="text-green-800 font-medium">Your email client will open shortly!</p>
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                                            placeholder="+971 XX XXX XXXX"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Tell us about your project or marketing needs..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-deepBlue-900 text-white font-bold py-4 px-6 rounded-lg hover:bg-deepBlue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        <Send size={20} />
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="text-3xl font-bold text-deepBlue-900 mb-6">Get in Touch</h2>
                                    <p className="text-lg text-slate-600 mb-8">
                                        Have a question or ready to start your digital marketing journey? Reach out through any of the channels below, and I'll get back to you within 24 hours.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="bg-gold-100 p-3 rounded-lg">
                                                    <item.icon className="text-gold-600" size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-deepBlue-900 mb-1">{item.title}</h3>
                                                    {item.link ? (
                                                        <a
                                                            href={item.link}
                                                            className="text-slate-600 hover:text-gold-600 transition-colors"
                                                        >
                                                            {item.details}
                                                        </a>
                                                    ) : (
                                                        <p className="text-slate-600">{item.details}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Quick Contact CTA */}
                                <div className="bg-gradient-to-r from-deepBlue-900 to-deepBlue-800 rounded-xl p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Prefer to Chat?</h3>
                                    <p className="text-slate-200 mb-6">
                                        Get instant answers to your questions via WhatsApp
                                    </p>
                                    <a
                                        href="https://wa.me/971543491544"
                                        className="inline-flex items-center px-6 py-3 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
