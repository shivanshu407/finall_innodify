"use client";

import { motion } from "framer-motion";
import {
    Heart, Brain, MessageSquare, BarChart3, Globe, Smartphone, Cloud,
    Stethoscope, Shield, Clock, Users, ArrowRight, Activity, FileText
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Brain,
        title: "AI Solutions",
        description: "AI-powered diagnostics, patient triage chatbots, and predictive health analytics for better patient outcomes.",
        features: ["Medical image analysis", "Symptom checker bots", "Predictive patient monitoring"],
        href: "/services/ai-solutions",
        color: "#00adef",
    },
    {
        icon: BarChart3,
        title: "CRM Development",
        description: "Patient relationship management systems that streamline appointments, follow-ups, and care coordination.",
        features: ["Patient records management", "Appointment scheduling", "Treatment history tracking"],
        href: "/services/crm-development",
        color: "#10b981",
    },
    {
        icon: Cloud,
        title: "SaaS Products",
        description: "Cloud-based healthcare platforms for telemedicine, EHR systems, and practice management.",
        features: ["Telemedicine platforms", "EHR/EMR systems", "Billing & claims"],
        href: "/services/saas-products",
        color: "#8b5cf6",
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "HIPAA-compliant web portals for patients, doctors, and healthcare administrators.",
        features: ["Patient portals", "Provider dashboards", "Secure data access"],
        href: "/services/web-development",
        color: "#f59e0b",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Health tracking apps, medication reminders, and telehealth mobile solutions.",
        features: ["Health monitoring apps", "Medication reminders", "Doctor-on-demand apps"],
        href: "/services/mobile-apps",
        color: "#ec4899",
    },
    {
        icon: MessageSquare,
        title: "eCommerce",
        description: "Online pharmacies, medical equipment stores, and healthcare product marketplaces.",
        features: ["Online pharmacy", "Medical supplies store", "Subscription services"],
        href: "/services/ecommerce",
        color: "#14b8a6",
    },
];

const useCases = [
    { icon: Stethoscope, title: "Remote Patient Monitoring", description: "IoT-enabled devices with real-time health data sync" },
    { icon: Shield, title: "HIPAA Compliance", description: "End-to-end encryption and secure data handling" },
    { icon: Clock, title: "24/7 Virtual Care", description: "AI chatbots for round-the-clock patient support" },
    { icon: FileText, title: "Digital Health Records", description: "Paperless, accessible patient documentation" },
];

function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden pt-24">
            {/* Animated pulse rings */}
            <div className="absolute right-[-100px] lg:right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] opacity-30 lg:opacity-100 pointer-events-none">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-red-200"
                        initial={{ scale: 0.5, opacity: 0.8 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 3, delay: i * 0.8, repeat: Infinity }}
                    />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 lg:w-32 lg:h-32 bg-red-50 rounded-full flex items-center justify-center">
                        <Heart className="w-10 h-10 lg:w-16 lg:h-16 text-red-500" />
                    </div>
                </div>
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
                        className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-6"
                    >
                        <Activity className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-red-600 font-medium">Healthcare Industry</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-serif text-[#0e1012] leading-tight">
                        Digital solutions for{" "}
                        <span className="text-red-500 italic">better care</span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                        Transform patient experiences with AI diagnostics, telemedicine platforms,
                        and HIPAA-compliant healthcare solutions.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8"
                    >
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all shadow-lg shadow-red-500/25"
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
                        Our Services for <span className="text-red-500 italic">Healthcare</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored for the healthcare industry
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

                                    <h3 className="text-2xl font-semibold text-[#0e1012] mb-3 group-hover:text-[#00adef] transition-colors">
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
                        Healthcare <span className="text-red-500 italic">Use Cases</span>
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
                            className="bg-red-50 rounded-2xl p-6 text-center"
                        >
                            <motion.div
                                className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm"
                                whileHover={{ rotate: 10 }}
                            >
                                <item.icon className="w-7 h-7 text-red-500" />
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
                        Ready to transform <span className="text-red-500 italic">healthcare</span>?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Let's build digital solutions that improve patient outcomes and streamline care delivery.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-red-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-600 transition-colors shadow-lg shadow-red-500/25"
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

export default function HealthcareContent() {
    return (
        <>
            <HeroSection />
            <ServicesGrid />
            <UseCasesSection />
            <CTASection />
        </>
    );
}
