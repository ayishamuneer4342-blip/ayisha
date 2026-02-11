import React from 'react';
import { motion } from 'framer-motion';
import { Share2, DollarSign, PenTool, Mail, Monitor, Briefcase, Check } from 'lucide-react';

const DetailedServices = () => {
    const services = [
        {
            title: "Social Media Marketing",
            hook: "Not just likes and followers—campaigns designed to turn attention into sales.",
            whatIDo: "I build and manage social media presences that attract the right audience, build trust, and move people toward your offers—across Instagram, Facebook, LinkedIn and TikTok.",
            perfectFor: "Brands that want to stop posting randomly and start using social as a strategic channel for lead generation and sales.",
            deliverables: [
                "Full social media strategy",
                "Content calendar with daily posts",
                "Community management",
                "Hashtag and trend research",
                "Monthly analytics and insights",
                "Influencer collaboration strategy"
            ],
            results: "A steadily growing, engaged audience that actually clicks, inquires, and buys—not just scrolls past.",
            icon: Share2,
            color: "text-blue-500",
            bg: "bg-blue-50",
            border: "border-blue-100"
        },
        {
            title: "Paid Advertising",
            hook: "Every dirham tracked, tested, and optimized.",
            whatIDo: "I create, manage and scale profit-focused campaigns across Meta, Google and LinkedIn—engineered to bring you qualified leads and buyers instead of empty traffic.",
            perfectFor: "Businesses ready to invest in predictable growth and willing to judge success by leads, calls, bookings, and revenue.",
            deliverables: [
                "Campaign strategy and funnel planning",
                "Ad copy and creative direction",
                "Audience research & targeting",
                "A/B testing of creatives & audiences",
                "Conversion tracking & pixel setup",
                "Weekly optimizations & ROI reports"
            ],
            results: "Lower cost per lead, higher conversion rates, and clear visibility into which campaigns are actually driving profit.",
            icon: DollarSign,
            color: "text-green-500",
            bg: "bg-green-50",
            border: "border-green-100"
        },
        {
            title: "Content Marketing",
            hook: "Be the brand people learn from—then buy from.",
            whatIDo: "I turn your expertise into a content engine that attracts, educates, and convinces your ideal customers to choose you over everyone else.",
            perfectFor: "Brands that want durable, long-term authority and organic lead flow—not just short bursts from ads.",
            deliverables: [
                "Content strategy mapped to journey",
                "SEO-optimized blogs & guides",
                "Case studies and success stories",
                "Email newsletters",
                "Video scripts (Reels, YouTube)",
                "Lead magnets (eBooks, checklists)"
            ],
            results: "Higher quality inbound leads, improved search visibility, and stronger trust before sales conversations even start.",
            icon: PenTool,
            color: "text-purple-500",
            bg: "bg-purple-50",
            border: "border-purple-100"
        },
        {
            title: "Email Marketing",
            hook: "Turn one-time buyers into repeat customers on autopilot.",
            whatIDo: "I set up and manage email systems that welcome, nurture, upsell and re-engage your audience while you sleep.",
            perfectFor: "E-commerce brands, service businesses, and anyone with repeat purchase potential.",
            deliverables: [
                "Email marketing strategy",
                "List segmentation and cleanup",
                "Automated sequences (welcome, abandoned cart)",
                "Ongoing newsletters",
                "A/B testing for subject lines",
                "Performance dashboards"
            ],
            results: "Increased customer lifetime value, more repeat orders, and a channel you fully own—not controlled by algorithms.",
            icon: Mail,
            color: "text-amber-500",
            bg: "bg-amber-50",
            border: "border-amber-100"
        },
        {
            title: "Web Design & Optimization",
            hook: "Your website should be your best closer, not just an online brochure.",
            whatIDo: "I create and optimize websites that guide visitors from curiosity to contact, from click to checkout—with clear messaging and high-converting layouts.",
            perfectFor: "Businesses that need a new site or want to transform an existing one that gets traffic but doesn’t convert.",
            deliverables: [
                "Strategic site architecture",
                "Modern, mobile-first design",
                "Conversion-optimized layouts",
                "Persuasive website copy",
                "Lead capture forms & booking systems",
                "Basic SEO setup"
            ],
            results: "More inquiries, bookings, and sales from the traffic you already have.",
            icon: Monitor,
            color: "text-indigo-500",
            bg: "bg-indigo-50",
            border: "border-indigo-100"
        },
        {
            title: "Marketing Strategy & Consulting",
            hook: "Already have a team? Plug in expert direction.",
            whatIDo: "I audit your current efforts, identify leaks and blind spots, and help you build a focused growth roadmap your team can execute.",
            perfectFor: "Businesses with internal teams or existing agencies who need an independent expert eye and a clear plan.",
            deliverables: [
                "Full marketing audit",
                "Competitor & market analysis",
                "Custom strategy with KPIs",
                "Budget allocation guidance",
                "Implementation support",
                "Strategy review calls"
            ],
            results: "Clarity on what to stop, what to double down on, and where your next stage of growth will actually come from.",
            icon: Briefcase,
            color: "text-gray-500",
            bg: "bg-gray-50",
            border: "border-gray-100"
        }
    ];

    return (
        <section className="py-24 bg-slate-50" id="detailed-services">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold-500 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Services in depth
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-deepBlue-900 mb-6">
                        What I Do For You—In Detail
                    </h2>
                    <p className="text-lg text-slate-600">
                        Every service below has one job: to generate measurable business results. No vanity metrics, no guesswork—only strategies tied to growth.
                    </p>
                </div>

                <div className="space-y-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 }}
                            className={`bg-white rounded-2xl p-8 lg:p-10 shadow-sm border ${service.border} hover:shadow-md transition-shadow`}
                        >
                            <div className="flex flex-col lg:flex-row gap-10">
                                {/* Header & Main Info */}
                                <div className="lg:w-2/5">
                                    <div className={`inline-flex items-center gap-3 px-4 py-2 ${service.bg} ${service.color} rounded-full text-sm font-bold mb-6`}>
                                        <service.icon size={18} />
                                        {service.title}
                                    </div>

                                    <h3 className="text-2xl font-bold text-deepBlue-900 mb-4 leading-tight">
                                        {service.hook}
                                    </h3>

                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {service.whatIDo}
                                    </p>

                                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                                        <p className="text-sm font-semibold text-deepBlue-900 mb-1">Perfect For:</p>
                                        <p className="text-sm text-slate-600">{service.perfectFor}</p>
                                    </div>
                                </div>

                                {/* Vertical Divider */}
                                <div className="hidden lg:block w-px bg-slate-100 self-stretch" />

                                {/* Deliverables & Results */}
                                <div className="lg:w-3/5">
                                    <h4 className="font-bold text-deepBlue-900 mb-6">What You Get:</h4>
                                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                                        {service.deliverables.map((item, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <Check size={18} className="text-gold-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-600">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={`p-5 rounded-xl ${service.bg} border ${service.border}`}>
                                        <p className="text-sm font-bold text-deepBlue-900 mb-1">Results You Can Expect:</p>
                                        <p className="text-sm text-slate-700 font-medium">{service.results}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl font-medium text-deepBlue-900 mb-6">
                        Which Service Fits You Best?
                    </p>
                    <a
                        href="https://wa.me/971543491544"
                        className="inline-block px-8 py-4 bg-transparent border-2 border-deepBlue-900 text-deepBlue-900 font-bold rounded-lg hover:bg-deepBlue-900 hover:text-white transition-all"
                    >
                        Book Free Consultation
                    </a>
                </div>

            </div>
        </section>
    );
};

export default DetailedServices;
