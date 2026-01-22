"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Store, Globe } from "lucide-react";
import Link from "next/link";

// Hero
function CaseStudiesHero() {
    return (
        <section className="py-24 bg-[#0e1012]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="text-[#00adef] italic font-serif text-lg">Case Studies</span>
                    <h1 className="mt-4 text-4xl md:text-5xl font-serif text-white">
                        Success Stories
                    </h1>
                    <p className="mt-6 text-gray-300">
                        Real results from real clients. See how we've helped brands grow their eCommerce business.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Case Studies Grid
function CaseStudiesGrid() {
    const caseStudies = [
        {
            title: "Cloud-Based Transformation of Real Estate Operations",
            client: "Mahalaxmi Group",
            clientColor: "#00adef",
            tags: ["Cloud CRM", "Web App"],
            stat: "30%",
            statLabel: "Productivity",
            description: "How we helped Mahalaxmi Real Estate Group achieve 100% data security and boost productivity by 30% with a custom cloud-native CRM.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
            link: "/case-studies/mahalaxmi-real-estate"
        },
        {
            title: "Top Jordanian Cellular Network Provider Umniah Increases Site Speed by 224%",
            client: "Umniah",
            clientColor: "#7C3AED",
            tags: ["B2C", "Magento", "Performance"],
            stat: "224%",
            statLabel: "Speed Increase",
            description: "Performance optimization that transformed mobile shopping experience for millions of users.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
        },
        {
            title: "Pure Daily Care Case Study: Headless Commerce for Beauty & Cosmetics",
            client: "Pure Daily Care",
            clientColor: "#4A90A4",
            tags: ["B2C", "Headless", "Shopify"],
            stat: "45%",
            statLabel: "Conversion Increase",
            description: "Building a lightning-fast headless storefront for a fast-growing beauty brand.",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
        },
        {
            title: "Enterprise B2B Portal for Industrial Equipment",
            client: "TechEquip",
            clientColor: "#059669",
            tags: ["B2B", "Magento"],
            stat: "50K+",
            statLabel: "SKUs Managed",
            description: "Custom B2B portal with complex pricing rules, quote management, and ERP integration.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
        },
        {
            title: "Fashion Brand Migration from Magento 1 to Shopify Plus",
            client: "StyleHouse",
            clientColor: "#EC4899",
            tags: ["Migration", "Shopify Plus"],
            stat: "0",
            statLabel: "Downtime",
            description: "Seamless platform migration preserving SEO rankings and customer data integrity.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        },
        {
            title: "Hyvä Theme Implementation for Multi-Brand Retailer",
            client: "RetailGroup",
            clientColor: "#F59E0B",
            tags: ["Magento", "Hyvä", "Performance"],
            stat: "3x",
            statLabel: "Faster Load Time",
            description: "Migrating a complex multi-brand Magento store to Hyvä for dramatic performance gains.",
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <Link key={study.title} href={study.link || "#"}>
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#f8f8f8] rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow block h-full"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${study.image})` }}
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span style={{ color: study.clientColor }} className="font-bold text-lg">
                                            {study.client}
                                        </span>
                                        <div className="flex gap-2">
                                            {study.tags.slice(0, 2).map((tag) => (
                                                <span key={tag} className="px-3 py-1 text-xs font-medium bg-white rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-semibold text-[#0e1012] group-hover:text-[#00adef] transition-colors line-clamp-2">
                                        {study.title}
                                    </h2>
                                    <p className="mt-3 text-gray-600 text-sm line-clamp-2">{study.description}</p>
                                    <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                        <div>
                                            <span className="text-2xl font-bold text-[#00adef]">{study.stat}</span>
                                            <span className="ml-2 text-sm text-gray-500">{study.statLabel}</span>
                                        </div>
                                        <span className="flex items-center gap-1 text-sm font-medium text-[#0e1012] group-hover:text-[#00adef]">
                                            Read Case Study
                                            <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

// CTA
function CaseStudiesCTA() {
    return (
        <section className="py-24 bg-[#0e1012]">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        Want similar <span className="text-[#00adef] italic">results</span>?
                    </h2>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                        Let's discuss how we can help your business achieve its eCommerce goals.
                    </p>
                    <Link
                        href="/contact-us"
                        className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#00adef] text-[#0e1012] font-semibold rounded-full hover:bg-[#00adef]/90 transition-colors"
                    >
                        Start Your Success Story
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default function CaseStudiesPage() {
    return (
        <>
            <CaseStudiesHero />
            <CaseStudiesGrid />
            <CaseStudiesCTA />
        </>
    );
}
