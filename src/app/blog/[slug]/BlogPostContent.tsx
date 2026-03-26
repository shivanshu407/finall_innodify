"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";
import BlogContentRenderer, { extractHeadings } from "@/components/BlogContentRenderer";
import BlogTableOfContents from "@/components/BlogTableOfContents";

type Props = {
    post: BlogPost;
    recommendedPosts: BlogPost[];
};

export default function BlogPostContent({ post, recommendedPosts }: Props) {
    const headings = extractHeadings(post.content);

    return (
        <section className="relative min-h-screen bg-[#0e1012] py-24 overflow-hidden selection:bg-[#00adef]/20">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0e1012] -z-10" />
            <div className="absolute inset-0 opacity-20 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00adef]/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
                    
                    {/* Left Sidebar - Sticky TOC */}
                    <BlogTableOfContents title={post.title} headings={headings} />

                    {/* Right Content */}
                    <div className="flex-1 min-w-0">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#00adef] font-medium transition-colors mb-8 group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to the Blogs
                        </Link>

                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00adef]/10 text-[#00adef] text-sm font-semibold mb-6 tracking-wide">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 mb-10 py-6 border-y border-[#2a2f36]">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00adef] to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                        {post.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-[#e5e7eb] text-sm font-bold">{post.author}</p>
                                        <p className="text-[#6b7280] text-xs">Author</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 text-sm text-[#9ca3af] font-medium">
                                    <span className="flex items-center gap-2">
                                        <Calendar size={18} className="text-[#00adef]" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock size={18} className="text-[#00adef]" />
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>

                            <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12 bg-[#15181c] border border-[#2a2f36] shadow-sm">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                            </div>

                            <BlogContentRenderer content={post.content} />

                            <div className="mt-16 pt-12 border-t border-[#2a2f36] flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-[#9ca3af] font-medium">Share this article:</span>
                                    <div className="flex gap-2">
                                        <button className="p-3 rounded-full bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]"><Facebook size={18} /></button>
                                        <button className="p-3 rounded-full bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]"><Twitter size={18} /></button>
                                        <button className="p-3 rounded-full bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]"><Linkedin size={18} /></button>
                                        <button className="p-3 rounded-full bg-[#15181c] text-[#9ca3af] hover:text-[#00adef] hover:bg-[#00adef]/10 transition-all border border-[#2a2f36]"><Share2 size={18} /></button>
                                    </div>
                                </div>
                                <Link href="/blog" className="inline-flex items-center gap-2 text-[#00adef] font-semibold hover:gap-3 transition-all">
                                    Read More Articles
                                    <ArrowLeft size={20} className="rotate-180" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-32 pt-20 border-t border-[#2a2f36]">
                    <h2 className="text-3xl font-serif text-white mb-12">Recommended for you</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {recommendedPosts.map((rPost, idx) => (
                            <Link key={idx} href={`/blog/${rPost.slug}`} className="group">
                                <div className="aspect-video rounded-xl overflow-hidden mb-5 bg-[#15181c] shadow-sm border border-[#2a2f36]">
                                    <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <span className="text-xs font-bold tracking-wide uppercase text-[#00adef]">{rPost.category}</span>
                                <h3 className="mt-2 text-lg font-bold text-white group-hover:text-[#00adef] transition-colors line-clamp-2 leading-snug">{rPost.title}</h3>
                                <p className="mt-3 text-[#9ca3af] text-sm line-clamp-2 leading-relaxed">{rPost.excerpt}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
