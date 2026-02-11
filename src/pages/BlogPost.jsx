import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaJSONLD from '../components/SchemaJSONLD';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Find the post based on the slug
    const post = blogPosts.find(p => p.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Handle case where post is not found
    useEffect(() => {
        if (!post) {
            navigate('/blog');
        }
    }, [post, navigate]);

    if (!post) return null;

    // Advanced Schema Generator
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://ayishamuneer.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blog",
                        "item": "https://ayishamuneer.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": post.title,
                        "item": `https://ayishamuneer.com/${post.slug}`
                    }
                ]
            },
            {
                "@type": "BlogPosting",
                "headline": post.title,
                "image": post.image,
                "datePublished": post.date,
                "author": {
                    "@type": "Person",
                    "name": "Ayisha Muneer"
                },
                "description": post.excerpt,
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["#key-takeaways", "#faq-section"]
                }
            },
            ...(post.faq ? [{
                "@type": "FAQPage",
                "mainEntity": post.faq.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            }] : [])
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title={post.title}
                description={post.excerpt}
                image={post.image}
                type="article"
                url={`https://ayishamuneer.com/${post.slug}`}
            />
            <SchemaJSONLD data={jsonLd} />
            <Header />

            <main className="pt-24 pb-20">
                {/* Hero / Header Image */}
                <div className="w-full h-64 md:h-96 relative overflow-hidden bg-slate-100">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deepBlue-900/70 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white container mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-gold-500 mb-6 transition-colors font-medium">
                                <ArrowLeft size={20} className="mr-2" /> Back to Blog
                            </Link>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-shadow">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm md:text-base text-white/90">
                                <span className="flex items-center gap-2">
                                    <Calendar size={16} className="text-gold-500" />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Tag size={16} className="text-gold-500" />
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-2">
                                    <User size={16} className="text-gold-500" />
                                    By Ayisha Muneer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <article className="container mx-auto px-4 md:px-6 mt-12">
                    <div className="max-w-3xl mx-auto bg-white">
                        {/* Share Links (Visual only for now) */}
                        <div className="flex justify-between items-center border-b border-slate-100 pb-8 mb-8">
                            <span className="text-slate-500 text-sm font-medium">{post.readTime}</span>
                            <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors">
                                <Share2 size={18} />
                                <span className="text-sm font-medium">Share this article</span>
                            </button>
                        </div>

                        {/* KEY TAKEAWAYS (AEO OPTIMIZED) */}
                        {post.keyTakeaways && (
                            <div id="key-takeaways" className="bg-slate-50 border-l-4 border-gold-500 p-6 rounded-r-lg mb-10 shadow-sm">
                                <h3 className="text-xl font-bold text-deepBlue-900 mb-4 flex items-center">
                                    Why this matters (in 30 seconds)
                                </h3>
                                <ul className="space-y-3">
                                    {post.keyTakeaways.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3 text-slate-700">
                                            <span className="bg-deepBlue-900 text-gold-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-1 shrink-0">✓</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Rich Content */}
                        <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-loose">
                            {post.content}
                        </div>

                        {/* FAQ SECTION (AEO OPTIMIZED) */}
                        {post.faq && (
                            <div id="faq-section" className="mt-16 pt-10 border-t border-slate-100">
                                <h3 className="text-2xl font-bold text-deepBlue-900 mb-6">Frequently Asked Questions</h3>
                                <div className="space-y-6">
                                    {post.faq.map((item, index) => (
                                        <div key={index} className="bg-slate-50 p-6 rounded-lg">
                                            <h4 className="font-bold text-lg text-slate-900 mb-3">{item.question}</h4>
                                            <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Footer / Author Bio */}
                        <div className="mt-16 pt-10 border-t border-slate-100 bg-slate-50 p-8 rounded-xl flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-deepBlue-900 flex items-center justify-center text-white font-bold text-xl shrink-0">
                                AM
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-deepBlue-900 mb-1">Written by Ayisha Muneer</h4>
                                <p className="text-sm text-slate-600">
                                    Digital Marketing Strategist helping brands in UAE scale through data-driven campaigns and SEO.
                                </p>
                            </div>
                        </div>

                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPost;
