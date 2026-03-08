"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Brain, MessageSquare, BarChart3, Globe, Smartphone, Cloud,
    GraduationCap, BookOpen, Users, PlayCircle, ArrowRight, Award, Lightbulb, PenTool
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Brain,
        title: "AI Solutions",
        description: "Personalized learning paths, automated grading, and intelligent tutoring systems.",
        features: ["Adaptive learning AI", "Essay grading", "Student analytics"],
        href: "/services/ai-solutions",
    },
    {
        icon: BarChart3,
        title: "CRM Development",
        description: "Student lifecycle management from enrollment to alumni relations.",
        features: ["Enrollment tracking", "Parent communication", "Alumni CRM"],
        href: "/services/crm-development",
    },
    {
        icon: Cloud,
        title: "SaaS Products",
        description: "Learning management systems, virtual classrooms, and assessment platforms.",
        features: ["LMS platforms", "Virtual classrooms", "Exam systems"],
        href: "/services/saas-products",
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "School portals, course catalogs, and online learning platforms.",
        features: ["School websites", "Course portals", "Student dashboards"],
        href: "/services/web-development",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Educational apps, flashcard systems, and campus navigation.",
        features: ["Learning apps", "Campus apps", "Parent apps"],
        href: "/services/mobile-apps",
    },
    {
        icon: MessageSquare,
        title: "eCommerce",
        description: "Course marketplaces, textbook stores, and subscription learning.",
        features: ["Course sales", "Material stores", "Subscriptions"],
        href: "/services/ecommerce",
    },
];

const subjects = ["Mathematics", "Science", "Languages", "Arts", "Technology", "Business"];

// Notebook-style hero with paper texture
function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24" style={{
            background: "linear-gradient(to bottom, #fef3c7 0%, #fef9c3 50%, #ffffff 100%)"
        }}>
            {/* Notebook lines */}
            <div className="absolute inset-0 opacity-20">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-full h-px bg-blue-300"
                        style={{ top: `${(i + 1) * 5}%` }}
                    />
                ))}
                <div className="absolute left-[10%] top-0 bottom-0 w-px bg-red-300" />
            </div>

            {/* Floating educational elements */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
                <motion.div
                    className="relative w-64 h-64"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                >
                    <motion.div
                        className="absolute w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center shadow-xl"
                        style={{ top: "0%", left: "50%" }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <BookOpen className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.div
                        className="absolute w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center shadow-xl"
                        style={{ top: "40%", left: "10%" }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                    >
                        <Award className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.div
                        className="absolute w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center shadow-xl"
                        style={{ top: "70%", left: "60%" }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
                    >
                        <Lightbulb className="w-7 h-7 text-white" />
                    </motion.div>
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
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-blue-100 border-2 border-blue-300 rounded-full px-4 py-2 mb-6"
                    >
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-blue-700 font-semibold">Education Industry</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-serif text-[#0e1012] leading-tight">
                        Empowering{" "}
                        <span className="text-blue-600 italic underline decoration-wavy decoration-blue-300">learners</span>
                        {" "}everywhere
                    </h1>

                    <p className="mt-6 text-xl text-gray-700 leading-relaxed font-light">
                        Transform education with engaging digital experiences,
                        AI-powered personalization, and accessible learning platforms.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex gap-4"
                    >
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
                        >
                            Start Learning Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// Interactive subject tabs with course card style
function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        Digital <span className="text-blue-600 italic">Curriculum</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Click each service to explore our education solutions
                    </p>
                </motion.div>

                {/* Subject tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {services.map((service, i) => (
                        <motion.button
                            key={service.title}
                            onClick={() => setActiveIndex(i)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${activeIndex === i
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {service.title}
                        </motion.button>
                    ))}
                </div>

                {/* Course card style content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    {(() => {
                                        const Icon = services[activeIndex].icon;
                                        return <Icon className="w-10 h-10 text-white" />;
                                    })()}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold text-[#0e1012] mb-4">
                                        {services[activeIndex].title}
                                    </h3>
                                    <p className="text-gray-600 text-lg mb-6">
                                        {services[activeIndex].description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                        {services[activeIndex].features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm"
                                            >
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <Link
                                        href={services[activeIndex].href}
                                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
                                    >
                                        Explore this service
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

// Learning stats with progress bars
function StatsSection() {
    const stats = [
        { label: "Students Reached", value: "1M+", progress: 85 },
        { label: "Courses Delivered", value: "500+", progress: 70 },
        { label: "Completion Rate", value: "94%", progress: 94 },
        { label: "Partner Schools", value: "200+", progress: 60 },
    ];

    return (
        <section className="py-20 bg-blue-600">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-blue-100 mb-3">{stat.label}</div>
                            <div className="h-2 bg-blue-500 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-white rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${stat.progress}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <PenTool className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        Let's write the future of <span className="text-blue-600 italic">education</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Partner with us to create learning experiences that inspire and empower.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
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

export default function EducationContent() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <StatsSection />
            <CTASection />
        </>
    );
}
