"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
    Brain, MessageSquare, BarChart3, Globe, Smartphone, Cloud,
    Film, Play, Music, Camera, Radio, ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Brain,
        title: "AI Solutions",
        description: "Content recommendation engines, automated editing tools, and AI-driven audience insights for media companies.",
        features: ["Content recommendations", "Automated editing", "Audience analytics"],
        href: "/services/ai-solutions",
        color: "#e11d48",
    },
    {
        icon: BarChart3,
        title: "CRM Development",
        description: "Subscriber management, audience engagement platforms, and campaign tracking for media brands.",
        features: ["Subscriber management", "Audience engagement", "Campaign analytics"],
        href: "/services/crm-development",
        color: "#10b981",
    },
    {
        icon: Cloud,
        title: "SaaS Products",
        description: "Content management systems, digital asset management, and distribution platforms at scale.",
        features: ["CMS platforms", "Asset management", "Content distribution"],
        href: "/services/saas-products",
        color: "#8b5cf6",
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "Streaming platforms, media portals, and entertainment websites with rich interactive experiences.",
        features: ["Streaming sites", "Media portals", "Interactive content"],
        href: "/services/web-development",
        color: "#f59e0b",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "OTT streaming apps, podcast platforms, and social media applications with offline capabilities.",
        features: ["OTT apps", "Podcast platforms", "Social entertainment"],
        href: "/services/mobile-apps",
        color: "#ec4899",
    },
    {
        icon: MessageSquare,
        title: "eCommerce",
        description: "Ticketing systems, merchandise stores, and digital content marketplaces for entertainment brands.",
        features: ["Ticketing systems", "Merch stores", "Content marketplaces"],
        href: "/services/ecommerce",
        color: "#14b8a6",
    },
];

const useCases = [
    { icon: Play, title: "OTT Streaming", description: "Video-on-demand platforms with adaptive streaming" },
    { icon: Music, title: "Music Platforms", description: "Audio streaming with smart playlists and discovery" },
    { icon: Camera, title: "Content Creation", description: "Creator tools and studio management systems" },
    { icon: Radio, title: "Podcast & Audio", description: "Podcast hosting, distribution, and analytics" },
];

// Film reel frame data
const filmFrames = [
    { emoji: "🎬", label: "OTT Streaming" },
    { emoji: "🎵", label: "Music" },
    { emoji: "📸", label: "Creation" },
    { emoji: "🎙️", label: "Podcasts" },
    { emoji: "📺", label: "Live TV" },
];

function FilmReelSpinner() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stateRef = useRef({
        scrollX: 0,
        velocity: 0,
        isDragging: false,
        lastMouseX: 0,
        autoScroll: true,
        lastInteraction: 0,
    });

    const handlePointerDown = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
        const s = stateRef.current;
        s.isDragging = true;
        s.lastMouseX = e.clientX;
        s.velocity = 0;
        s.autoScroll = false;
        s.lastInteraction = Date.now();
        (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    }, []);

    const handlePointerMove = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
        const s = stateRef.current;
        if (!s.isDragging) return;
        const dx = e.clientX - s.lastMouseX;
        s.velocity = dx * 0.8;
        s.scrollX += dx;
        s.lastMouseX = e.clientX;
    }, []);

    const handlePointerUp = useCallback(() => {
        const s = stateRef.current;
        s.isDragging = false;
        s.lastInteraction = Date.now();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        const s = stateRef.current;

        const FRAME_W = 90;
        const FRAME_H = 120;
        const FRAME_GAP = 12;
        const FRAME_TOTAL = FRAME_W + FRAME_GAP;
        const STRIP_H = 170;
        const SPROCKET_SIZE = 6;
        const TOTAL_FRAMES = filmFrames.length;
        const STRIP_TOTAL_W = TOTAL_FRAMES * FRAME_TOTAL;

        const draw = () => {
            const W = canvas.width;
            const H = canvas.height;

            // Resume auto-scroll after 3s idle
            if (!s.isDragging && Date.now() - s.lastInteraction > 3000) {
                s.autoScroll = true;
            }

            // Physics
            if (!s.isDragging) {
                if (s.autoScroll) {
                    s.scrollX -= 0.4;
                } else {
                    s.scrollX += s.velocity;
                    s.velocity *= 0.92;
                    if (Math.abs(s.velocity) < 0.3) {
                        s.velocity = 0;
                        const target = Math.round(s.scrollX / FRAME_TOTAL) * FRAME_TOTAL;
                        s.scrollX += (target - s.scrollX) * 0.1;
                    }
                }
            }

            // Clear
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, W, H);

            // Film strip background
            const stripY = (H - STRIP_H) / 2;
            ctx.fillStyle = "#1a1a2e";
            ctx.beginPath();
            ctx.roundRect(0, stripY, W, STRIP_H, 8);
            ctx.fill();

            // Subtle film grain
            ctx.fillStyle = "rgba(255,255,255,0.015)";
            for (let gy = 0; gy < STRIP_H; gy += 6) {
                for (let gx = 0; gx < W; gx += 6) {
                    if (Math.random() > 0.8) {
                        ctx.fillRect(gx, stripY + gy, 2, 2);
                    }
                }
            }

            // Calculate base offset (loop the strip)
            const baseOffset = ((s.scrollX % STRIP_TOTAL_W) + STRIP_TOTAL_W) % STRIP_TOTAL_W;

            // Draw frames
            const drawRange = Math.ceil(W / FRAME_TOTAL) + 3;

            for (let i = -2; i <= drawRange; i++) {
                for (let rep = -1; rep <= 1; rep++) {
                    const frameIndex = (((i + rep * TOTAL_FRAMES) % TOTAL_FRAMES) + TOTAL_FRAMES) % TOTAL_FRAMES;
                    const x = baseOffset + (i + rep * TOTAL_FRAMES) * FRAME_TOTAL;

                    if (x < -FRAME_TOTAL * 1.5 || x > W + FRAME_TOTAL * 1.5) continue;

                    // Sprocket holes
                    ctx.fillStyle = "#0e0e1a";
                    const sprY1 = stripY + 8;
                    const sprY2 = stripY + STRIP_H - 8 - SPROCKET_SIZE;
                    ctx.beginPath();
                    ctx.roundRect(x + FRAME_W / 2 - SPROCKET_SIZE / 2, sprY1, SPROCKET_SIZE, SPROCKET_SIZE, 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.roundRect(x + FRAME_W / 2 - SPROCKET_SIZE / 2, sprY2, SPROCKET_SIZE, SPROCKET_SIZE, 2);
                    ctx.fill();

                    // Frame position
                    const frameX = x + FRAME_GAP / 2;
                    const frameY = stripY + (STRIP_H - FRAME_H) / 2;

                    // Active detection
                    const centerDist = Math.abs(frameX + FRAME_W / 2 - W / 2);
                    const isActive = centerDist < FRAME_TOTAL / 2;

                    // Frame bg
                    if (isActive) {
                        ctx.shadowColor = "#e11d48";
                        ctx.shadowBlur = 15;
                        ctx.fillStyle = "#2a1a2e";
                    } else {
                        ctx.shadowColor = "transparent";
                        ctx.shadowBlur = 0;
                        ctx.fillStyle = "#16162a";
                    }
                    ctx.beginPath();
                    ctx.roundRect(frameX, frameY, FRAME_W, FRAME_H, 6);
                    ctx.fill();
                    ctx.shadowBlur = 0;

                    // Active border
                    if (isActive) {
                        ctx.strokeStyle = "#e11d48";
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.roundRect(frameX, frameY, FRAME_W, FRAME_H, 6);
                        ctx.stroke();
                    }

                    // Frame content
                    const data = filmFrames[frameIndex];
                    if (data) {
                        ctx.font = isActive ? "32px serif" : "26px serif";
                        ctx.textAlign = "center";
                        ctx.fillStyle = "#fff";
                        ctx.fillText(data.emoji, frameX + FRAME_W / 2, frameY + FRAME_H / 2);

                        ctx.fillStyle = isActive ? "#fecdd3" : "#6b7280";
                        ctx.font = `${isActive ? "bold " : ""}11px sans-serif`;
                        ctx.fillText(data.label, frameX + FRAME_W / 2, frameY + FRAME_H - 14);
                    }
                }
            }

            // Center indicator triangle
            ctx.fillStyle = "#e11d48";
            ctx.beginPath();
            ctx.moveTo(W / 2 - 6, stripY - 2);
            ctx.lineTo(W / 2 + 6, stripY - 2);
            ctx.lineTo(W / 2, stripY + 6);
            ctx.closePath();
            ctx.fill();

            // Hint text
            ctx.fillStyle = "#9ca3af";
            ctx.font = "10px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("Drag to explore", W / 2, H - 4);

            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            <canvas
                ref={canvasRef}
                width={480}
                height={220}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                className="rounded-2xl shadow-xl border border-gray-200 cursor-grab active:cursor-grabbing w-[400px] h-[185px] lg:w-[480px] lg:h-[220px] touch-none select-none"
            />
        </motion.div>
    );
}

function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden pt-24">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-2 mb-6"
                        >
                            <Film className="w-4 h-4 text-rose-500" />
                            <span className="text-sm text-rose-600 font-medium">Media & Entertainment Industry</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl font-serif text-[#0e1012] leading-tight">
                            Entertain at{" "}
                            <span className="text-rose-500 italic">digital scale</span>
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                            Build streaming platforms, content management systems, and
                            audience engagement tools that captivate and retain viewers worldwide.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8"
                        >
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-3 bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/25"
                            >
                                Discuss Your Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Interactive Film Reel */}
                    <div className="hidden md:block">
                        <FilmReelSpinner />
                    </div>
                </div>
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
                        Our Services for <span className="text-rose-500 italic">Media & Entertainment</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                        End-to-end solutions to create, distribute, and monetize digital content
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

                                    <h3 className="text-2xl font-semibold text-[#0e1012] mb-3 group-hover:text-rose-500 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6">{service.description}</p>

                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: service.color }}>
                                        Learn more
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                        Media <span className="text-rose-500 italic">Use Cases</span>
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
                            className="bg-rose-50 rounded-2xl p-6 text-center"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <item.icon className="w-7 h-7 text-rose-500" />
                            </div>
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
                        Ready to transform your <span className="text-rose-500 italic">content platform</span>?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Let&apos;s build a media experience your audience will love.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-rose-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/25"
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

export default function MediaEntertainmentContent() {
    return (
        <>
            <HeroSection />
            <ServicesGrid />
            <UseCasesSection />
            <CTASection />
        </>
    );
}
