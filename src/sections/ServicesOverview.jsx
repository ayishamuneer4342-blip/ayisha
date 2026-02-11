import React from 'react';
import { motion } from 'framer-motion';
import { Share2, DollarSign, PenTool, Mail, Monitor, Briefcase, ArrowRight, MessageCircle, BarChart, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
    const services = [
        {
            title: "Social Media Marketing",
            description: "Build a community that converts with strategic content and campaigns across Instagram, Facebook, LinkedIn & TikTok—no more random posting.",
            icon: Share2,
            link: "/services/social-media"
        },
        {
            title: "Paid Advertising",
            description: "Make every dirham work harder through targeted Meta, Google & LinkedIn campaigns focused on ROI, not just impressions.",
            icon: DollarSign,
            link: "/services/paid-ads"
        },
        {
            title: "Content Marketing",
            description: "Turn your expertise into content that educates, builds trust, and keeps you top of mind when your audience is ready to buy.",
            icon: PenTool,
            link: "/services/content-marketing"
        },
        {
            title: "Email Marketing",
            description: "Convert subscribers into repeat customers with automated journeys that sell for you, 24/7.",
            icon: Mail,
            link: "/services/email-marketing"
        },
        {
            title: "Web Design",
            description: "Transform your website into your best salesperson with conversion-focused design, UX and messaging.",
            icon: Monitor,
            link: "/services/web-design"
        },
        {
            title: "Marketing Strategy & Consulting",
            description: "Get a clear, actionable roadmap to grow—whether you have a team in-house or you’re just starting to build one.",
            icon: Briefcase,
            link: "/services/marketing-strategy"
        },
        {
            title: "WhatsApp & Marketing Automation",
            description: "Engage customers instantly with personalized automations on WhatsApp, saving time and boosting conversions.",
            icon: MessageCircle,
            link: "/services/marketing-automation"
        },
        {
            title: "Lead Generation & Sales Conversion",
            description: "Drive high-quality leads and optimize your sales funnel to turn interest into closed deals more effectively.",
            icon: BarChart,
            link: "/services/lead-generation"
        },
        {
            title: "AI Integration",
            description: "Streamline your marketing, sales, and operations with cutting-edge AI tools to work smarter and faster.",
            icon: Bot,
            link: "/services/ai-integration"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-24 bg-white" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold-500 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        What I actually do for you
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mb-6">
                        Areas of My Expertise
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Think of me as your fractional marketing partner—offering full-funnel digital marketing services designed to bring in qualified traffic, nurture it, and turn it into revenue.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300 cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                <ArrowRight className="text-gold-500" />
                            </div>

                            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-deepBlue-900 mb-6 group-hover:bg-deepBlue-900 group-hover:text-gold-500 transition-all duration-300 group-hover:scale-110">
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-deepBlue-900 mb-3 group-hover:text-gold-600 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700">
                                {service.description}
                            </p>
                            {service.link && (
                                <Link
                                    to={service.link}
                                    className="text-xs font-semibold text-deepBlue-900 border-b border-gold-500 pb-0.5 hover:text-gold-500 transition-colors z-20 relative"
                                >
                                    Learn More
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <a
                        href="https://wa.me/971543491544"
                        className="inline-flex justify-center items-center px-8 py-4 bg-deepBlue-900 text-white font-semibold rounded-lg hover:bg-deepBlue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Discuss Your Marketing Needs
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
