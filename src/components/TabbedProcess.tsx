"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Lightbulb, PenTool, Code, Rocket, BarChart3, ArrowRight } from "lucide-react";

const steps = [
    {
        id: "discovery",
        icon: <Search className="w-6 h-6" />,
        title: "Discovery & Strategy",
        subtitle: "Understanding your vision",
        description: "We dive deep into your business goals, target audience, and market landscape. This foundational phase ensures every decision is data-backed and aligned with your objectives.",
        points: ["Stakeholder Interviews", "Market Analysis", "Technical Audit", "Roadmap Planning"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
    },
    {
        id: "design",
        icon: <PenTool className="w-6 h-6" />,
        title: "UX/UI Design",
        subtitle: "Crafting the experience",
        description: "Our designers translate strategy into stunning, intuitive interfaces. We focus on creating user-centric journeys that drive engagement and conversion.",
        points: ["Wireframing", "Visual Design System", "Interactive Prototypes", "User Testing"],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
        id: "integrations",
        icon: <Code className="w-6 h-6" />,
        title: "Backend Integrations",
        subtitle: "Connecting essential services",
        description: "We seamlessly integrate your store with the services that power your business. From secure payment processing to efficient logistics, we ensure everything works together flawlessly.",
        points: ["Payment Gateway Integration", "Delivery Partner Integration", "ERP & Inventory Systems", "Third-party APIs"],
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80"
    },
    {
        id: "launch",
        icon: <Rocket className="w-6 h-6" />,
        title: "Launch & Growth",
        subtitle: "Going live and beyond",
        description: "We ensure a smooth deployment and provide ongoing support. But we don't stop there – we help you optimize and scale your digital presence.",
        points: ["Deployment Strategy", "Analytics Setup", "Post-Launch Support", "Growth Marketing"],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    }
];

export function TabbedProcess() {
    const [activeTab, setActiveTab] = useState(steps[0].id);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f8f8] -skew-x-12 transform translate-x-24 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary italic font-serif text-lg">Our Process</span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-serif text-dark">
                        From concept to <span className="text-primary italic">reality</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Column - Tabs (Desktop Only) */}
                    <div className="hidden lg:block lg:col-span-4 space-y-4">
                        {steps.map((step) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveTab(step.id)}
                                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border border-transparent group ${activeTab === step.id
                                    ? "bg-dark text-white shadow-xl scale-105"
                                    : "bg-white hover:bg-gray-50 hover:border-gray-200 text-dark"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeTab === step.id ? "bg-primary text-dark" : "bg-gray-100 text-gray-500 group-hover:bg-primary/20 group-hover:text-primary"
                                        }`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${activeTab === step.id ? "text-white" : "text-dark"}`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-sm mt-1 ${activeTab === step.id ? "text-gray-400" : "text-gray-500"}`}>
                                            {step.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-8 bg-[#f8f8f8] rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[500px] flex items-center">
                        {/* Mobile Navigation (Numbered Buttons) */}
                        <div className="absolute top-6 right-6 z-20 flex gap-2 lg:hidden">
                            {steps.map((step, index) => (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveTab(step.id)}
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${activeTab === step.id
                                        ? "bg-primary text-white shadow-lg scale-110"
                                        : "bg-white/80 text-gray-600 hover:bg-white"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <div className="absolute inset-0 z-0">
                            <AnimatePresence mode="wait">
                                {steps.map((step) => (
                                    activeTab === step.id && (
                                        <motion.img
                                            key={`img-${step.id}`}
                                            src={step.image}
                                            alt={step.title}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 0.1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-full h-full object-cover"
                                        />
                                    )
                                ))}
                            </AnimatePresence>
                        </div>

                        <div className="relative z-10 w-full pt-8 lg:pt-0">
                            <AnimatePresence mode="wait">
                                {steps.map((step) => (
                                    activeTab === step.id && (
                                        <motion.div
                                            key={`content-${step.id}`}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-dark mb-8 shadow-lg rotate-3 hover:rotate-6 transition-transform">
                                                {step.icon}
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                                                {step.title}
                                            </h3>

                                            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                                                {step.description}
                                            </p>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                {step.points.map((point, i) => (
                                                    <motion.div
                                                        key={point}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                                        className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                                        <span className="font-medium text-dark">{point}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
