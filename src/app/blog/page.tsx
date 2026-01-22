"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

// Hero
function BlogHero() {
    return (
        <section className="py-24 bg-[#0e1012]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="text-[#00adef] italic font-serif text-lg">Our Blog</span>
                    <h1 className="mt-4 text-4xl md:text-5xl font-serif text-white">
                        Insights & Resources
                    </h1>
                    <p className="mt-6 text-gray-300">
                        Expert insights on eCommerce, web development, and digital strategy.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Blog Posts
function BlogPostsSection() {
    const posts = [
        {
            title: "Build eCommerce Website From Scratch in 9 Easy Steps",
            excerpt: "A comprehensive guide to launching your first online store, from planning to deployment.",
            author: "Team Innodify",
            date: "Dec 20, 2024",
            readTime: "8 min read",
            category: "Development",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        },
        {
            title: "eCommerce UX Audit Checklist: Finding and Fixing UX Issues",
            excerpt: "Learn how to identify and resolve user experience problems that hurt your conversion rate.",
            author: "Team Innodify",
            date: "Dec 15, 2024",
            readTime: "6 min read",
            category: "UX Design",
            image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
        },
        {
            title: "Shopify vs Magento: Which Platform Is Right for Your Business?",
            excerpt: "An in-depth comparison of the two leading eCommerce platforms to help you make the right choice.",
            author: "Team Innodify",
            date: "Dec 10, 2024",
            readTime: "10 min read",
            category: "Platforms",
            image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80",
        },
        {
            title: "The Complete Guide to Headless Commerce",
            excerpt: "Everything you need to know about modern headless architecture and composable commerce.",
            author: "Team Innodify",
            date: "Dec 5, 2024",
            readTime: "12 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
        },
        {
            title: "How to Improve Your Magento Store's Core Web Vitals",
            excerpt: "Practical tips to boost your Magento performance and improve your Google rankings.",
            author: "Team Innodify",
            date: "Nov 28, 2024",
            readTime: "7 min read",
            category: "Performance",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        },
        {
            title: "Hyvä Theme: A Game Changer for Magento Performance",
            excerpt: "Discover how Hyvä themes can dramatically improve your Magento 2 store's speed.",
            author: "Team Innodify",
            date: "Nov 20, 2024",
            readTime: "5 min read",
            category: "Magento",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-video rounded-xl overflow-hidden mb-4">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: `url(${post.image})` }}
                                />
                            </div>
                            <span className="text-sm font-medium text-[#00adef]">{post.category}</span>
                            <h2 className="mt-2 text-xl font-semibold text-[#0e1012] group-hover:text-[#00adef] transition-colors line-clamp-2">
                                {post.title}
                            </h2>
                            <p className="mt-2 text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                            <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {post.readTime}
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Newsletter CTA
function NewsletterSection() {
    return (
        <section className="py-24 bg-[#f8f8f8]">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012]">
                        Stay in the loop
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        Get the latest eCommerce insights, tips, and tutorials delivered to your inbox.
                    </p>
                    <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/20 outline-none"
                        />
                        <button className="px-6 py-3 bg-[#00adef] text-[#0e1012] font-semibold rounded-lg hover:bg-[#00adef]/90 transition-colors">
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

export default function BlogPage() {
    return (
        <>
            <BlogHero />
            <BlogPostsSection />
            <NewsletterSection />
        </>
    );
}
