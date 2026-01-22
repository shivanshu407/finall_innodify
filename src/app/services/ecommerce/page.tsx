"use client";

import { motion } from "framer-motion";
import { ArrowRight, Store, Code, Zap, BarChart3, Search, Shield, Palette, RefreshCw, Users, Mail, Target, Globe, CreditCard, Truck } from "lucide-react";
import Link from "next/link";
import { TabbedProcess } from "@/components/TabbedProcess";

// Hero Section
function ServicesHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center bg-[#0e1012] overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute w-[600px] h-[600px] rounded-full bg-[#00adef] blur-3xl -top-1/2 left-1/4" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="text-[#00adef] italic font-serif text-lg">eCommerce Development</span>
                    <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                        Build & scale your <span className="text-[#00adef] italic">online store</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                        From Shopify to Magento and headless solutions, we build high-converting
                        eCommerce experiences that drive revenue and growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Service Categories
function ServiceCategoriesSection() {
    const categories = [
        {
            title: "Platform Development",
            description: "Build robust stores on Shopify, Magento, or headless architectures",
            services: [
                { name: "Shopify Development", href: "/platforms/shopify", icon: <Store size={20} /> },
                { name: "Magento Development", href: "/platforms/magento", icon: <Store size={20} /> },
                { name: "Headless Commerce", href: "/services/headless-commerce-development-services", icon: <Code size={20} /> },
                { name: "Hyvä Theme Development", href: "/services/hyva-theme-development", icon: <Zap size={20} /> },
            ],
        },
        {
            title: "Optimization & Performance",
            description: "Speed up your store and maximize conversions",
            services: [
                { name: "Speed Optimization", href: "#", icon: <Zap size={20} /> },
                { name: "Conversion Rate Optimization", href: "#", icon: <BarChart3 size={20} /> },
                { name: "SEO Services", href: "#", icon: <Search size={20} /> },
                { name: "Performance Audit", href: "#", icon: <Target size={20} /> },
            ],
        },
        {
            title: "Migration & Maintenance",
            description: "Seamless platform transitions and ongoing support",
            services: [
                { name: "Platform Migration", href: "#", icon: <RefreshCw size={20} /> },
                { name: "Magento to Shopify", href: "#", icon: <RefreshCw size={20} /> },
                { name: "Support & Maintenance", href: "#", icon: <Shield size={20} /> },
                { name: "Security Audits", href: "#", icon: <Shield size={20} /> },
            ],
        },
        {
            title: "Design & Marketing",
            description: "Craft beautiful experiences and drive traffic",
            services: [
                { name: "UI/UX Design", href: "#", icon: <Palette size={20} /> },
                { name: "Email Marketing", href: "#", icon: <Mail size={20} /> },
                { name: "PPC Advertising", href: "#", icon: <BarChart3 size={20} /> },
                { name: "Content Marketing", href: "#", icon: <Globe size={20} /> },
            ],
        },
        {
            title: "Integrations",
            description: "Connect your store with payment & logistics partners",
            services: [
                { name: "Payment Gateway Integration", href: "#", icon: <CreditCard size={20} /> },
                { name: "Delivery Partner Integration", href: "#", icon: <Truck size={20} /> },
                { name: "ERP & Inventory Systems", href: "#", icon: <RefreshCw size={20} /> },
                { name: "Third-party API Integration", href: "#", icon: <Code size={20} /> },
            ],
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="bg-[#f8f8f8] rounded-2xl p-8"
                        >
                            <h2 className="text-2xl font-bold text-[#0e1012]">{category.title}</h2>
                            <p className="mt-2 text-gray-600">{category.description}</p>

                            <div className="mt-6 space-y-3">
                                {category.services.map((service) => (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#00adef]/10 flex items-center justify-center text-[#00adef]">
                                                {service.icon}
                                            </div>
                                            <span className="font-medium text-[#0e1012] group-hover:text-[#00adef] transition-colors">
                                                {service.name}
                                            </span>
                                        </div>
                                        <ArrowRight size={18} className="text-gray-400 group-hover:text-[#00adef] group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}



// CTA
function ServicesCTA() {
    return (
        <section className="py-24 bg-[#f8f8f8]">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012]">
                        Not sure where to start?
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Let's chat about your project. We'll help you identify the right solutions for your business.
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

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServiceCategoriesSection />
            <TabbedProcess />
            <ServicesCTA />
        </>
    );
}
