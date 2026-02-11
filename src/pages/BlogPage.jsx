import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SchemaJSONLD from '../components/SchemaJSONLD';

// New Components
import BlogHero from '../sections/blog/BlogHero';
import FeaturedArticles from '../sections/blog/FeaturedArticles';
import BlogListing from '../sections/BlogListing';
import BlogSidebar from '../sections/blog/BlogSidebar';

const BlogPage = () => {
    // Scroll to top when page aligns
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Digital Marketing Insights Dubai",
        "description": "Read the latest insights on digital marketing, SEO, and business growth strategies from Ayisha Muneer, tailored for the UAE market."
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="Digital Marketing Blog | Insights for Dubai Businesses"
                description="Expert strategies on SEO, Social Media, and Branding to grow your business in Dubai. Read the latest analysis from Ayisha Muneer."
                keywords="Dubai Digital Marketing, UAE SEO Tips, Business Growth Dubai, Marketing Blog"
                url="https://ayishamuneer.com/blog"
            />
            <SchemaJSONLD data={jsonLd} />

            <Header />

            <main>
                {/* 1. Full Width Hero */}
                <BlogHero />

                {/* 2. Featured Articles Strip */}
                <FeaturedArticles />

                {/* 3. Main Content Area (Two Columns) */}
                <section className="py-16 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col lg:flex-row gap-16">

                            {/* Left Column: Main Feed */}
                            <BlogListing />

                            {/* Right Column: Sidebar */}
                            <BlogSidebar />

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;
