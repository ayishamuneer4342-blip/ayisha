import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

const BlogSidebar = () => {
    // Get popular posts (excluding featured ones to avoid duplication ideally, but for now just taking first 4)
    const popularPosts = blogPosts.slice(0, 4);

    return (
        <aside className="space-y-12 shrink-0 w-full lg:w-[350px]">
            {/* Subscribe Widget */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-deepBlue-900 mb-6">Subscribe</h3>
                <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-4 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none mb-4 bg-white"
                />
                <button className="w-full bg-gold-500 hover:bg-gold-600 text-deepBlue-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md">
                    Subscribe
                </button>
            </div>

            {/* Popular Posts */}
            <div>
                <h3 className="text-xl font-bold text-deepBlue-900 mb-6 border-l-4 border-gold-500 pl-4">Popular Posts</h3>
                <ul className="space-y-6">
                    {popularPosts.map((post) => (
                        <li key={post.id} className="group">
                            <Link to={`/blog/${post.slug}`} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium group-hover:text-deepBlue-900 transition-colors leading-relaxed">
                                    {post.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default BlogSidebar;
