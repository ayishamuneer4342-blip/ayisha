import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Brain, Sparkles, Zap, Bot, ArrowRight, Cpu } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import SchemaJSONLD from '../../components/SchemaJSONLD';

const AiIntegration = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const jsonLd = { "@context": "https://schema.org", "@type": "Service", "serviceType": "AI Integration & Consulting", "provider": { "@type": "Person", "name": "Ayisha Muneer" }, "areaServed": { "@type": "City", "name": "Dubai" }, "description": "Expert AI integration consulting in Dubai. Leverage ChatGPT, automation, and AI tools to scale your marketing and operations." };
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How can AI help my business?", "acceptedAnswer": { "@type": "Answer", "text": "AI can automate content creation, personalize customer experiences, analyze data faster, qualify leads, and handle customer support—freeing your team to focus on strategy and growth." } }, { "@type": "Question", "name": "Do I need technical skills to use AI?", "acceptedAnswer": { "@type": "Answer", "text": "No. I set up AI tools and workflows that are easy to use, with training and documentation so your team can leverage AI without needing to code or understand the technical details." } }, { "@type": "Question", "name": "Is AI expensive to implement?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. Many AI tools have affordable monthly subscriptions (AED 100-500/month). The ROI comes from time saved and increased efficiency—often 10x or more." } }] };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO title="AI Integration Consultant Dubai | ChatGPT & Automation | Ayisha Muneer" description="Expert AI integration consulting in Dubai. Leverage ChatGPT, automation, and AI tools to scale your marketing and operations." keywords="AI Consultant Dubai, ChatGPT Integration, AI Automation, Machine Learning UAE" url="https://ayishamuneer.com/services/ai-integration" />
            <SchemaJSONLD data={[jsonLd, faqSchema]} />
            <Header theme="dark" />
            <main>
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepBlue-900 text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-violet-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold-400 text-sm font-semibold mb-6">AI Integration & Consulting</motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            Scale Your Business with <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">AI-Powered Marketing</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Stop doing everything manually. I help businesses integrate AI tools like ChatGPT, automation platforms, and machine learning to work smarter, faster, and more profitably.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://wa.me/971543491544" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg">Start Using AI Today</a>
                            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">See How It Works</a>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-900 mb-6">Why You're Falling Behind Without AI</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">Your competitors are using AI to move faster and cheaper. Here's what you're missing.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: <Cpu size={32} className="text-red-500" />, title: "Manual Processes", desc: "Spending hours on tasks AI could do in minutes—content, data analysis, customer support." },
                                { icon: <Brain size={32} className="text-red-500" />, title: "Missed Insights", desc: "AI can spot patterns and opportunities in your data that humans miss." },
                                { icon: <Zap size={32} className="text-red-500" />, title: "Slow Execution", desc: "Competitors using AI are launching campaigns 10x faster than you." }
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
                            <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mt-3">My AI Services</h2>
                        </div>
                        <div className="space-y-24">
                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Sparkles size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">AI Content Creation</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I set up AI-powered workflows using ChatGPT and other tools to generate blog posts, social media content, ad copy, and email campaigns—10x faster than manual writing.</p>
                                    <ul className="space-y-3">
                                        {['Custom ChatGPT Prompts & Templates', 'AI Blog Writing Workflows', 'Social Media Content Automation', 'Ad Copy Generation'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="AI Content Creation" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><Bot size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">AI Chatbots & Customer Support</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I build intelligent AI chatbots that handle customer inquiries, qualify leads, and provide 24/7 support—reducing your team's workload by 70%+.</p>
                                    <ul className="space-y-3">
                                        {['ChatGPT-Powered Chatbots', 'Website & WhatsApp Integration', 'Lead Qualification Automation', 'FAQ & Support Automation'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="AI Chatbot" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6"><Brain size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">AI Data Analysis & Insights</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I use AI to analyze your marketing data, uncover hidden patterns, predict customer behavior, and provide actionable insights that drive better decisions.</p>
                                    <ul className="space-y-3">
                                        {['Predictive Analytics', 'Customer Behavior Analysis', 'Campaign Performance Insights', 'Automated Reporting Dashboards'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="AI Data Analysis" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="process" className="py-20 bg-deepBlue-900 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">My AI Integration Process</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">From discovery to deployment, here's how I help you leverage AI.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Assess", desc: "Identify opportunities where AI can save time and money." },
                                { step: "02", title: "Select", desc: "Choose the right AI tools for your specific needs." },
                                { step: "03", title: "Implement", desc: "Set up and integrate AI into your workflows." },
                                { step: "04", title: "Train", desc: "Train your team to use AI effectively and confidently." }
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Leverage AI for Growth?</h2>
                        <p className="text-xl mb-10 font-medium max-w-2xl mx-auto">Stop falling behind. Let's integrate AI into your business and unlock exponential growth.</p>
                        <a href="https://wa.me/971543491544" className="inline-flex items-center gap-2 px-8 py-4 bg-deepBlue-900 text-white font-bold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-xl">
                            Start Using AI Today <ArrowRight size={20} />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AiIntegration;
