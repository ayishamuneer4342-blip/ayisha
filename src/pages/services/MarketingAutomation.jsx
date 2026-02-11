import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Bot, Workflow, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import SchemaJSONLD from '../../components/SchemaJSONLD';

const MarketingAutomation = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const jsonLd = { "@context": "https://schema.org", "@type": "Service", "serviceType": "WhatsApp & Marketing Automation", "provider": { "@type": "Person", "name": "Ayisha Muneer" }, "areaServed": { "@type": "City", "name": "Dubai" }, "description": "Expert marketing automation in Dubai. Build WhatsApp chatbots and automated workflows that nurture leads and drive sales 24/7." };
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What can I automate in my marketing?", "acceptedAnswer": { "@type": "Answer", "text": "Almost everything: email sequences, WhatsApp responses, lead scoring, social media posting, CRM updates, and more. Automation frees your time to focus on strategy and growth." } }, { "@type": "Question", "name": "Will automation feel impersonal to my customers?", "acceptedAnswer": { "@type": "Answer", "text": "Not if done right. I build automation that feels personal through segmentation, dynamic content, and strategic human touchpoints where they matter most." } }, { "@type": "Question", "name": "How long does it take to set up automation?", "acceptedAnswer": { "@type": "Answer", "text": "Basic flows (welcome series, abandoned cart) take 1-2 weeks. Complex multi-channel automation with CRM integration can take 4-6 weeks depending on your tech stack." } }] };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO title="Marketing Automation & WhatsApp Chatbots Dubai | Ayisha Muneer" description="Expert marketing automation in Dubai. Build WhatsApp chatbots and automated workflows that nurture leads and drive sales 24/7." keywords="Marketing Automation Dubai, WhatsApp Chatbot, CRM Automation, Workflow Automation" url="https://ayishamuneer.com/services/marketing-automation" />
            <SchemaJSONLD data={[jsonLd, faqSchema]} />
            <Header theme="dark" />
            <main>
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepBlue-900 text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold-400 text-sm font-semibold mb-6">WhatsApp & Marketing Automation</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            Work Smarter, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Not Harder</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Stop manually following up with every lead. I build intelligent automation systems—WhatsApp chatbots, email flows, CRM workflows—that nurture leads and close sales while you sleep.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://wa.me/971543491544" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg">Automate Your Marketing</a>
                            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">See How It Works</a>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-900 mb-6">Why You're Drowning in Manual Work</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">You're spending hours on repetitive tasks that could be automated. Here's what's holding you back.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: <Clock size={32} className="text-red-500" />, title: "Time Wasted", desc: "Manually sending follow-ups, updating CRMs, and responding to FAQs." },
                                { icon: <MessageSquare size={32} className="text-red-500" />, title: "Slow Response Times", desc: "Leads go cold because you can't respond instantly 24/7." },
                                { icon: <Workflow size={32} className="text-red-500" />, title: "Inconsistent Follow-Up", desc: "Leads fall through the cracks when you forget to follow up." }
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
                            <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mt-3">My Automation Services</h2>
                        </div>
                        <div className="space-y-24">
                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><MessageSquare size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">WhatsApp Chatbots</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I build intelligent WhatsApp chatbots that answer FAQs, qualify leads, book appointments, and even process orders—all automatically, 24/7.</p>
                                    <ul className="space-y-3">
                                        {['Instant Lead Qualification', 'Appointment Booking Automation', 'FAQ & Customer Support', 'Order Processing & Tracking'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="WhatsApp Chatbot" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><Workflow size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">CRM & Workflow Automation</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">Connect your tools—CRM, email, ads, website—into seamless workflows that automatically move leads through your funnel without manual intervention.</p>
                                    <ul className="space-y-3">
                                        {['Zapier & Make.com Integrations', 'Lead Scoring & Routing', 'Automated Task Assignment', 'Multi-Channel Sync'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Workflow Automation" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6"><Bot size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">AI-Powered Personalization</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">Use AI to deliver hyper-personalized experiences at scale. Dynamic content, smart recommendations, and predictive lead scoring—all automated.</p>
                                    <ul className="space-y-3">
                                        {['Dynamic Email Content', 'Product Recommendations', 'Predictive Lead Scoring', 'Behavioral Triggers'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="AI Automation" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="process" className="py-20 bg-deepBlue-900 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Automation Process</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">From mapping to deployment, here's how I automate your marketing.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Map", desc: "Identify repetitive tasks and automation opportunities." },
                                { step: "02", title: "Design", desc: "Build workflows and chatbot conversation flows." },
                                { step: "03", title: "Build", desc: "Set up integrations and automation tools." },
                                { step: "04", title: "Optimize", desc: "Monitor performance and refine for better results." }
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Automate Your Marketing?</h2>
                        <p className="text-xl mb-10 font-medium max-w-2xl mx-auto">Stop wasting time on manual tasks. Let's build automation that scales your business.</p>
                        <a href="https://wa.me/971543491544" className="inline-flex items-center gap-2 px-8 py-4 bg-deepBlue-900 text-white font-bold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-xl">
                            Automate Your Marketing <ArrowRight size={20} />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default MarketingAutomation;
