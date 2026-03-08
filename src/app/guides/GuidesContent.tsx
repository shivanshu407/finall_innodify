"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Download, FileText } from "lucide-react";
import Link from "next/link";

// Hero
function GuidesHero() {
    return (
        <section className="py-24 bg-[#0e1012]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="text-[#00adef] italic font-serif text-lg">Resources</span>
                    <h1 className="mt-4 text-4xl md:text-5xl font-serif text-white">
                        Guides & Downloads
                    </h1>
                    <p className="mt-6 text-gray-300">
                        Free guides, checklists, and resources to help you grow your eCommerce business.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Guides Grid
function GuidesGrid() {
    const guides = [
        {
            title: "eCommerce UX Audit Checklist",
            description: "A comprehensive checklist to identify and fix UX issues that hurt your conversion rate.",
            type: "PDF Checklist",
            icon: <FileText className="w-6 h-6" />,
        },
        {
            title: "The Complete Shopify Launch Guide",
            description: "Everything you need to know before launching your Shopify store.",
            type: "PDF Guide",
            icon: <BookOpen className="w-6 h-6" />,
        },
        {
            title: "Magento 2 Performance Optimization Handbook",
            description: "Expert tips to speed up your Magento store and improve Core Web Vitals.",
            type: "PDF Guide",
            icon: <BookOpen className="w-6 h-6" />,
        },
        {
            title: "2024 eCommerce Calendar",
            description: "Key dates, holidays, and sales events to plan your marketing around.",
            type: "PDF Calendar",
            icon: <FileText className="w-6 h-6" />,
        },
        {
            title: "Headless Commerce Decision Framework",
            description: "Is headless right for your business? This framework helps you decide.",
            type: "PDF Framework",
            icon: <BookOpen className="w-6 h-6" />,
        },
        {
            title: "eCommerce SEO Starter Kit",
            description: "Technical SEO foundations for online stores, with actionable steps.",
            type: "PDF Kit",
            icon: <FileText className="w-6 h-6" />,
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guides.map((guide, index) => (
                        <motion.div
                            key={guide.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#f8f8f8] rounded-xl p-6 hover:shadow-xl transition-shadow group cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#00adef]/10 flex items-center justify-center text-[#00adef] mb-4">
                                {guide.icon}
                            </div>
                            <span className="text-xs font-medium text-[#00adef] uppercase tracking-wider">
                                {guide.type}
                            </span>
                            <h3 className="mt-2 text-lg font-semibold text-[#0e1012] group-hover:text-[#00adef] transition-colors">
                                {guide.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">{guide.description}</p>
                            <button className="mt-4 flex items-center gap-2 text-sm font-medium text-[#0e1012] group-hover:text-[#00adef]">
                                <Download size={16} />
                                Download Free
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// CTA
function GuidesCTA() {
    return (
        <section className="py-24 bg-[#f8f8f8]">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012]">
                        Need personalized advice?
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Our experts can help you navigate the eCommerce landscape. Book a free consultation.
                    </p>
                    <Link
                        href="/contact-us"
                        className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#00adef] text-[#0e1012] font-semibold rounded-full hover:bg-[#00adef]/90 transition-colors"
                    >
                        Schedule a Call
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default function GuidesContent() {
    return (
        <>
            <GuidesHero />
            <GuidesGrid />
            <GuidesCTA />
        </>
    );
}
