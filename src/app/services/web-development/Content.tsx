"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Code, Layout, Gauge, Globe, Shield, Palette, ArrowRight, Terminal, Layers, Smartphone, Monitor, Zap } from "lucide-react";
import Link from "next/link";

// Code typing animation component - light-themed code block
const codeLines = [
    "const website = await innodify.create({",
    '  framework: "next.js",',
    '  style: "tailwind",',
    '  database: "postgresql",',
    "  features: [",
    '    "authentication",',
    '    "dashboard",',
    '    "api",',
    '    "analytics"',
    "  ],",
    "  performance: true,",
    "  seo: true",
    "});",
    "",
    "await website.deploy(); // ✓",
];

function CodeBlock() {
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < codeLines.length) {
                const lineToAdd = codeLines[currentIndex];
                setLines(prev => [...prev, lineToAdd]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1e1e2e] rounded-2xl border border-gray-700 overflow-hidden shadow-2xl"
        >
            {/* Window header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#15151f] border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-500 font-mono">website.ts</span>
            </div>

            {/* Code content */}
            <div className="p-6 font-mono text-sm">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex"
                    >
                        <span className="text-gray-500 w-8 select-none">{i + 1}</span>
                        <span className="text-gray-300">
                            {line.includes("const") && <span className="text-purple-400">const </span>}
                            {line.includes("await") && !line.includes("const") && <span className="text-purple-400">await </span>}
                            {line.includes("innodify") && <span className="text-[#00adef]">innodify</span>}
                            {line.includes('framework:') && <span><span className="text-gray-400">framework: </span><span className="text-green-400">&quot;next.js&quot;</span>,</span>}
                            {line.includes('style:') && <span><span className="text-gray-400">style: </span><span className="text-green-400">&quot;tailwind&quot;</span>,</span>}
                            {line.includes('database:') && <span><span className="text-gray-400">database: </span><span className="text-green-400">&quot;postgresql&quot;</span>,</span>}
                            {line.includes("features:") && <span className="text-gray-400">features: [</span>}
                            {line.includes('"authentication"') && <span className="text-green-400 ml-4">&quot;authentication&quot;</span>}
                            {line.includes('"dashboard"') && <span className="text-green-400 ml-4">&quot;dashboard&quot;</span>}
                            {line.includes('"api"') && <span className="text-green-400 ml-4">&quot;api&quot;</span>}
                            {line.includes('"analytics"') && <span className="text-green-400 ml-4">&quot;analytics&quot;</span>}
                            {line === "  ]," && <span className="text-gray-400">],</span>}
                            {line.includes("performance:") && <span><span className="text-gray-400">performance: </span><span className="text-orange-400">true</span>,</span>}
                            {line.includes("seo:") && <span><span className="text-gray-400">seo: </span><span className="text-orange-400">true</span></span>}
                            {line === "});" && <span className="text-gray-300">{");"}</span>}
                            {line.includes(".deploy()") && <span><span className="text-[#00adef]">website</span>.deploy(); <span className="text-green-400">// ✓</span></span>}
                            {line.includes(".create({") && <span> = <span className="text-purple-400">await</span> <span className="text-[#00adef]">innodify</span>.create({"{"}</span>}
                        </span>
                    </motion.div>
                ))}
                <motion.span
                    className="inline-block w-2 h-4 bg-[#00adef] ml-8"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                />
            </div>
        </motion.div>
    );
}

function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0, 173, 239, 0.05) 0%, transparent 50%)`,
            }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[#00adef]/10 border border-[#00adef]/20 rounded-full px-4 py-2 mb-6">
                            <Terminal className="w-4 h-4 text-[#00adef]" />
                            <span className="text-sm text-[#00adef] font-medium font-mono">Web Development</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0e1012] leading-tight">
                            Code that
                            <br />
                            <span className="text-[#00adef] italic">performs</span>
                        </h1>

                        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
                            Full-stack web applications built with modern frameworks.
                            Fast, secure, and beautifully designed.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center gap-3 bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0095d0] transition-all shadow-lg shadow-[#00adef]/25"
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block"
                    >
                        <CodeBlock />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Services with icons in a bento grid
function ServicesSection() {
    const services = [
        {
            icon: Code,
            title: "Full-Stack Development",
            description: "React, Next.js, Node.js, and modern databases for complete web solutions.",
            size: "lg",
        },
        {
            icon: Layout,
            title: "Responsive Design",
            description: "Mobile-first interfaces that look perfect on every device.",
            size: "sm",
        },
        {
            icon: Gauge,
            title: "Performance",
            description: "Optimized for Core Web Vitals and lightning-fast load times.",
            size: "sm",
        },
        {
            icon: Globe,
            title: "API Development",
            description: "RESTful and GraphQL APIs that power modern applications.",
            size: "md",
        },
        {
            icon: Shield,
            title: "Security",
            description: "OWASP best practices and penetration testing.",
            size: "sm",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Beautiful interfaces backed by user research.",
            size: "md",
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
                        What we <span className="text-[#00adef] italic">build</span>
                    </h2>
                </motion.div>

                {/* Bento grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`group bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#00adef]/30 hover:shadow-xl transition-all duration-500 ${service.size === "lg" ? "md:col-span-2 md:row-span-2" : ""
                                }`}
                        >
                            <motion.div
                                whileHover={{ rotate: 5 }}
                                className="w-14 h-14 bg-[#00adef]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00adef] transition-colors"
                            >
                                <service.icon className="w-7 h-7 text-[#00adef] group-hover:text-white transition-colors" />
                            </motion.div>
                            <h3 className={`font-semibold text-[#0e1012] ${service.size === "lg" ? "text-3xl" : "text-xl"
                                }`}>
                                {service.title}
                            </h3>
                            <p className={`mt-3 text-gray-600 ${service.size === "lg" ? "text-lg" : ""
                                }`}>
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Device showcase with scroll-based transformation
function DeviceShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Transform values based on scroll
    const deviceType = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 2]); // 0=mobile, 1=tablet, 2=desktop
    const [activeDevice, setActiveDevice] = useState(0);

    useMotionValueEvent(deviceType, "change", (latest) => {
        setActiveDevice(Math.round(latest));
    });

    // Device dimensions based on scroll
    const width = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [120, 200, 400]);
    const height = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [220, 280, 260]);
    const borderRadius = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [24, 16, 12]);

    const deviceLabels = ["Mobile", "Tablet", "Desktop"];

    return (
        <section ref={containerRef} className="min-h-[200vh] bg-white relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center pt-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        Responsive by <span className="text-[#00adef] italic">default</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">Scroll to see how your website adapts</p>
                </div>

                {/* Device frame that morphs */}
                <div className="relative">
                    <motion.div
                        className="bg-[#1a1a2e] border-4 border-gray-700 overflow-hidden shadow-2xl flex flex-col"
                        style={{
                            width,
                            height,
                            borderRadius,
                        }}
                    >
                        {/* Notch/Camera for mobile */}
                        <AnimatePresence>
                            {activeDevice === 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10"
                                />
                            )}
                        </AnimatePresence>

                        {/* Screen content - Website mockup */}
                        <div className="flex-1 bg-white overflow-hidden relative">
                            {/* Header */}
                            <div className="bg-[#0e1012] h-8 flex items-center px-3 gap-2">
                                <div className="w-4 h-4 bg-[#00adef] rounded-sm" />
                                <motion.div
                                    className="h-2 bg-gray-600 rounded"
                                    style={{ width: activeDevice === 0 ? 40 : activeDevice === 1 ? 60 : 80 }}
                                />
                                <div className="flex-1" />
                                {activeDevice > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex gap-3"
                                    >
                                        <div className="w-8 h-2 bg-gray-600 rounded" />
                                        <div className="w-8 h-2 bg-gray-600 rounded" />
                                        {activeDevice === 2 && <div className="w-8 h-2 bg-gray-600 rounded" />}
                                    </motion.div>
                                )}
                                {activeDevice === 0 && (
                                    <div className="w-4 h-3 flex flex-col gap-0.5">
                                        <div className="h-0.5 bg-gray-400 rounded" />
                                        <div className="h-0.5 bg-gray-400 rounded" />
                                        <div className="h-0.5 bg-gray-400 rounded" />
                                    </div>
                                )}
                            </div>

                            {/* Hero section */}
                            <div className="p-3 bg-gradient-to-b from-gray-50 to-white">
                                <motion.div
                                    className="h-3 bg-[#0e1012] rounded mb-2"
                                    style={{ width: activeDevice === 0 ? "70%" : activeDevice === 1 ? "50%" : "40%" }}
                                />
                                <motion.div
                                    className="h-2 bg-gray-300 rounded mb-1"
                                    style={{ width: activeDevice === 0 ? "90%" : "60%" }}
                                />
                                <div className="h-2 bg-gray-200 rounded w-3/4 mb-3" />
                                <div className="w-12 h-4 bg-[#00adef] rounded text-[6px] text-white flex items-center justify-center">
                                    CTA
                                </div>
                            </div>

                            {/* Content grid */}
                            <div className="p-3">
                                <motion.div
                                    className="grid gap-2"
                                    style={{
                                        gridTemplateColumns: activeDevice === 0 ? "1fr" : activeDevice === 1 ? "1fr 1fr" : "1fr 1fr 1fr"
                                    }}
                                >
                                    {[1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            layout
                                            className="bg-gray-100 rounded-lg p-2"
                                            style={{
                                                display: activeDevice === 0 && i > 1 ? "none" : "block",
                                                height: activeDevice === 0 ? 40 : 50
                                            }}
                                        >
                                            <div className="w-6 h-6 bg-[#00adef]/20 rounded mb-1" />
                                            <div className="h-1.5 bg-gray-300 rounded w-3/4" />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Home indicator for mobile */}
                        <AnimatePresence>
                            {activeDevice === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full"
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Desktop stand */}
                    <AnimatePresence>
                        {activeDevice === 2 && (
                            <motion.div
                                initial={{ opacity: 0, scaleY: 0 }}
                                animate={{ opacity: 1, scaleY: 1 }}
                                exit={{ opacity: 0, scaleY: 0 }}
                                className="w-16 h-12 bg-gray-700 mx-auto origin-top"
                                style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)" }}
                            />
                        )}
                    </AnimatePresence>
                    {activeDevice === 2 && (
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            className="w-32 h-2 bg-gray-600 mx-auto rounded-full"
                        />
                    )}
                </div>

                {/* Device label */}
                <motion.div
                    className="mt-8 text-center"
                    key={activeDevice}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="text-2xl font-semibold text-[#0e1012]">
                        {deviceLabels[activeDevice]}
                    </span>
                    <p className="text-gray-500 mt-1">
                        {activeDevice === 0 && "Single column, touch-optimized"}
                        {activeDevice === 1 && "Two-column grid, expanded nav"}
                        {activeDevice === 2 && "Full layout with three columns"}
                    </p>
                </motion.div>

                {/* Progress dots */}
                <div className="flex gap-3 mt-6">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full transition-colors"
                            animate={{
                                backgroundColor: activeDevice === i ? "#00adef" : "#e5e7eb",
                                scale: activeDevice === i ? 1.2 : 1,
                            }}
                        />
                    ))}
                </div>

                {/* Scroll hint */}
                <motion.p
                    className="absolute bottom-8 text-gray-400 text-sm flex items-center gap-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Scroll to transform
                    <motion.span>↓</motion.span>
                </motion.p>
            </div>
        </section>
    );
}

// Performance metrics
function PerformanceSection() {
    const metrics = [
        { label: "Lighthouse Score", value: "100", icon: Zap },
        { label: "Load Time", value: "<1s", icon: Gauge },
        { label: "Core Web Vitals", value: "Pass", icon: Shield },
        { label: "SEO Score", value: "100", icon: Globe },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 mx-auto bg-[#00adef]/10 rounded-full flex items-center justify-center mb-4"
                            >
                                <metric.icon className="w-8 h-8 text-[#00adef]" />
                            </motion.div>
                            <div className="text-4xl font-bold text-[#0e1012] mb-1">{metric.value}</div>
                            <p className="text-gray-500 text-sm">{metric.label}</p>
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
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0e1012]">
                        Let&apos;s build something <span className="text-[#00adef] italic">amazing</span>
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Your next web application is just a conversation away.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-[#00adef] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0095d0] transition-colors shadow-lg shadow-[#00adef]/25"
                        >
                            Start Building
                            <Terminal className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// Static device showcase for mobile
function MobileDeviceShowcase() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-12">
                    <h2 className="text-3xl font-serif text-[#0e1012]">
                        Responsive by <span className="text-[#00adef] italic">default</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">Your website adapts perfectly to every screen size.</p>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <div className="flex items-end justify-center gap-4 opacity-80">
                        <Smartphone size={32} className="text-[#0e1012] mb-1" />
                        <div className="w-px h-12 bg-gray-200" />
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-20 border-2 border-gray-800 rounded-lg mb-2 bg-gray-100 flex items-center justify-center">
                                <span className="text-xs text-gray-400">Tablet</span>
                            </div>
                        </div>
                        <div className="w-px h-12 bg-gray-200" />
                        <Monitor size={48} className="text-[#0e1012]" />
                    </div>
                    <div className="bg-[#f8f8f8] rounded-2xl p-8 border border-gray-100 w-full max-w-sm mx-auto shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#00adef]" />
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Layout size={16} className="text-[#00adef]" />
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-semibold text-gray-900">Adaptive Layout</div>
                                <div className="text-xs text-gray-500">Auto-scaling content</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Our code automatically detects screen size and adjusts layout, typography, and navigation for the best experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function WebDevServicesContent() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />
            <ServicesSection />
            <div className="hidden lg:block">
                <DeviceShowcase />
            </div>
            <div className="lg:hidden">
                <MobileDeviceShowcase />
            </div>
            <PerformanceSection />
            <CTASection />
        </main>
    );
}
