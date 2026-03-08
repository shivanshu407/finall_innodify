"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Users, BarChart3, Shield, Zap, ArrowRight, ChevronRight, TrendingUp, Target, Mail } from "lucide-react";
import Link from "next/link";

// Animated dashboard mockup - light version
function DashboardMockup() {
    return (
        <div className="relative w-full max-w-lg">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl"
            >
                {/* Dashboard header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-xs text-gray-500">CRM Dashboard</span>
                </div>

                {/* Dashboard content */}
                <div className="p-4 space-y-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { label: "Leads", value: "2,847", change: "+12%" },
                            { label: "Deals", value: "$1.2M", change: "+8%" },
                            { label: "Tasks", value: "156", change: "-3%" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="bg-gray-50 rounded-lg p-3"
                            >
                                <p className="text-xs text-gray-500">{stat.label}</p>
                                <p className="text-lg font-bold text-[#0e1012]">{stat.value}</p>
                                <p className={`text-xs ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                                    {stat.change}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Chart placeholder */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gray-50 rounded-lg p-4 h-32"
                    >
                        <div className="flex justify-between items-end h-full gap-2">
                            {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                                    className="flex-1 bg-[#00adef] rounded-t"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Recent leads */}
                    <div className="space-y-2">
                        {["John Smith - Enterprise", "Sarah Chen - Startup", "Michael Brown - SMB"].map((lead, i) => (
                            <motion.div
                                key={lead}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5 + i * 0.1 }}
                                className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#00adef]/10 flex items-center justify-center">
                                    <Users className="w-4 h-4 text-[#00adef]" />
                                </div>
                                <span className="text-sm text-gray-700">{lead}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
            >
                +24% This Month
            </motion.div>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(0, 173, 239, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 173, 239, 0.05) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 bg-[#00adef]/10 border border-[#00adef]/20 rounded-full px-4 py-2 mb-6"
                        >
                            <Database className="w-4 h-4 text-[#00adef]" />
                            <span className="text-sm text-[#00adef] font-medium">CRM Development</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0e1012] leading-tight">
                            Customer relationships,{" "}
                            <span className="text-[#00adef] italic">reimagined</span>
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl">
                            AI-powered CRM systems tailored to your workflows. Boost sales efficiency,
                            automate follow-ups, and never miss an opportunity.
                        </p>

                        {/* Features pills */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {["Lead Scoring", "Auto Follow-ups", "Sales Analytics", "AI Insights"].map((feature, i) => (
                                <motion.span
                                    key={feature}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700"
                                >
                                    {feature}
                                </motion.span>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-10"
                        >
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center gap-3 bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0095d0] transition-all shadow-lg shadow-[#00adef]/25"
                            >
                                Build Your CRM
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block"
                    >
                        <DashboardMockup />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Interactive feature tabs
function FeaturesSection() {
    const [activeTab, setActiveTab] = useState(0);

    const features = [
        {
            icon: TrendingUp,
            title: "Lead Management",
            description: "Capture, score, and nurture leads with AI-powered automation. Never let a hot lead go cold.",
            points: ["Automatic lead scoring", "Smart lead routing", "Nurture sequences", "Conversion tracking"],
        },
        {
            icon: Target,
            title: "Sales Pipeline",
            description: "Visualize your entire sales process. Track deals from first contact to closed won.",
            points: ["Drag-and-drop pipeline", "Deal probability", "Revenue forecasting", "Activity tracking"],
        },
        {
            icon: Mail,
            title: "Communication Hub",
            description: "All customer communications in one place. Email, calls, and messages synced automatically.",
            points: ["Email integration", "Call logging", "Template library", "Sequence automation"],
        },
        {
            icon: BarChart3,
            title: "Analytics & Reports",
            description: "Real-time insights into your sales performance. Make data-driven decisions.",
            points: ["Custom dashboards", "Performance metrics", "Team leaderboards", "Export reports"],
        },
    ];

    return (
        <section className="py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        Powerful <span className="text-[#00adef] italic">Features</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                        Everything you need to manage customer relationships at scale
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Tabs / Accordion */}
                    <div className="lg:col-span-2 space-y-4 lg:space-y-2">
                        {features.map((feature, index) => (
                            <div key={feature.title} className="flex flex-col">
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setActiveTab(index)}
                                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all relative z-10 ${activeTab === index
                                            ? "bg-[#00adef] text-white shadow-lg"
                                            : "bg-white text-[#0e1012] hover:bg-gray-100 border border-gray-200"
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${activeTab === index ? "bg-white/20" : "bg-[#00adef]/10"
                                        }`}>
                                        <feature.icon className={`w-6 h-6 ${activeTab === index ? "text-white" : "text-[#00adef]"}`} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold">{feature.title}</p>
                                        <p className={`text-sm ${activeTab === index ? "text-white/70" : "text-gray-500"}`}>
                                            {feature.points.length} features
                                        </p>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${activeTab === index ? "rotate-90" : ""}`} />
                                </motion.button>

                                {/* Mobile Accordion Content */}
                                <AnimatePresence>
                                    {activeTab === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="lg:hidden overflow-hidden"
                                        >
                                            <div className="pt-6 pb-6 px-6 bg-white border border-gray-200 rounded-b-xl -mt-4 relative z-0">
                                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                                <div className="grid gap-4">
                                                    {feature.points.map((point) => (
                                                        <div key={point} className="flex items-start gap-3">
                                                            <div className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-[#00adef]/10 flex items-center justify-center">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-[#00adef]" />
                                                            </div>
                                                            <span className="text-[#0e1012] text-sm leading-snug">{point}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Content (Desktop) */}
                    <div className="hidden lg:block lg:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl p-8 h-full border border-gray-200"
                            >
                                <h3 className="text-2xl font-semibold text-[#0e1012] mb-4">
                                    {features[activeTab].title}
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    {features[activeTab].description}
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {features[activeTab].points.map((point, i) => (
                                        <motion.div
                                            key={point}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-[#00adef]/10 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-[#00adef]" />
                                            </div>
                                            <span className="text-[#0e1012]">{point}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Benefits with icons
function BenefitsSection() {
    const benefits = [
        { icon: Zap, title: "Save Time", description: "Automate repetitive tasks and focus on closing deals" },
        { icon: TrendingUp, title: "Increase Revenue", description: "Convert more leads with intelligent prioritization" },
        { icon: Users, title: "Better Relationships", description: "Never forget a follow-up or important detail" },
        { icon: Shield, title: "Secure & Compliant", description: "Enterprise-grade security for your data" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 mx-auto bg-[#00adef]/10 rounded-2xl flex items-center justify-center mb-4"
                            >
                                <benefit.icon className="w-8 h-8 text-[#00adef]" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-[#0e1012] mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// CTA Section
function CTASection() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        Ready to transform your <span className="text-[#00adef] italic">sales</span>?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Get a custom CRM built for your business workflow
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-[#00adef] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0095d0] transition-colors shadow-lg shadow-[#00adef]/25"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default function CRMServicesContent() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <BenefitsSection />
            <CTASection />
        </>
    );
}
