import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Monitor, Smartphone, Zap, Code, ArrowRight, Layout } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import SchemaJSONLD from '../../components/SchemaJSONLD';

const WebDesign = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const jsonLd = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Web Design & Development", "provider": { "@type": "Person", "name": "Ayisha Muneer" }, "areaServed": { "@type": "City", "name": "Dubai" }, "description": "Professional web design and development in Dubai. Build fast, responsive, and SEO-friendly websites that convert visitors into customers." };
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How long does it take to build a website?", "acceptedAnswer": { "@type": "Answer", "text": "A typical business website takes 4-6 weeks from kickoff to launch. Complex e-commerce or custom builds may take 8-12 weeks depending on requirements." } }, { "@type": "Question", "name": "Do you build on WordPress or custom code?", "acceptedAnswer": { "@type": "Answer", "text": "I build on both. For content-heavy sites, WordPress is great. For high-performance custom apps, I use React/Next.js. The choice depends on your needs and budget." } }, { "@type": "Question", "name": "Will my website be mobile-friendly?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Every website I build is mobile-first and fully responsive, ensuring a seamless experience on all devices—phones, tablets, and desktops." } }] };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO title="Web Design & Development Dubai | High-Converting Websites" description="Professional web design and development in Dubai. I build fast, responsive, and SEO-friendly websites that convert visitors into customers." keywords="Web Design Dubai, Web Development UAE, UX/UI Design, WordPress Developer" url="https://ayishamuneer.com/services/web-design" />
            <SchemaJSONLD data={[jsonLd, faqSchema]} />
            <Header theme="dark" />
            <main>
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepBlue-900 text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold-400 text-sm font-semibold mb-6">Web Design & Development</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            Your Best Salesperson <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Never Sleeps</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Is your website losing you money? I design and build high-performance websites that are fast, mobile-friendly, and optimized to convert visitors into leads.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://wa.me/971543491544" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg">Get Your Free Quote</a>
                            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">See My Process</a>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-900 mb-6">Why Your Website Isn't Converting</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">You're getting traffic, but visitors leave without taking action. Here's what's broken.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: <Zap size={32} className="text-red-500" />, title: "Slow Load Times", desc: "Your site takes 5+ seconds to load, so visitors bounce before seeing your offer." },
                                { icon: <Smartphone size={32} className="text-red-500" />, title: "Not Mobile-Friendly", desc: "60% of traffic is mobile, but your site looks broken on phones." },
                                { icon: <Layout size={32} className="text-red-500" />, title: "Poor UX", desc: "Confusing navigation and unclear CTAs leave visitors lost." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                                    <div className="mb-6 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-deepBlue-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-20">
                            <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">What I Do</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mt-3">My Web Design Services</h2>
                        </div>
                        <div className="space-y-24">
                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Layout size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Custom UX/UI Design</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I design beautiful, intuitive interfaces that guide visitors toward conversion. Every element is strategically placed to maximize engagement and sales.</p>
                                    <ul className="space-y-3">
                                        {['User Research & Personas', 'Wireframing & Prototyping', 'Brand-Aligned Design Systems', 'Conversion-Focused Layouts'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Web Design" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><Code size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">High-Performance Development</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I build lightning-fast websites using modern frameworks like React and Next.js. Your site will load in under 2 seconds and rank higher on Google.</p>
                                    <ul className="space-y-3">
                                        {['React/Next.js Development', 'WordPress Custom Themes', 'E-commerce (Shopify/WooCommerce)', 'API Integrations'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Web Development" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6"><Zap size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Speed & SEO Optimization</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">A slow website kills conversions. I optimize every aspect—images, code, hosting—to ensure your site loads instantly and ranks well on Google.</p>
                                    <ul className="space-y-3">
                                        {['Core Web Vitals Optimization', 'Image Compression & Lazy Loading', 'Technical SEO Setup', 'Mobile-First Responsive Design'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Website Speed" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="process" className="py-20 bg-deepBlue-900 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Web Design Process</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">From discovery to launch, here's how I build websites that convert.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Discovery", desc: "Understand your goals, audience, and competitors." },
                                { step: "02", title: "Design", desc: "Create wireframes and high-fidelity mockups." },
                                { step: "03", title: "Develop", desc: "Build a fast, responsive, and SEO-friendly site." },
                                { step: "04", title: "Launch", desc: "Test, optimize, and deploy your new website." }
                            ].map((item, idx) => (
                                <div key={idx} className="relative p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="text-6xl font-bold text-white/5 absolute top-2 right-4">{item.step}</div>
                                    <h3 className="text-xl font-bold text-gold-500 mb-3 relative z-10">{item.title}</h3>
                                    <p className="text-slate-300 relative z-10">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-deepBlue-900 mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faqSchema.mainEntity.map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                    <h3 className="font-bold text-lg text-deepBlue-900 mb-2">{item.name}</h3>
                                    <p className="text-slate-600">{item.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gradient-to-r from-gold-500 to-gold-600 text-deepBlue-900 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build a Website That Converts?</h2>
                        <p className="text-xl mb-10 font-medium max-w-2xl mx-auto">Stop losing customers to a broken website. Let's build something that drives real results.</p>
                        <a href="https://wa.me/971543491544" className="inline-flex items-center gap-2 px-8 py-4 bg-deepBlue-900 text-white font-bold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-xl">
                            Get Your Free Quote <ArrowRight size={20} />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default WebDesign;
