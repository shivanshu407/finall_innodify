"use client";

import { motion } from "framer-motion";
import {
    Brain, MessageSquare, BarChart3, Globe, Smartphone, Cloud,
    Wallet, TrendingUp, Shield, Lock, ArrowRight, CreditCard, PiggyBank, LineChart
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Brain,
        title: "AI Solutions",
        description: "Fraud detection, credit scoring algorithms, and AI-powered financial advisors for smarter banking.",
        features: ["Fraud detection systems", "Credit risk assessment", "Robo-advisors"],
        href: "/services/ai-solutions",
        color: "#00adef",
    },
    {
        icon: BarChart3,
        title: "CRM Development",
        description: "Customer relationship management for banks, investment firms, and insurance companies.",
        features: ["Client portfolio tracking", "Financial advisor CRM", "Loan management"],
        href: "/services/crm-development",
        color: "#10b981",
    },
    {
        icon: Cloud,
        title: "SaaS Products",
        description: "Cloud-based trading platforms, accounting software, and financial management tools.",
        features: ["Trading platforms", "Accounting SaaS", "Investment trackers"],
        href: "/services/saas-products",
        color: "#8b5cf6",
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "Secure online banking portals, investment dashboards, and financial calculators.",
        features: ["Online banking", "Investment portals", "Financial dashboards"],
        href: "/services/web-development",
        color: "#f59e0b",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Mobile banking, payment apps, and cryptocurrency wallets with biometric security.",
        features: ["Mobile banking apps", "Payment wallets", "Crypto apps"],
        href: "/services/mobile-apps",
        color: "#ec4899",
    },
    {
        icon: MessageSquare,
        title: "eCommerce",
        description: "Payment gateways, financial product marketplaces, and subscription billing systems.",
        features: ["Payment processing", "Insurance marketplaces", "Subscription billing"],
        href: "/services/ecommerce",
        color: "#14b8a6",
    },
];

const useCases = [
    { icon: Shield, title: "Fraud Prevention", description: "Real-time transaction monitoring and AI anomaly detection" },
    { icon: Lock, title: "Bank-Grade Security", description: "PCI-DSS compliant with multi-factor authentication" },
    { icon: CreditCard, title: "Digital Payments", description: "Seamless payment processing and wallet integration" },
    { icon: LineChart, title: "Real-time Analytics", description: "Live market data and portfolio performance tracking" },
];

function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden pt-24">
            {/* Animated chart lines */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[400px]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                    <motion.path
                        d="M0,250 Q100,200 150,220 T250,150 T350,100 T400,50"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M0,280 Q80,250 120,260 T200,200 T300,180 T400,120"
                        fill="none"
                        stroke="#00adef"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                    />
                </svg>
                <motion.div
                    className="absolute top-1/4 right-1/4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                >
                    <TrendingUp className="w-8 h-8 text-green-500" />
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
                        className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6"
                    >
                        <Wallet className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600 font-medium">Fintech Industry</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-serif text-[#0e1012] leading-tight">
                        Powering the future of{" "}
                        <span className="text-green-500 italic">finance</span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                        Build secure, scalable financial technology solutions with AI-driven insights,
                        real-time analytics, and bank-grade security.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8"
                    >
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/25"
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
                        Our Services for <span className="text-green-500 italic">Fintech</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                        Enterprise-grade financial technology solutions built for scale and security
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

                                    <h3 className="text-2xl font-semibold text-[#0e1012] mb-3 group-hover:text-green-500 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6">{service.description}</p>

                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                className="flex items-center gap-2 text-sm text-gray-500"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <motion.div
                                        className="mt-6 flex items-center gap-2 text-sm font-medium"
                                        style={{ color: service.color }}
                                    >
                                        Learn more
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </motion.div>
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
                        Fintech <span className="text-green-500 italic">Use Cases</span>
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
                            className="bg-green-50 rounded-2xl p-6 text-center"
                        >
                            <motion.div
                                className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm"
                                whileHover={{ rotate: 10 }}
                            >
                                <item.icon className="w-7 h-7 text-green-500" />
                            </motion.div>
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
                        Ready to disrupt <span className="text-green-500 italic">finance</span>?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Let's build fintech solutions that transform how people manage money.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-500/25"
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

export default function FintechContent() {
    return (
        <>
            <HeroSection />
            <ServicesGrid />
            <UseCasesSection />
            <CTASection />
        </>
    );
}
