import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
            {/* Background gradients - Removed or simplified to keep color count low */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-800/30 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            Don't Just Build a Website. <br className="hidden md:block" />
                            <span className="text-gold-500">
                                Build a Revenue Engine.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                            Stop settling for templates that look good but do nothing. We build high-performance, custom websites engineered to turn traffic into profit—fast, secure, and clearer than your competition.
                        </p>

                        <div className="space-y-4 mb-8 hidden lg:block">
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-gold-500" />
                                <span className="text-slate-200">Strategic Design That Sells</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-gold-500" />
                                <span className="text-slate-200">Lightning-Fast Performance</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-gold-500" />
                                <span className="text-slate-200">Mobile-First User Experience</span>
                            </div>
                            <div className="flex items-center gap-3 text-white font-bold bg-white/5 p-2 rounded-lg border border-gold-500/30">
                                <CheckCircle2 className="w-5 h-5 text-gold-500" />
                                <span>SEO Optimized for Growth</span>
                            </div>
                        </div>

                        {/* Price Hook Badge */}
                        <div className="inline-block relative mb-8 group">
                            <div className="absolute inset-0 bg-gold-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                            <div className="relative bg-slate-800 border-2 border-gold-500 rounded-xl px-6 py-3 flex items-center gap-3">
                                <span className="bg-gold-500 text-slate-900 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                    Limited Offer
                                </span>
                                <span className="text-gold-400 font-bold text-lg">
                                    Websites max from <span className="text-white text-xl">$275</span>
                                </span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0">
                            <a
                                href="https://wa.me/971543491544"
                                className="inline-flex justify-center items-center px-8 py-3.5 bg-gold-500 text-deepBlue-900 font-bold rounded-lg hover:bg-gold-400 transition-all shadow-lg hover:shadow-gold-500/25"
                            >
                                Contact Me
                            </a>
                            <a
                                href="/services/web-design"
                                className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-slate-600 hover:border-white text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
                            >
                                View Portfolio
                            </a>
                        </div>

                        <p className="text-sm text-slate-400 font-medium italic lg:hidden mt-8">
                            No pressure. No obligations. Just honest advice.
                        </p>
                    </div>


                    {/* Contact Form */}
                    <div className="w-full lg:w-1/2 max-w-md bg-white rounded-2xl p-8 shadow-2xl text-slate-900">
                        <h3 className="text-2xl font-bold mb-2">Get Your Free Strategy Call</h3>
                        <p className="text-slate-600 mb-6 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>

                        <HeroForm />
                    </div>

                </div>
            </div>
        </section>
    );
}

function HeroForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            await import('../../utils/emailService').then(({ sendEmail }) =>
                sendEmail({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    message: 'Requested Strategy Call via Hero Form',
                    subject: 'Strategy Call Request (Hero)'
                })
            );

            setSubmitStatus('success');
            setTimeout(() => {
                const message = encodeURIComponent("Hi Ayisha, I'm looking for a website. Can we have a meeting?");
                window.location.href = `https://wa.me/971543491544?text=${message}`;
            }, 1000);
            e.target.reset();
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="text-center py-12 bg-white rounded-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-deepBlue-900 mb-2">Request Received!</h3>
                <p className="text-slate-600">Redirecting to WhatsApp...</p>
                <button
                    onClick={() => {
                        const message = encodeURIComponent("Hi Ayisha, I'm looking for a website. Can we have a meeting?");
                        window.location.href = `https://wa.me/971543491544?text=${message}`;
                    }}
                    className="mt-6 text-gold-500 font-semibold hover:text-gold-600 transition-colors"
                >
                    Open WhatsApp manually
                </button>
            </div>
        );
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                    name="name"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                    name="email"
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold mb-1">Phone (Optional)</label>
                <input
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                />
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-gold-500 hover:bg-gold-400 text-deepBlue-900 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-gold-500/25 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                >
                    {isSubmitting ? 'Booking...' : 'Book My Free Call'}
                </button>
            </div>

            <p className="text-xs text-center text-slate-400 mt-4">
                We respect your privacy. No spam, ever.
            </p>
        </form>
    );
}
