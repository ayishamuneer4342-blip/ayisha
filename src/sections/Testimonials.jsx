import React from 'react';
import { Quote, User } from 'lucide-react';
import muhamedImage from '../assets/muhmed-afsal.webp';
import nihalImage from '../assets/nihal-roshan.webp';
import abdulImage from '../assets/abdul-muneer.webp';

const Testimonials = ({ theme = 'light' }) => {
    // Styles configuration
    const styles = {
        light: {
            sectionBg: "bg-white",
            heading: "text-black",
            subHeading: "text-black",
            highlight: "text-[#4d7c0f]",
            cardBg: "bg-[#effae6]",
            cardText: "text-[#3f6212]",
            name: "text-black",
            role: "text-black",
            imgContainer: "bg-gray-300"
        },
        vperfect: {
            sectionBg: "bg-slate-900",
            heading: "text-white",
            subHeading: "text-slate-300",
            highlight: "text-gold-500",
            cardBg: "bg-slate-800 border border-slate-700",
            cardText: "text-slate-200",
            name: "text-white",
            role: "text-gold-500",
            imgContainer: "bg-slate-700 border-2 border-slate-600"
        }
    };

    const currentStyle = styles[theme] || styles.light;

    const testimonials = [
        {
            text: "As a Digital Marketing strategist in Dubai, UAE, she increased our hypermarket's visibility across social media platforms. Her strategic movements to social media marketing have increased customer engagement and increased foot traffic to our store. We've experienced growth in followers and loyal customers due to her efforts. Her dedication and innovative strategies have truly changed our online presence and set us apart from the competitors.",
            name: "MUHMED AFSAL",
            role: "FOUNDER,NEARBI",
            image: muhamedImage
        },
        {
            text: "She transformed our event management company's online presence. Her marketing strategies highly increased our social media engagements and helped us reach more audiences. As a Digital Marketing Strategist in Dubai, UAE, thanks to her abilities, we've seen a lot more rise in enquiries for our services and higher participants in the events. We highly recommend her to anyone planning to increase their brand value and business in the digital space.",
            name: "NIHAL ROSHAN",
            role: "FOUNDER,MOMENTUM",
            image: nihalImage
        },
        {
            text: "Our optical shop's online presence has improved very much through effective Google Ads campaigns and website optimization. As a Digital Marketing Strategist in Dubai, UAE, she developed unique strategies that increased our website traffic and in-shop inquiries, which led to more appointments and sales. Thank her for her efforts and all marketing support. We highly recommend her for any business looking to increase their presence in the fast-developing digital space.",
            name: "ABDUL MUNEER",
            role: "MD,HEBAH OPTICS",
            image: abdulImage
        }
    ];

    return (
        <section className={`py-20 ${currentStyle.sectionBg}`} id="testimonials">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-5xl mx-auto mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold ${currentStyle.heading} mb-8 relative inline-block`}>
                        What Others Say
                    </h2>

                    <p className={`${currentStyle.subHeading} leading-relaxed text-base md:text-lg font-medium`}>
                        I've had the privilege of working with clients across various industries, each with unique digital marketing challenges. By identifying their needs, analyzing data, and executing targeted social media campaigns, I’ve helped brands enhance their digital visibility and achieve measurable results. As a <span className={`font-bold ${currentStyle.highlight}`}>Digital Marketing Strategist in Dubai</span>, my tailored strategies drive growth and business success. Here’s what my clients say about the transformative impact of my works.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`${currentStyle.cardBg} p-8 rounded-xl relative transition-all hover:-translate-y-1 hover:shadow-lg`}>
                            <div className="mb-6">
                                <p className={`${currentStyle.cardText} text-sm leading-relaxed font-semibold`}>
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="flex items-center gap-6 mt-auto">
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${currentStyle.imgContainer}`}>
                                    {/* Placeholder for image */}
                                    {testimonial.image ? <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" loading="lazy" /> : <User className="text-gray-500" size={32} />}
                                </div>
                                <div>
                                    <h3 className={`font-bold ${currentStyle.name} text-sm uppercase`}>
                                        {testimonial.name}
                                    </h3>
                                    <p className={`${currentStyle.role} text-xs uppercase font-bold`}>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
