"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BlogPost, defaultBlogs } from "@/data/blogs";

function BlogHero() {
    return (
        <section className="py-24 bg-[#0e1012]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto">
                    <span className="text-[#00adef] italic font-serif text-lg">Our Blog</span>
                    <h1 className="mt-4 text-4xl md:text-5xl font-serif text-white">Insights & Resources</h1>
                    <p className="mt-6 text-gray-300">Expert insights on eCommerce, web development, and digital strategy.</p>
                </motion.div>
            </div>
        </section>
    );
}

function BlogPostsSection() {
    const [posts, setPosts] = useState<BlogPost[]>(defaultBlogs);

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Link key={index} href={`/blog/${post.slug}`}>
                            <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative cursor-pointer">
                                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
                                    <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${post.image})` }} />
                                </div>
                                <span className="text-sm font-medium text-[#00adef]">{post.category}</span>
                                <h2 className="mt-2 text-xl font-semibold text-[#0e1012] group-hover:text-[#00adef] transition-colors line-clamp-2">{post.title}</h2>
                                <p className="mt-2 text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1"><User size={12} />{post.author}</span>
                                    <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function NewsletterSection() {
    return (
        <section className="py-24 bg-[#f8f8f8]">
            <div className="container mx-auto px-6 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012]">Stay in the loop</h2>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">Get the latest eCommerce insights, tips, and tutorials delivered to your inbox.</p>
                    <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/20 outline-none" />
                        <button className="px-6 py-3 bg-[#00adef] text-[#0e1012] font-semibold rounded-lg hover:bg-[#00adef]/90 transition-colors">Subscribe</button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

export default function BlogContent() {
    return (
        <>
            <BlogHero />
            <BlogPostsSection />
            <NewsletterSection />
        </>
    );
}
