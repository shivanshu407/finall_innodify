"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Layers, Lock, Gauge, RefreshCw, Users, ArrowRight, Check, Rocket } from "lucide-react";
import Link from "next/link";

// Floating tech stack icons - light version
function FloatingIcons() {
    const icons = ["React", "Node", "AWS", "Docker", "K8s", "Postgres"];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {icons.map((icon, i) => (
                <motion.div
                    key={icon}
                    className="absolute bg-white backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 shadow-sm"
                    style={{
                        top: `${20 + (i * 12)}%`,
                        right: `${5 + (i % 3) * 10}%`,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        delay: i * 0.5,
                        repeat: Infinity,
                    }}
                >
                    {icon}
                </motion.div>
            ))}
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            <FloatingIcons />

            {/* Subtle gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00adef]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00adef]/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[#00adef]/10 border border-[#00adef]/20 rounded-full px-4 py-2 mb-6">
                            <Rocket className="w-4 h-4 text-[#00adef]" />
                            <span className="text-sm text-[#00adef] font-medium">SaaS Development</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0e1012] leading-tight">
                            Build products
                            <br />
                            <span className="text-[#00adef] italic">that scale</span>
                        </h1>

                        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl">
                            From MVP to enterprise. We build cloud-native SaaS applications that handle
                            millions of users while you focus on growing your business.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center gap-3 bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0095d0] transition-all shadow-lg shadow-[#00adef]/25"
                            >
                                Launch Your Product
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Features grid section (redesigned from horizontal scroll)
function FeaturesGrid() {
    const features = [
        {
            icon: Cloud,
            title: "Cloud-Native",
            description: "Built for the cloud from day one with auto-scaling and high availability.",
        },
        {
            icon: Layers,
            title: "Multi-Tenant",
            description: "Efficient multi-tenant architecture that scales with your customer base.",
        },
        {
            icon: Lock,
            title: "Secure",
            description: "Enterprise-grade security with SOC 2, GDPR, and HIPAA compliance.",
        },
        {
            icon: Gauge,
            title: "Performant",
            description: "Optimized for speed with sub-100ms response times globally.",
        },
        {
            icon: RefreshCw,
            title: "CI/CD Ready",
            description: "Automated pipelines for continuous integration and deployment.",
        },
        {
            icon: Users,
            title: "User Management",
            description: "Complete auth system with roles, permissions, and team features.",
        },
    ];

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
                        Built for <span className="text-[#00adef] italic">scale</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                        Every SaaS product we build is designed to grow with you
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-[#00adef]/30 hover:shadow-xl transition-all duration-300">
                                <motion.div
                                    className="w-14 h-14 rounded-xl bg-[#00adef]/10 flex items-center justify-center mb-6"
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                >
                                    <feature.icon className="w-7 h-7 text-[#00adef]" />
                                </motion.div>
                                <h3 className="text-xl font-semibold text-[#0e1012] mb-3 group-hover:text-[#00adef] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Tech stack section
function TechStackSection() {
    const stacks = [
        { category: "Frontend", techs: ["React", "Next.js", "Vue", "TypeScript", "Tailwind"] },
        { category: "Backend", techs: ["Node.js", "Python", "Go", "GraphQL", "REST"] },
        { category: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
        { category: "Cloud", techs: ["AWS", "GCP", "Azure", "Vercel", "Docker"] },
    ];

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
                        Modern <span className="text-[#00adef] italic">Tech Stack</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stacks.map((stack, index) => (
                        <motion.div
                            key={stack.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
                        >
                            <h3 className="text-lg font-semibold text-[#00adef] mb-4">{stack.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {stack.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Pricing-style process
function ProcessSection() {
    const phases = [
        {
            phase: "01",
            title: "Discovery & Planning",
            duration: "2-3 weeks",
            items: ["Requirements analysis", "Technical architecture", "UI/UX wireframes", "Project roadmap"],
        },
        {
            phase: "02",
            title: "MVP Development",
            duration: "8-12 weeks",
            items: ["Core feature development", "Database design", "API implementation", "Authentication"],
        },
        {
            phase: "03",
            title: "Launch & Scale",
            duration: "Ongoing",
            items: ["Production deployment", "Performance monitoring", "Feature iterations", "Scale infrastructure"],
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
                        From idea to <span className="text-[#00adef] italic">launch</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={phase.phase}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative bg-white rounded-3xl p-8 hover:shadow-xl transition-all group border border-gray-200"
                        >
                            <div className="absolute -top-4 left-8 bg-[#00adef] text-white font-bold px-4 py-1 rounded-full text-sm">
                                Phase {phase.phase}
                            </div>
                            <div className="mt-4">
                                <h3 className="text-2xl font-semibold text-[#0e1012] mb-2">{phase.title}</h3>
                                <p className="text-[#00adef] font-medium mb-6">{phase.duration}</p>
                                <ul className="space-y-3">
                                    {phase.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-gray-600">
                                            <Check className="w-5 h-5 text-[#00adef]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// CTA
function CTASection() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00adef]/5 blur-3xl" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0e1012]">
                        Ready to build your{" "}
                        <span className="text-[#00adef] italic">SaaS product</span>?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Let's turn your idea into a scalable, market-ready product.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-[#00adef] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0095d0] transition-colors shadow-lg shadow-[#00adef]/25"
                        >
                            Start Building
                            <Rocket className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default function SaaSServicesContent() {
    return (
        <>
            <HeroSection />
            <FeaturesGrid />
            <TechStackSection />
            <ProcessSection />
            <CTASection />
        </>
    );
}
