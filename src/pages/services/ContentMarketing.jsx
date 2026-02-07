import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, PenTool, BookOpen, FileText, Video, ArrowRight, Lightbulb } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import SchemaJSONLD from '../../components/SchemaJSONLD';

const ContentMarketing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Content Marketing",
        "provider": { "@type": "Person", "name": "Ayisha Muneer" },
        "areaServed": { "@type": "City", "name": "Dubai" },
        "description": "Expert content marketing services in Dubai. Drive organic traffic and build authority with blogs, video scripts, and lead magnets that convert."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How often should I publish content?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Quality beats quantity. I recommend 2-4 high-quality, SEO-optimized pieces per month that truly answer your audience's questions, rather than daily low-value posts."
                }
            },
            {
                "@type": "Question",
                "name": "What types of content work best?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on your audience and funnel stage. Blog posts for awareness, case studies for consideration, and comparison guides for decision-making all play different roles."
                }
            },
            {
                "@type": "Question",
                "name": "How long until content drives results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Content marketing is a long-term play. Expect initial traction in 3-6 months, with compounding results over 12+ months as your content library and authority grow."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="Content Marketing Strategist Dubai | Ayisha Muneer"
                description="Drive organic traffic and build authority with expert content marketing services in Dubai. Blogs, video scripts, and lead magnets that convert."
                keywords="Content Marketing Dubai, SEO Copywriting, Content Strategy, Blog Writing Services"
                url="https://ayishamuneer.com/services/content-marketing"
            />
            <SchemaJSONLD data={[jsonLd, faqSchema]} />
            <Header theme="dark" />

            <main>
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-deepBlue-900 text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold-400 text-sm font-semibold mb-6">
                            Content Marketing
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            Content That Educates <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">& Sells</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Turn your expertise into authority. I create content strategies that answer your customers' questions, build trust, and nurture them through the sales funnel.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://wa.me/971543491544" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg">Get Your Content Strategy</a>
                            <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">See How I Work</a>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-900 mb-6">Why Your Content Isn't Converting</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">You're publishing regularly, but traffic and leads remain flat. Here's what's missing.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: <Lightbulb size={32} className="text-red-500" />, title: "No Strategy", desc: "Publishing random topics instead of targeting buyer intent keywords." },
                                { icon: <FileText size={32} className="text-red-500" />, title: "Thin Content", desc: "Surface-level articles that don't provide real value or depth." },
                                { icon: <BookOpen size={32} className="text-red-500" />, title: "No Distribution", desc: "Great content that nobody sees because you're not promoting it." }
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
                            <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mt-3">My Content Services</h2>
                        </div>
                        <div className="space-y-24">
                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><BookOpen size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">SEO Blog Writing</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">I write in-depth, SEO-optimized blog posts that rank on Google and convert readers into leads. Every piece is researched, strategically structured, and designed to answer real user questions.</p>
                                    <ul className="space-y-3">
                                        {['Keyword Research & Mapping', 'Long-Form SEO Articles (2000+ words)', 'Internal Linking Strategy', 'Meta Descriptions & Titles'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1499750310159-5254f3615e02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Blog Writing" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><Video size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Video Scripts & Planning</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">Video is king. I create compelling scripts for YouTube, TikTok, and Instagram Reels that hook viewers in the first 3 seconds and drive them to take action.</p>
                                    <ul className="space-y-3">
                                        {['Hook-Driven Script Structure', 'Platform-Specific Formatting', 'CTA Integration', 'Storyboard Planning'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Video Content" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6"><FileText size={32} /></div>
                                    <h3 className="text-3xl font-bold text-deepBlue-900 mb-4">Lead Magnets & E-books</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">Grow your email list with high-value lead magnets. I create downloadable guides, checklists, and e-books that solve real problems and position you as the expert.</p>
                                    <ul className="space-y-3">
                                        {['Topic Research & Validation', 'Professional Writing & Editing', 'Design-Ready Formatting', 'Landing Page Copy'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium"><Check size={20} className="text-green-500" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                                        <div className="absolute inset-0 bg-deepBlue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lead Magnets" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="process" className="py-20 bg-deepBlue-900 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Content Process</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">From research to publication, here's how I create content that drives results.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Research", desc: "Keyword research, competitor analysis, and audience insights." },
                                { step: "02", title: "Outline", desc: "Strategic content structure optimized for SEO and readability." },
                                { step: "03", title: "Write", desc: "High-quality, engaging content that answers user intent." },
                                { step: "04", title: "Optimize", desc: "SEO optimization, internal linking, and performance tracking." }
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Content That Converts?</h2>
                        <p className="text-xl mb-10 font-medium max-w-2xl mx-auto">Stop creating content that gets ignored. Let's build a strategy that drives traffic and revenue.</p>
                        <a href="https://wa.me/971543491544" className="inline-flex items-center gap-2 px-8 py-4 bg-deepBlue-900 text-white font-bold rounded-lg hover:bg-deepBlue-800 transition-colors shadow-xl">
                            Get Your Content Strategy <ArrowRight size={20} />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContentMarketing;
