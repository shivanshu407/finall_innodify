"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Smartphone, ArrowRight, Check, Zap, Shield, Cloud, Download, Star, Users, Bell, Heart, MessageCircle, Home, Search, User, ShoppingCart, Play, Music, Camera, Map } from "lucide-react";
import Link from "next/link";

// Phone screen content for each section
const phoneScreens = [
    {
        id: "social",
        title: "Social Apps",
        color: "#a855f7",
        content: (
            <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                        <div>
                            <div className="h-2 w-16 bg-white/20 rounded" />
                            <div className="h-1.5 w-10 bg-white/10 rounded mt-1" />
                        </div>
                    </div>
                    <Bell className="w-4 h-4 text-white/60" />
                </div>
                <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Heart className="w-12 h-12 text-white/20" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <Heart className="w-5 h-5 text-red-400" />
                    <MessageCircle className="w-5 h-5 text-white/60" />
                    <Download className="w-5 h-5 text-white/60" />
                </div>
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="h-2 w-3/4 bg-white/10 rounded" />
            </div>
        ),
    },
    {
        id: "ecommerce",
        title: "E-Commerce",
        color: "#00adef",
        content: (
            <div className="p-4">
                <div className="flex items-center gap-2 mb-4">
                    <Search className="w-4 h-4 text-white/40" />
                    <div className="flex-1 h-8 bg-white/10 rounded-full" />
                    <ShoppingCart className="w-5 h-5 text-white/60" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-white/5 rounded-xl p-2">
                            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-2 flex items-center justify-center">
                                <ShoppingCart className="w-6 h-6 text-white/20" />
                            </div>
                            <div className="h-2 w-full bg-white/10 rounded" />
                            <div className="h-2 w-1/2 bg-cyan-500/50 rounded mt-1" />
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "streaming",
        title: "Streaming & Media",
        color: "#ef4444",
        content: (
            <div className="p-4">
                <div className="aspect-video bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-xl mb-4 relative flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-red-500 rounded-full" />
                    </div>
                    <span className="text-xs text-white/40">2:34</span>
                </div>
                <div className="space-y-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-2">
                            <div className="w-12 h-8 rounded bg-white/10" />
                            <div className="flex-1">
                                <div className="h-2 w-full bg-white/10 rounded" />
                                <div className="h-1.5 w-2/3 bg-white/5 rounded mt-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "fitness",
        title: "Health & Fitness",
        color: "#22c55e",
        content: (
            <div className="p-4">
                <div className="text-center mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full border-4 border-green-500/30 flex items-center justify-center relative">
                        <div className="absolute inset-2 rounded-full border-4 border-green-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 70%)" }} />
                        <div className="text-2xl font-bold text-white">7,842</div>
                    </div>
                    <p className="text-xs text-white/40 mt-2">Steps Today</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                        { icon: "🔥", value: "324", label: "Cal" },
                        { icon: "💤", value: "7.5h", label: "Sleep" },
                        { icon: "💧", value: "6", label: "Glasses" },
                    ].map(stat => (
                        <div key={stat.label} className="bg-white/5 rounded-lg p-2 text-center">
                            <div className="text-lg">{stat.icon}</div>
                            <div className="text-sm font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-white/40">{stat.label}</div>
                        </div>
                    ))}
                </div>
                <div className="h-16 bg-white/5 rounded-xl flex items-end justify-between px-2 pb-2">
                    {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
                        <div key={i} className="w-4 bg-green-500/50 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "travel",
        title: "Travel & Navigation",
        color: "#f59e0b",
        content: (
            <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-transparent">
                    <Map className="w-full h-full text-white/5" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-[#1a1a2e]/90 backdrop-blur-xl rounded-2xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                                <Map className="w-5 h-5 text-amber-500" />
                            </div>
                            <div>
                                <div className="text-sm font-medium text-white">Tokyo, Japan</div>
                                <div className="text-xs text-white/40">2.4 km away</div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex-1 py-2 bg-amber-500 rounded-lg text-xs font-medium text-black">Directions</button>
                            <button className="px-4 py-2 bg-white/10 rounded-lg text-xs text-white">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

// Sticky phone component
function StickyPhone({ activeIndex }: { activeIndex: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
        >
            {/* Phone frame */}
            <div className="w-64 h-[520px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] border-4 border-gray-700 p-2 shadow-2xl relative">
                {/* Glow effect based on active color */}
                <motion.div
                    className="absolute -inset-4 rounded-[4rem] blur-3xl opacity-30"
                    animate={{ backgroundColor: phoneScreens[activeIndex]?.color || "#00adef" }}
                    transition={{ duration: 0.5 }}
                />

                <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0e1012] rounded-[2.5rem] overflow-hidden relative">
                    {/* Dynamic island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full flex items-center justify-center gap-2 z-20">
                        <div className="w-2 h-2 rounded-full bg-gray-700" />
                        <div className="w-3 h-3 rounded-full bg-gray-800 ring-1 ring-gray-700" />
                    </div>

                    {/* Screen content with animation */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="pt-12 h-full"
                        >
                            {phoneScreens[activeIndex]?.content}
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom tab bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0e1012]/80 backdrop-blur-xl border-t border-white/5 flex items-center justify-around px-4">
                        <Home className="w-5 h-5 text-white/40" />
                        <Search className="w-5 h-5 text-white/40" />
                        <motion.div
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            animate={{ backgroundColor: phoneScreens[activeIndex]?.color || "#00adef" }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-white text-lg">+</span>
                        </motion.div>
                        <Bell className="w-5 h-5 text-white/40" />
                        <User className="w-5 h-5 text-white/40" />
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
                </div>
            </div>

            {/* Floating badges */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg bg-white text-black flex items-center gap-1"
            >
                <Star className="w-3 h-3 text-amber-500" fill="currentColor" />
                4.9
            </motion.div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg text-white flex items-center gap-1"
                style={{ backgroundColor: phoneScreens[activeIndex]?.color || "#00adef" }}
            >
                <Download className="w-3 h-3" />
                1M+
            </motion.div>
        </motion.div>
    );
}

// Simple phone mockup for hero section
function HeroPhoneMockup({ color = "#00adef", delay = 0 }: { color?: string; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            className="relative"
        >
            <div className="w-48 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] border-4 border-gray-700 p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0e1012] rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />

                    {/* Screen content placeholder */}
                    <div className="pt-12 px-4 space-y-3">
                        <div className="h-6 w-20 rounded-full" style={{ backgroundColor: color + "40" }} />
                        <div className="h-4 w-full bg-white/10 rounded" />
                        <div className="h-4 w-3/4 bg-white/10 rounded" />
                        <div className="grid grid-cols-2 gap-2 mt-4">
                            <div className="h-16 rounded-xl" style={{ backgroundColor: color + "20" }} />
                            <div className="h-16 rounded-xl bg-white/5" />
                        </div>
                        <div className="space-y-2 mt-4">
                            {[1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: delay + 0.5 + i * 0.1 }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color + "30" }} />
                                    <div className="flex-1">
                                        <div className="h-2 w-full bg-white/10 rounded" />
                                        <div className="h-2 w-2/3 bg-white/5 rounded mt-1" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
                </div>
            </div>

            {/* Floating badge */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: delay + 0.8, type: "spring" }}
                className="absolute -bottom-4 -right-4 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                style={{ backgroundColor: color, color: "#0e1012" }}
            >
                Live
            </motion.div>
        </motion.div>
    );
}

// Hero section
function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            {/* Subtle gradient orbs */}
            <motion.div
                className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00adef]/5 rounded-full blur-[150px]"
                animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[#00adef]/10 rounded-full blur-[120px]"
                animate={{ scale: [1.2, 1, 1.2], y: [0, -50, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[#00adef]/10 border border-[#00adef]/20 rounded-full px-4 py-2 mb-6">
                            <Smartphone className="w-4 h-4 text-[#00adef]" />
                            <span className="text-sm text-[#00adef] font-medium">Mobile Development</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0e1012] leading-tight">
                            Apps that
                            <br />
                            <span className="text-[#00adef] italic">users love</span>
                        </h1>

                        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
                            Native and cross-platform mobile apps for iOS and Android.
                            Beautiful design meets flawless performance.
                        </p>

                        <div className="mt-8 flex items-center gap-6">
                            {[
                                { icon: "🍎", label: "iOS" },
                                { icon: "🤖", label: "Android" },
                                { icon: "⚛️", label: "React Native" },
                            ].map(platform => (
                                <motion.div
                                    key={platform.label}
                                    whileHover={{ scale: 1.1 }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                        <span className="text-lg">{platform.icon}</span>
                                    </div>
                                    <span className="text-gray-700">{platform.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10"
                        >
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center gap-3 bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0095d0] transition-all shadow-lg shadow-[#00adef]/25"
                            >
                                Build Your App
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Phone mockups */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:flex items-center justify-center gap-6"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <HeroPhoneMockup color="#00adef" delay={0.3} />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            className="mt-20"
                        >
                            <HeroPhoneMockup color="#a855f7" delay={0.6} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Scrollytelling showcase section
function ScrollShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to section index
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const sectionCount = phoneScreens.length;
        const newIndex = Math.min(
            Math.floor(latest * sectionCount),
            sectionCount - 1
        );
        if (newIndex !== activeIndex && newIndex >= 0) {
            setActiveIndex(newIndex);
        }
    });

    const phoneRotate = useTransform(scrollYProgress, [0, 0.1], [15, 0]);
    const phoneX = useTransform(scrollYProgress, [0, 0.1], [100, 0]);

    return (
        <section ref={containerRef} className="relative bg-[#0e1012]" style={{ height: `${phoneScreens.length * 100}vh` }}>
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Sticky phone on left */}
                        <motion.div
                            style={{ rotate: phoneRotate, x: phoneX }}
                            className="hidden lg:flex justify-center"
                        >
                            <StickyPhone activeIndex={activeIndex} />
                        </motion.div>

                        {/* Content on right */}
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-8"
                                >
                                    {/* Section indicator */}
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className="w-12 h-1 rounded-full"
                                            animate={{ backgroundColor: phoneScreens[activeIndex]?.color }}
                                        />
                                        <span className="text-gray-500 text-sm">
                                            {String(activeIndex + 1).padStart(2, "0")} / {String(phoneScreens.length).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
                                        {phoneScreens[activeIndex]?.title}
                                    </h2>

                                    <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                                        {activeIndex === 0 && "Build engaging social platforms that connect millions. Real-time messaging, stories, feeds, and more."}
                                        {activeIndex === 1 && "Create seamless shopping experiences with secure payments, inventory management, and order tracking."}
                                        {activeIndex === 2 && "Deliver high-quality video and audio streaming with adaptive bitrate and offline downloads."}
                                        {activeIndex === 3 && "Track fitness goals, monitor health metrics, and motivate users with gamified challenges."}
                                        {activeIndex === 4 && "Navigate the world with real-time maps, location services, and smart recommendations."}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {(
                                            [
                                                ["Real-time chat", "Stories & reels", "Push notifications", "Social graph"],
                                                ["Secure checkout", "Order tracking", "Wishlist", "Reviews"],
                                                ["4K streaming", "Offline mode", "Chromecast", "Subscriptions"],
                                                ["Activity tracking", "Health sync", "Challenges", "Insights"],
                                                ["GPS navigation", "Offline maps", "AR features", "Local guides"],
                                            ][activeIndex] || []
                                        ).map((feature: string, i: number) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-3"
                                            >
                                                <motion.div
                                                    className="w-6 h-6 rounded-full flex items-center justify-center"
                                                    animate={{ backgroundColor: phoneScreens[activeIndex]?.color + "30" }}
                                                >
                                                    <Check className="w-3 h-3" style={{ color: phoneScreens[activeIndex]?.color }} />
                                                </motion.div>
                                                <span className="text-gray-300">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <motion.div whileHover={{ scale: 1.02 }}>
                                        <Link
                                            href="/contact-us"
                                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white transition-all"
                                            style={{ backgroundColor: phoneScreens[activeIndex]?.color }}
                                        >
                                            Build this app
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Scroll progress dots */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                                {phoneScreens.map((screen, i) => (
                                    <motion.div
                                        key={screen.id}
                                        className="w-2 h-2 rounded-full cursor-pointer"
                                        animate={{
                                            backgroundColor: i === activeIndex ? screen.color : "rgba(255,255,255,0.2)",
                                            scale: i === activeIndex ? 1.5 : 1,
                                        }}
                                        whileHover={{ scale: 1.5 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Stats section
function StatsSection() {
    const stats = [
        { icon: Download, value: "5M+", label: "Downloads" },
        { icon: Star, value: "4.9", label: "App Store Rating" },
        { icon: Users, value: "50+", label: "Apps Launched" },
        { icon: Zap, value: "99.9%", label: "Crash-Free Rate" },
    ];

    return (
        <section className="py-24 bg-gradient-to-r from-[#00adef] to-purple-500">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center text-white"
                        >
                            <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                            <div className="text-4xl md:text-5xl font-bold mb-1">{stat.value}</div>
                            <p className="text-white/70">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// CTA section
function CTASection() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0e1012]">
                        Ready to go{" "}
                        <span className="text-[#00adef] italic">mobile</span>?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Let&apos;s build an app your users will love.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-[#00adef] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0095d0] transition-colors shadow-lg shadow-[#00adef]/25"
                        >
                            Launch Your App
                            <Smartphone className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// Mobile Parallax Showcase (Sticky Phone + Scrollable Text)
function MobileParallaxShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to section index
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const sectionCount = phoneScreens.length;
        const newIndex = Math.min(
            Math.floor(latest * sectionCount),
            sectionCount - 1
        );
        if (newIndex !== activeIndex && newIndex >= 0) {
            setActiveIndex(newIndex);
        }
    });

    return (
        <section ref={containerRef} className="relative bg-[#0e1012]" style={{ height: `${phoneScreens.length * 80}vh` }}>
            {/* Sticky Phone Container */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-24 overflow-hidden">
                <div className="relative w-full max-w-[320px] flex justify-center">
                    {/* Reusing StickyPhone logic but scaled for mobile */}
                    <div className="scale-75 origin-top transform-gpu">
                        <StickyPhone activeIndex={activeIndex} />
                    </div>
                </div>
            </div>

            {/* Scrollable Text Overlays */}
            <div className="absolute inset-0 z-20">
                {phoneScreens.map((screen, index) => (
                    <div
                        key={screen.id}
                        className="h-[80vh] flex flex-col justify-end pb-24 px-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            viewport={{ margin: "-20% 0px -20% 0px" }}
                            className="bg-[#1a1a2e]/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-1 rounded-full" style={{ backgroundColor: screen.color }} />
                                <span className="text-white/60 text-xs uppercase tracking-wider">
                                    {String(index + 1).padStart(2, "0")} — {screen.title}
                                </span>
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-2">{screen.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {[
                                    "Build engaging social platforms that connect millions. Real-time messaging, stories, feeds, and more.",
                                    "Create seamless shopping experiences with secure payments, inventory management, and order tracking.",
                                    "Deliver high-quality video and audio streaming with adaptive bitrate and offline downloads.",
                                    "Track fitness goals, monitor health metrics, and motivate users with gamified challenges.",
                                    "Navigate the world with real-time maps, location services, and smart recommendations."
                                ][index]}
                            </p>

                            {/* Features tags */}
                            <div className="flex flex-wrap gap-2">
                                {(
                                    [
                                        ["Real-time chat", "Stories"],
                                        ["Secure checkout", "Order tracking"],
                                        ["4K streaming", "Offline mode"],
                                        ["Activity tracking", "Health sync"],
                                        ["GPS navigation", "Offline maps"],
                                    ][index] || []
                                ).map((feature) => (
                                    <span key={feature} className="px-2 py-1 text-xs bg-white/5 rounded-md text-gray-300 border border-white/5">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function MobileAppsServicesContent() {
    return (
        <main className="bg-white min-h-screen">
            <HeroSection />
            <div className="hidden lg:block">
                <ScrollShowcase />
            </div>
            <div className="lg:hidden">
                <MobileParallaxShowcase />
            </div>
            <CTASection />
        </main>
    );
}
