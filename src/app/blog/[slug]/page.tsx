"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { defaultBlogs } from "@/data/blogs";
import BlogContentRenderer from "@/components/BlogContentRenderer";
import Head from "next/head";

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;

    const post = defaultBlogs.find((b) => b.slug === slug);

    if (!post) {
        notFound();
    }

    // Recommended Blogs Logic:
    // 1. Same category first
    // 2. Exclude current post
    // 3. Take 3
    const recommendedPosts = defaultBlogs
        .filter((b) => b.slug !== slug)
        .sort((a, b) => {
            if (a.category === post.category && b.category !== post.category) return -1;
            if (a.category !== post.category && b.category === post.category) return 1;
            return 0;
        })
        .slice(0, 3);



    return (
        <section className="relative min-h-screen bg-[#0e1012] py-24 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0e1012] -z-10" />
            <div className="absolute inset-0 opacity-20 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00adef]/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#00adef] transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Insights
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Category */}
                    <span className="inline-block px-4 py-1 rounded-full bg-[#00adef]/10 text-[#00adef] text-sm font-medium mb-6">
                        {post.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
                        {post.title}
                    </h1>

                    {/* Meta Meta */}
                    <div className="flex flex-wrap items-center gap-6 mb-12 py-8 border-y border-[#2a2f36]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00adef] to-blue-600 flex items-center justify-center text-white font-bold">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-[#e5e7eb] text-sm font-medium">{post.author}</p>
                                <p className="text-[#6b7280] text-xs">Author</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-[#9ca3af]">
                            <span className="flex items-center gap-2">
                                <Calendar size={16} className="text-[#00adef]" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} className="text-[#00adef]" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-[#15181c] border border-[#2a2f36]">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <BlogContentRenderer content={post.content} />

                    {/* Social Share */}
                    <div className="mt-16 pt-12 border-t border-[#2a2f36] flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <span className="text-[#9ca3af] font-medium">Share this article:</span>
                            <div className="flex gap-2">
                                <button className="p-3 rounded-lg bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]">
                                    <Facebook size={20} />
                                </button>
                                <button className="p-3 rounded-lg bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]">
                                    <Twitter size={20} />
                                </button>
                                <button className="p-3 rounded-lg bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]">
                                    <Linkedin size={20} />
                                </button>
                                <button className="p-3 rounded-lg bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </div>

                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[#00adef] font-semibold hover:gap-3 transition-all"
                        >
                            Read More Articles
                            <ArrowLeft size={20} className="rotate-180" />
                        </Link>
                    </div>
                </motion.div>

                {/* Recommended Section */}
                <div className="mt-24 pt-24 border-t border-[#2a2f36]">
                    <h2 className="text-3xl font-serif text-white mb-12">Recommended for you</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {recommendedPosts.map((rPost, idx) => (
                            <Link key={idx} href={`/blog/${rPost.slug}`} className="group">
                                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-[#15181c]">
                                    <img
                                        src={rPost.image}
                                        alt={rPost.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <span className="text-sm font-medium text-[#00adef]">{rPost.category}</span>
                                <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-[#00adef] transition-colors line-clamp-2">
                                    {rPost.title}
                                </h3>
                                <p className="mt-2 text-[#9ca3af] text-sm line-clamp-2">{rPost.excerpt}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
