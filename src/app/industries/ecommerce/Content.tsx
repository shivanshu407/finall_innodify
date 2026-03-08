"use client";

import { motion } from "framer-motion";
import {
    Brain, MessageSquare, BarChart3, Globe, Smartphone, Cloud,
    ShoppingCart, Package, Truck, CreditCard, ArrowRight, Store, Tags, BarChart
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Brain,
        title: "AI Solutions",
        description: "Product recommendations, demand forecasting, and AI-powered customer service for higher conversions.",
        features: ["Smart recommendations", "Inventory prediction", "Visual search"],
        href: "/services/ai-solutions",
        color: "#00adef",
    },
    {
        icon: BarChart3,
        title: "CRM Development",
        description: "Customer data platforms to track purchases, loyalty programs, and personalized marketing.",
        features: ["Customer segmentation", "Loyalty management", "Purchase analytics"],
        href: "/services/crm-development",
        color: "#10b981",
    },
    {
        icon: Cloud,
        title: "SaaS Products",
        description: "Multi-vendor marketplaces, inventory management, and order fulfillment systems.",
        features: ["Marketplace platforms", "Inventory SaaS", "Order management"],
        href: "/services/saas-products",
        color: "#8b5cf6",
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "High-converting online stores with seamless checkout and fast page loads.",
        features: ["Custom storefronts", "Headless commerce", "Performance optimization"],
        href: "/services/web-development",
        color: "#f59e0b",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native shopping apps with AR try-on, push notifications, and one-tap checkout.",
        features: ["Shopping apps", "AR product preview", "Mobile payments"],
        href: "/services/mobile-apps",
        color: "#ec4899",
    },
    {
        icon: MessageSquare,
        title: "eCommerce",
        description: "Complete eCommerce solutions from Shopify to Magento to custom platforms.",
        features: ["Shopify development", "Magento solutions", "Custom platforms"],
        href: "/services/ecommerce",
        color: "#14b8a6",
    },
];

const useCases = [
    { icon: Store, title: "Multi-Channel Retail", description: "Unified commerce across web, mobile, and in-store" },
    { icon: Tags, title: "Dynamic Pricing", description: "AI-driven pricing optimization for maximum margins" },
    { icon: Truck, title: "Fulfillment Automation", description: "Streamlined order processing and delivery tracking" },
    { icon: BarChart, title: "Sales Analytics", description: "Real-time insights into revenue and customer behavior" },
];

function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden pt-24">
            {/* Animated shopping cart */}
            <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2">
                <motion.div
                    className="relative"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="w-48 h-48 bg-orange-100 rounded-3xl flex items-center justify-center">
                        <ShoppingCart className="w-24 h-24 text-orange-500" />
                    </div>
                    {/* Floating products */}
                    {[
                        { x: -60, y: -40, delay: 0.5 },
                        { x: 70, y: -20, delay: 0.7 },
                        { x: 50, y: 60, delay: 0.9 },
                    ].map((pos, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center"
                            style={{ left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)` }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: pos.delay, type: "spring" }}
                        >
                            <Package className="w-6 h-6 text-orange-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6"
                    >
                        <ShoppingCart className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-orange-600 font-medium">eCommerce Industry</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-serif text-[#0e1012] leading-tight">
                        Sell smarter,{" "}
                        <span className="text-orange-500 italic">scale faster</span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                        Build high-converting online stores with AI recommendations,
                        seamless checkout, and omnichannel experiences.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8"
                    >
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25"
                        >
                            Discuss Your Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function ServicesGrid() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        Our Services for <span className="text-orange-500 italic">eCommerce</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                        End-to-end solutions to launch and grow your online business
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group"
                        >
                            <Link href={service.href}>
                                <div className="bg-white rounded-3xl p-8 h-full border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500">
                                    <motion.div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                                        style={{ backgroundColor: `${service.color}15` }}
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                    >
                                        <service.icon className="w-8 h-8" style={{ color: service.color }} />
                                    </motion.div>

                                    <h3 className="text-2xl font-semibold text-[#0e1012] mb-3 group-hover:text-orange-500 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6">{service.description}</p>

                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: service.color }}>
                                        Learn more
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function UseCasesSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        eCommerce <span className="text-orange-500 italic">Use Cases</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-orange-50 rounded-2xl p-6 text-center"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <item.icon className="w-7 h-7 text-orange-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0e1012] mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        Ready to grow your <span className="text-orange-500 italic">store</span>?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Let's build an eCommerce experience your customers will love.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default function EcommerceIndustryContent() {
    return (
        <>
            <HeroSection />
            <ServicesGrid />
            <UseCasesSection />
            <CTASection />
        </>
    );
}
