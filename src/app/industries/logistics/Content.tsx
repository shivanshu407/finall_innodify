"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Brain, MessageSquare, BarChart3, Globe, Smartphone, Cloud,
    Truck, Package, MapPin, Clock, ArrowRight, Route, Warehouse, BarChart
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Brain,
        title: "AI Solutions",
        description: "Route optimization, demand forecasting, and predictive maintenance.",
        features: ["Route optimization", "Demand prediction", "Fleet analytics"],
        href: "/services/ai-solutions",
    },
    {
        icon: BarChart3,
        title: "CRM Development",
        description: "Customer and vendor management for logistics operations.",
        features: ["Vendor management", "Customer tracking", "SLA monitoring"],
        href: "/services/crm-development",
    },
    {
        icon: Cloud,
        title: "SaaS Products",
        description: "TMS, WMS, and fleet management platforms.",
        features: ["Transport management", "Warehouse systems", "Fleet tracking"],
        href: "/services/saas-products",
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "Tracking portals, booking systems, and operations dashboards.",
        features: ["Shipment tracking", "Booking portals", "Analytics dashboards"],
        href: "/services/web-development",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Driver apps, delivery tracking, and warehouse mobile solutions.",
        features: ["Driver apps", "Delivery tracking", "Warehouse scanning"],
        href: "/services/mobile-apps",
    },
    {
        icon: MessageSquare,
        title: "eCommerce",
        description: "Shipping rate calculators, 3PL integrations, and fulfillment systems.",
        features: ["Shipping calculators", "3PL integration", "Last-mile solutions"],
        href: "/services/ecommerce",
    },
];

const stats = [
    { value: "99.2%", label: "On-Time Delivery", icon: Clock },
    { value: "5M+", label: "Packages Tracked", icon: Package },
    { value: "150+", label: "Fleet Vehicles", icon: Truck },
    { value: "24/7", label: "Real-Time Monitoring", icon: BarChart },
];

// Industrial style hero with animated route
function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-slate-900 overflow-hidden pt-24">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }} />
            </div>

            {/* Animated delivery route */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[400px] hidden lg:block">
                <svg viewBox="0 0 500 400" className="w-full h-full">
                    {/* Route path */}
                    <motion.path
                        d="M50,350 C100,350 150,300 200,250 S300,150 350,150 S450,200 480,150"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeDasharray="10,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Waypoints */}
                    {[
                        { x: 50, y: 350, delay: 0.5 },
                        { x: 200, y: 250, delay: 1 },
                        { x: 350, y: 150, delay: 1.5 },
                        { x: 480, y: 150, delay: 2 },
                    ].map((point, i) => (
                        <motion.circle
                            key={i}
                            cx={point.x}
                            cy={point.y}
                            r="8"
                            fill={i === 3 ? "#22c55e" : "#3b82f6"}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: point.delay, type: "spring" }}
                        />
                    ))}
                </svg>
                {/* Animated truck */}
                <motion.div
                    className="absolute w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center"
                    initial={{ x: 50, y: 330 }}
                    animate={{
                        x: [50, 200, 350, 460],
                        y: [330, 230, 130, 130],
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                >
                    <Truck className="w-6 h-6 text-white" />
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
                        className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6"
                    >
                        <Truck className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300 font-medium">Logistics Industry</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        Move faster.{" "}
                        <span className="text-blue-400">Deliver smarter.</span>
                    </h1>

                    <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                        End-to-end logistics technology from route optimization to
                        real-time tracking. Built for scale, designed for efficiency.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8"
                    >
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all"
                        >
                            Optimize Your Operations
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// Dashboard-style services with metrics
function ServicesSection() {
    return (
        <section className="py-24 bg-slate-100">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Operations <span className="text-blue-600">Dashboard</span>
                    </h2>
                    <p className="mt-4 text-slate-600 text-lg">
                        Comprehensive solutions for modern logistics
                    </p>
                </motion.div>

                {/* Dashboard-style grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={service.href}>
                                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                    {/* Header with icon */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                                            <service.icon className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {service.title}
                                            </h3>
                                            <div className="flex items-center gap-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                <span className="text-xs text-green-600">Active</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm mb-4">{service.description}</p>

                                    {/* Features as metrics */}
                                    <div className="grid grid-cols-3 gap-2">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="bg-slate-50 rounded-lg p-2 text-center">
                                                <span className="text-xs text-slate-500 block truncate">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-xs text-slate-400">View Details</span>
                                        <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
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

// KPI metrics bar
function StatsSection() {
    return (
        <section className="py-16 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <stat.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-400">{stat.label}</div>
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
                    <div className="flex justify-center gap-4 mb-6">
                        <Route className="w-8 h-8 text-blue-500" />
                        <Warehouse className="w-8 h-8 text-blue-500" />
                        <Truck className="w-8 h-8 text-blue-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Ready to optimize your <span className="text-blue-600">supply chain</span>?
                    </h2>
                    <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
                        Let's build logistics technology that gives you a competitive edge.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-slate-800 transition-colors"
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

export default function LogisticsContent() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <StatsSection />
            <CTASection />
        </>
    );
}
