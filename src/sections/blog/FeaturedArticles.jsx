import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

const FeaturedArticles = () => {
    // Select specific posts to feature (e.g., indices 0, 1, 6 for variety including the new Dubai post)
    const featured = [blogPosts[6], blogPosts[2], blogPosts[5]].filter(Boolean); // Fallback to avoid crashes

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header with Categories */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-slate-100 pb-6 gap-6">
                    <h2 className="text-3xl font-bold text-deepBlue-900">Featured Articles</h2>

                    <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                        {["SEO", "Social Media", "Google Ads", "Website UX", "Analytics"].map(tag => (
                            <span key={tag} className="hover:text-gold-500 cursor-pointer transition-colors px-2 py-1 rounded hover:bg-slate-50">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {featured.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-64 rounded-xl overflow-hidden mb-5">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <span className="absolute top-4 left-4 bg-deepBlue-900/90 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider backdrop-blur-sm">
                                    {post.category}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{post.date}</p>
                                <h3 className="text-xl font-bold text-deepBlue-900 leading-tight group-hover:text-gold-500 transition-colors">
                                    <Link to={`/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedArticles;
