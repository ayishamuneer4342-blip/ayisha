import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const FloatingContactButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link
        const subject = `Contact Form: ${formData.name}`;
        const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}
        `;

        window.location.href = `mailto:ayishamuneer4342@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Reset form
        setFormData({ name: '', phone: '', email: '', message: '' });
        setIsOpen(false);
    };

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
            {/* Floating Button */}
            <motion.button
                onMouseEnter={() => setIsOpen(true)}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-deepBlue-900 text-white px-4 py-6 rounded-r-xl shadow-2xl hover:bg-deepBlue-800 transition-all flex items-center gap-2 group"
                whileHover={{ x: 5 }}
            >
                <div className="flex flex-col items-center gap-1">
                    <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold writing-mode-vertical rotate-180 whitespace-nowrap">
                        Contact Me
                    </span>
                </div>
            </motion.button>

            {/* Contact Form Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        onMouseLeave={() => setIsOpen(false)}
                        className="absolute left-0 top-0 ml-20 w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-deepBlue-900 to-deepBlue-800 text-white p-6 relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <h3 className="text-2xl font-bold mb-1">Contact Form</h3>
                            <p className="text-sm text-slate-200">Let's discuss your project</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-deepBlue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone*"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-deepBlue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-deepBlue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-deepBlue-500 focus:border-transparent outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Submit
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .writing-mode-vertical {
                    writing-mode: vertical-rl;
                }
            `}</style>
        </div>
    );
};

export default FloatingContactButton;
