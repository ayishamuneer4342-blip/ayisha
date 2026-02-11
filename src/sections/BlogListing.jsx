import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const categories = ["All", "SEO", "Social Media", "Google Ads", "Website UX", "Analytics"];

const BlogListing = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="flex-grow">
            {/* Category Filter Tab Bar */}
            <div className="flex flex-wrap gap-8 border-b border-slate-200 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`pb-4 text-sm font-bold uppercase tracking-wide transition-all border-b-2 ${selectedCategory === cat
                            ? "border-gold-500 text-deepBlue-900"
                            : "border-transparent text-slate-400 hover:text-deepBlue-900"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* List Feed */}
            <div className="space-y-10">
                <AnimatePresence mode="wait">
                    {filteredPosts.map((post) => (
                        <motion.article
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            key={post.id}
                            className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-slate-100 pb-10"
                        >
                            <Link to={`/${post.slug}`} className="shrink-0 md:w-64 h-48 rounded-lg overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </Link>

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-medium uppercase tracking-wider">
                                    <span className="text-gold-600 font-bold">{post.category}</span>
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-deepBlue-900 mb-3 group-hover:text-gold-600 transition-colors leading-tight">
                                    <Link to={`/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-slate-600 text-base leading-relaxed mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <Link to={`/${post.slug}`} className="inline-flex items-center text-deepBlue-900 font-bold text-xs uppercase tracking-widest hover:text-gold-600 transition-colors">
                                    Read More <ArrowRight size={14} className="ml-2" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        <p>No articles found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogListing;
