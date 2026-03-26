"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BlogPost } from "@/data/blogs";

function BlogHero() {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-r from-[#eef2fc] via-[#f7eef5] to-[#fcecf3]">
            {/* Soft decorative blur shapes */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
            
            <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }} 
                    className="text-5xl md:text-6xl font-serif text-[#0e1012] mb-6"
                >
                    Blogs
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: 0.1 }} 
                    className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto font-light"
                >
                    Stories, tips, and tools to inspire you to find your
                    most creative self. Subscribe to get curated content
                    delivered directly to your inbox.
                </motion.p>
                
                <motion.form 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: 0.2 }} 
                    className="max-w-md mx-auto"
                >
                    <div className="flex flex-col sm:flex-row gap-0 rounded-full bg-white p-1 shadow-sm border border-gray-200">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="flex-1 px-6 py-3 rounded-l-full bg-transparent focus:outline-none text-gray-700 text-sm" 
                            required 
                        />
                        <button 
                            type="submit" 
                            className="px-8 py-3 bg-[#0e1012] text-white font-medium rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap text-sm"
                        >
                            Subscribe
                        </button>
                    </div>
                    <p className="mt-4 text-xs text-gray-500">
                        * This site is protected by reCAPTCHA and the Google{' '}
                        <a href="#" className="font-medium text-blue-500 hover:underline">Privacy Policy</a>{' '}
                        and <a href="#" className="font-medium text-blue-500 hover:underline">Terms of Service</a> apply.
                    </p>
                </motion.form>
            </div>
        </section>
    );
}

function FeaturedBlogSection({ posts }: { posts: BlogPost[] }) {
    // Show top 3 posts as featured
    const featuredPosts = posts.slice(0, 3);
    
    if (featuredPosts.length === 0) return null;
    
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012]">Featured Showcased Blog</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {featuredPosts.map((post, index) => (
                        <Link key={post.slug || index} href={`/blog/${post.slug}`}>
                            <motion.article 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ delay: index * 0.1 }} 
                                className="group h-full flex flex-col bg-white border-b-[6px] border-[#eab308] p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
                            >
                                <div className="aspect-[4/3] rounded-md overflow-hidden mb-6 bg-blue-50 relative flex-shrink-0">
                                    <div 
                                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" 
                                        style={{ backgroundImage: `url(${post.image || 'https://via.placeholder.com/600x400?text=No+Image'})` }} 
                                    />
                                </div>
                                <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-3">
                                    <span>{post.date || new Date().toLocaleDateString()}</span>
                                    <span>•</span>
                                    <span>{post.readTime || '5 min read'}</span>
                                </div>
                                <h3 className="text-[22px] font-bold text-[#0e1012] group-hover:text-blue-600 transition-colors line-clamp-2 md:line-clamp-3 mb-3 leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-3 mt-auto leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function LatestArticlesSection({ posts }: { posts: BlogPost[] }) {
    // Collect unique categories, filter out falsy ones
    const categorySet = new Set(posts.map(p => p.category).filter(Boolean));
    const categories = ["All", ...Array.from(categorySet)];
    
    const [activeCategory, setActiveCategory] = useState("All");
    
    // Filter posts
    const filteredPosts = activeCategory === "All" 
        ? posts.slice(3) 
        : posts.filter(p => p.category === activeCategory);
        
    return (
        <section className="py-12 bg-white pb-24">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-serif text-[#0e1012] mb-8">Latest articles</h2>
                
                {/* Category Filters */}
                {categories.length > 1 && (
                    <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-gray-100 pb-6">
                        {categories.map((category) => (
                            <button 
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors border ${
                                    activeCategory === category 
                                    ? "bg-[#0e1012] text-white border-[#0e1012]" 
                                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
                
                {/* Article Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-12">
                    {filteredPosts.map((post, index) => (
                        <Link key={post.slug || index} href={`/blog/${post.slug}`}>
                            <motion.article 
                                initial={{ opacity: 0, y: 20 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ delay: (index % 3) * 0.1 }} 
                                className="group cursor-pointer flex flex-col h-full"
                            >
                                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-[#e4effc] group-hover:shadow-md transition-shadow relative">
                                    <div 
                                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
                                        style={{ backgroundImage: `url(${post.image || 'https://via.placeholder.com/600x400?text=No+Image'})` }} 
                                    />
                                </div>
                                <div className="flex flex-col flex-1 px-1">
                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                        <span>{post.date || new Date().toLocaleDateString()}</span>
                                        <span className="text-[10px]">•</span>
                                        <span>{post.readTime || '5 min read'}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#0e1012] group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                        {post.title}
                                    </h3>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                    
                    {filteredPosts.length === 0 && (
                        <div className="col-span-full py-12 text-center text-gray-500">
                            No articles found{activeCategory !== "All" && ` in ${activeCategory} category`}.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default function BlogContent({ initialPosts }: { initialPosts: BlogPost[] }) {
    // If we want state-based posts in the future
    const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
    
    return (
        <div className="bg-white min-h-screen">
            <BlogHero />
            <FeaturedBlogSection posts={posts} />
            <LatestArticlesSection posts={posts} />
        </div>
    );
}
