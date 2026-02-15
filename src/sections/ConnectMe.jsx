import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const ConnectMe = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        industry: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await import('../utils/emailService').then(({ sendEmail }) =>
                sendEmail({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: `Website Enquiry: ${formData.service} (${formData.industry})`,
                    additionalData: {
                        Service: formData.service,
                        Industry: formData.industry
                    }
                })
            );

            setSubmitStatus('success');
            setTimeout(() => {
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    service: '',
                    industry: '',
                    message: ''
                });
                setSubmitStatus(null);
            }, 3000);
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden" id="connect">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-stretch">

                    {/* Left Column: Content & Contact Info */}
                    <div className="flex flex-col h-full">
                        <span className="text-gold-500 font-bold tracking-wider text-sm uppercase mb-4 block">
                            I'D LOVE TO HEAR FROM YOU
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-deepBlue-900 mb-6 relative inline-block">
                            Connect Me
                        </h2>

                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                            Ready to elevate your digital presence and grow your business? As a{' '}
                            <a
                                href="https://maps.app.goo.gl/rCaAFpbu4Fdg8bww5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-gold-500 hover:text-deepBlue-900 transition-colors underline decoration-gold-200 hover:decoration-deepBlue-900"
                            >
                                Digital Marketing Strategist in Dubai
                            </a>
                            , I'm here to craft strategies tailored to your goals. Let's connect today and start building a successful online presence for your brand.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-deepBlue-50 flex items-center justify-center text-deepBlue-900 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-deepBlue-900 text-sm mb-1">REACH ME THROUGH</h3>
                                    <p className="text-slate-600">
                                        147, Emarat Atrium, 1st Floor, Sheikh Zayed Road, Dubai
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-deepBlue-50 flex items-center justify-center text-deepBlue-900 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <p className="text-slate-600 font-medium">+971 54 349 1544</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-deepBlue-50 flex items-center justify-center text-deepBlue-900 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <a href="mailto:ayishamuneer4342@gmail.com" className="text-slate-600 font-medium hover:text-gold-500 transition-colors">
                                    ayishamuneer4342@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-deepBlue-50 flex items-center justify-center text-deepBlue-900 shrink-0">
                                    <Linkedin size={20} />
                                </div>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/ayishamuneer/" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-medium hover:text-gold-500 transition-colors">
                                        LinkedIn
                                    </a>
                                    <span className="text-slate-300">|</span>
                                    <a href="https://www.instagram.com/brandingbysha?igsh=MnVsM29ubWM5eTVv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-medium hover:text-gold-500 transition-colors">
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map Preview */}
                        <div className="w-full flex-grow min-h-[250px] rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white relative group">
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                src="https://maps.google.com/maps?q=Ayisha+Muneer+Digital+Marketing+Strategist+in+Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                title="Location Map"
                            ></iframe>
                            <a
                                href="https://www.google.com/maps/place/Ayisha+Muneer+%7C+Digital+Marketing+Strategist+in+Dubai,+UAE/@25.2787381,55.3319615,16z/data=!4m6!3m5!1s0x3e5f5d53ac97ec53:0x278a806cc163c735!8m2!3d25.0708432!4d55.1388375!16s%2Fg%2F11y9dp0dqz?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-20"
                                aria-label="View on Google Maps"
                            ></a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative flex flex-col h-full">
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 relative z-10 flex-grow flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-deepBlue-900 mb-2">Drop me a Hey</h3>
                            <div className="w-12 h-1 bg-gold-500 rounded-full mb-6"></div>

                            {submitStatus === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-deepBlue-900 mb-4">Message Sent!</h3>
                                    <p className="text-slate-600 text-lg">Thank you for your enquiry. I will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                            className="w-full px-5 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            required
                                            className="w-full px-5 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                            className="w-full px-5 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="relative">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled hidden>Select Service</option>
                                                <option value="web-development">Web Development</option>
                                                <option value="seo">SEO</option>
                                                <option value="performance-marketing">Performance Marketing</option>
                                                <option value="content-creation">Content Creation</option>
                                                <option value="social-media">Social Media Marketing</option>
                                                <option value="other">Other Services</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <select
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled hidden>Select Industry</option>
                                                <option value="ecommerce">E-commerce</option>
                                                <option value="real-estate">Real Estate</option>
                                                <option value="healthcare">Healthcare</option>
                                                <option value="education">Education</option>
                                                <option value="technology">Technology/SaaS</option>
                                                <option value="finance">Finance</option>
                                                <option value="retail">Retail</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="Your Message"
                                            className="w-full px-5 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-4 bg-deepBlue-900 hover:bg-deepBlue-800 text-white font-bold rounded-lg transition-colors shadow-lg shadow-deepBlue-900/10 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Decorative Elements around form */}
                        <div className="absolute top-10 -right-10 w-24 h-24 bg-gold-100 rounded-full blur-2xl -z-0"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-deepBlue-100 rounded-full blur-3xl -z-0"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ConnectMe;
