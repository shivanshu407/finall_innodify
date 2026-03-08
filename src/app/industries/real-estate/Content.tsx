"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Brain, MessageSquare, BarChart3, Globe, Smartphone, Cloud,
    Building2, Home, MapPin, Key, ArrowRight, DollarSign, Camera, Search
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Brain,
        title: "AI Solutions",
        description: "Property valuations, market predictions, and virtual staging with AI.",
        features: ["Price predictions", "Lead scoring", "Virtual staging"],
        href: "/services/ai-solutions",
    },
    {
        icon: BarChart3,
        title: "CRM Development",
        description: "Real estate CRM for agents, brokers, and property managers.",
        features: ["Lead management", "Deal tracking", "Commission management"],
        href: "/services/crm-development",
    },
    {
        icon: Cloud,
        title: "SaaS Products",
        description: "Property management platforms, tenant portals, and MLS systems.",
        features: ["Property management", "Tenant portals", "Listing syndication"],
        href: "/services/saas-products",
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "IDX websites, property search portals, and virtual tour platforms.",
        features: ["IDX integration", "Property search", "Agent websites"],
        href: "/services/web-development",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Property finder apps, agent apps, and smart home integration.",
        features: ["Property search apps", "Agent mobile CRM", "Smart home apps"],
        href: "/services/mobile-apps",
    },
    {
        icon: MessageSquare,
        title: "eCommerce",
        description: "Real estate marketplaces, rental platforms, and booking systems.",
        features: ["Property marketplaces", "Rental booking", "Auction platforms"],
        href: "/services/ecommerce",
    },
];

const properties = [
    { type: "Residential", icon: Home, count: "50K+ listings" },
    { type: "Commercial", icon: Building2, count: "12K+ properties" },
    { type: "Luxury", icon: Key, count: "5K+ homes" },
];

// Luxury real estate style hero with property card
function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#1a1a2e] overflow-hidden pt-24">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Property card floating */}
            <motion.div
                className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="w-80 bg-white rounded-2xl overflow-hidden shadow-2xl">
                    {/* Property image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Building2 className="w-20 h-20 text-amber-400" />
                        </div>
                        <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                        </div>
                        <div className="absolute bottom-4 left-4 flex gap-2">
                            <span className="bg-white/90 px-2 py-1 rounded text-xs">3 Beds</span>
                            <span className="bg-white/90 px-2 py-1 rounded text-xs">2 Baths</span>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                            <MapPin className="w-4 h-4" />
                            <span>Beverly Hills, CA</span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#0e1012] mb-2">Modern Luxury Villa</h3>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-amber-600">$2.5M</span>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>

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
                        className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6"
                    >
                        <Building2 className="w-4 h-4 text-amber-400" />
                        <span className="text-sm text-amber-300 font-medium">Real Estate Industry</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
                        Elevate your{" "}
                        <span className="text-amber-400 italic">property</span>
                        {" "}business
                    </h1>

                    <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                        Luxury digital solutions for real estate professionals.
                        From MLS integrations to virtual tours, we build experiences that sell.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex gap-4"
                    >
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-amber-500 text-[#0e1012] px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-all shadow-lg"
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

// Property listing style services grid
function ServicesSection() {
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
                        Our <span className="text-amber-600 italic">Listings</span> for You
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Premium digital services for the real estate industry
                    </p>
                </motion.div>

                {/* Bento grid inspired by property listings */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link href={service.href}>
                                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500">
                                    {/* Image area */}
                                    <div className="h-40 relative transition-colors duration-500 bg-amber-50 lg:bg-gradient-to-br lg:from-gray-100 lg:to-gray-200 lg:group-hover:bg-amber-500">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <service.icon className="w-16 h-16 transition-colors duration-500 text-amber-500 lg:text-gray-400 lg:group-hover:text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-[#0e1012] mb-2 group-hover:text-amber-600 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {service.features.map((feature, i) => (
                                                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
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

// Stats with property icons
function StatsSection() {
    return (
        <section className="py-20 bg-[#1a1a2e]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {properties.map((prop, index) => (
                        <motion.div
                            key={prop.type}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <motion.div
                                className="w-20 h-20 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                            >
                                <prop.icon className="w-10 h-10 text-amber-400" />
                            </motion.div>
                            <div className="text-2xl font-bold text-white mb-1">{prop.type}</div>
                            <div className="text-amber-300">{prop.count}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Key className="w-12 h-12 text-amber-500 mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        Ready to unlock new <span className="text-amber-600 italic">opportunities</span>?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Let's build digital solutions that help you close more deals.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-amber-500 text-[#0e1012] px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-400 transition-colors shadow-lg"
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

export default function RealEstateContent() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <StatsSection />
            <CTASection />
        </>
    );
}
