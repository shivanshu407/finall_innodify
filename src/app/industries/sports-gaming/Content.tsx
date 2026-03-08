"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import {
    Brain, MessageSquare, BarChart3, Globe, Smartphone, Cloud,
    Gamepad2, Swords, Target, Joystick, Tv, ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Brain,
        title: "AI Solutions",
        description: "Player behavior analytics, matchmaking algorithms, and AI-driven game balancing for engaging experiences.",
        features: ["Matchmaking AI", "Behavioral analytics", "Dynamic difficulty"],
        href: "/services/ai-solutions",
        color: "#7c3aed",
    },
    {
        icon: BarChart3,
        title: "CRM Development",
        description: "Fan engagement platforms, tournament management systems, and loyalty programs for gaming communities.",
        features: ["Fan engagement CRM", "Tournament management", "Player loyalty programs"],
        href: "/services/crm-development",
        color: "#10b981",
    },
    {
        icon: Cloud,
        title: "SaaS Products",
        description: "Cloud-based gaming platforms, leaderboard systems, and real-time multiplayer infrastructure.",
        features: ["Leaderboard platforms", "Cloud gaming infra", "Analytics dashboards"],
        href: "/services/saas-products",
        color: "#8b5cf6",
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "Esports portals, gaming community websites, and tournament platforms with real-time updates.",
        features: ["Esports portals", "Community forums", "Live tournament sites"],
        href: "/services/web-development",
        color: "#f59e0b",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Mobile gaming apps, companion apps with stats tracking, and social features for gamers.",
        features: ["Mobile games", "Companion apps", "Live streaming"],
        href: "/services/mobile-apps",
        color: "#ec4899",
    },
    {
        icon: MessageSquare,
        title: "eCommerce",
        description: "Gaming merchandise stores, in-app purchase systems, and digital goods marketplaces.",
        features: ["Merch stores", "In-app purchases", "Digital marketplaces"],
        href: "/services/ecommerce",
        color: "#14b8a6",
    },
];

const useCases = [
    { icon: Swords, title: "Esports Platforms", description: "Tournament management with live brackets and streaming" },
    { icon: Target, title: "Fantasy Sports", description: "Real-time scoring, draft systems, and league management" },
    { icon: Joystick, title: "Game Analytics", description: "Player behavior tracking and engagement optimization" },
    { icon: Tv, title: "Live Streaming", description: "Interactive viewing experiences with real-time chat" },
];

function MiniPongGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameOver, setGameOver] = useState<null | "player" | "ai">(null);
    const [locked, setLocked] = useState(false);
    const gameRef = useRef({
        ballX: 200, ballY: 110,
        ballDX: 1.5, ballDY: 1.2,
        paddleY: 85, aiPaddleY: 85,
        playerScore: 0, aiScore: 0,
    });

    const resetGame = useCallback(() => {
        const g = gameRef.current;
        g.ballX = 200; g.ballY = 110;
        g.ballDX = 1.5; g.ballDY = 1.2;
        g.paddleY = 85; g.aiPaddleY = 85;
        g.playerScore = 0; g.aiScore = 0;
        setGameOver(null);
    }, []);

    // Request pointer lock on click
    const handleCanvasClick = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || gameOver) return;
        canvas.requestPointerLock();
    }, [gameOver]);

    // Track pointer lock state
    useEffect(() => {
        const onLockChange = () => {
            setLocked(document.pointerLockElement === canvasRef.current);
        };
        document.addEventListener("pointerlockchange", onLockChange);
        return () => document.removeEventListener("pointerlockchange", onLockChange);
    }, []);

    // Handle mouse movement — use relative movement when locked
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const onMouseMove = (e: MouseEvent) => {
            const g = gameRef.current;
            const H = canvas.height;
            if (document.pointerLockElement === canvas) {
                // Pointer locked: use relative movement
                const scaleY = canvas.height / canvas.getBoundingClientRect().height;
                g.paddleY += e.movementY * scaleY;
            } else {
                // Not locked: use absolute position
                const rect = canvas.getBoundingClientRect();
                const scaleY = canvas.height / rect.height;
                g.paddleY = (e.clientY - rect.top) * scaleY - 25;
            }
            g.paddleY = Math.max(0, Math.min(H - 50, g.paddleY));
        };

        canvas.addEventListener("mousemove", onMouseMove);
        return () => canvas.removeEventListener("mousemove", onMouseMove);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const scaleY = canvas.height / rect.height;
        const touchY = (e.touches[0].clientY - rect.top) * scaleY;
        gameRef.current.paddleY = Math.max(0, Math.min(canvas.height - 50, touchY - 25));
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        const g = gameRef.current;

        const draw = () => {
            if (gameOver) return;

            const W = canvas.width;
            const H = canvas.height;

            // Background
            ctx.fillStyle = "#f5f3ff";
            ctx.fillRect(0, 0, W, H);

            // Center dashed line
            ctx.setLineDash([4, 6]);
            ctx.strokeStyle = "#c4b5fd";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(W / 2, 0);
            ctx.lineTo(W / 2, H);
            ctx.stroke();
            ctx.setLineDash([]);

            // Ball movement
            g.ballX += g.ballDX;
            g.ballY += g.ballDY;

            if (g.ballY <= 5 || g.ballY >= H - 5) g.ballDY *= -1;

            // Player paddle collision (left)
            if (g.ballX <= 18 && g.ballY >= g.paddleY && g.ballY <= g.paddleY + 50) {
                g.ballDX = Math.abs(g.ballDX);
                g.ballDY += (g.ballY - (g.paddleY + 25)) * 0.06;
            }
            // AI paddle collision (right)
            if (g.ballX >= W - 18 && g.ballY >= g.aiPaddleY && g.ballY <= g.aiPaddleY + 50) {
                g.ballDX = -Math.abs(g.ballDX);
                g.ballDY += (g.ballY - (g.aiPaddleY + 25)) * 0.06;
            }

            // Scoring
            if (g.ballX < 0) {
                g.aiScore++;
                if (g.aiScore >= 11) { setGameOver("ai"); return; }
                g.ballX = W / 2; g.ballY = H / 2;
                g.ballDX = 1.5; g.ballDY = 1.2;
            }
            if (g.ballX > W) {
                g.playerScore++;
                if (g.playerScore >= 11) { setGameOver("player"); return; }
                g.ballX = W / 2; g.ballY = H / 2;
                g.ballDX = -1.5; g.ballDY = -1.2;
            }

            // AI movement — predict where ball will arrive
            const aiSpeed = 1.6;
            if (g.ballDX > 0) {
                const stepsToReach = (W - 18 - g.ballX) / g.ballDX;
                let predictedY = g.ballY + g.ballDY * stepsToReach;
                while (predictedY < 0 || predictedY > H) {
                    if (predictedY < 0) predictedY = -predictedY;
                    if (predictedY > H) predictedY = 2 * H - predictedY;
                }
                const aiTarget = predictedY - 25;
                const diff = aiTarget - g.aiPaddleY;
                if (Math.abs(diff) > 2) {
                    g.aiPaddleY += Math.sign(diff) * Math.min(aiSpeed, Math.abs(diff));
                }
            } else {
                const center = H / 2 - 25;
                const diff = center - g.aiPaddleY;
                if (Math.abs(diff) > 3) {
                    g.aiPaddleY += Math.sign(diff) * 0.6;
                }
            }
            g.aiPaddleY = Math.max(0, Math.min(H - 50, g.aiPaddleY));

            // Draw paddles
            ctx.fillStyle = "#7c3aed";
            ctx.beginPath();
            ctx.roundRect(6, g.paddleY, 8, 50, 4);
            ctx.fill();

            ctx.fillStyle = "#a78bfa";
            ctx.beginPath();
            ctx.roundRect(W - 14, g.aiPaddleY, 8, 50, 4);
            ctx.fill();

            // Draw ball
            ctx.fillStyle = "#7c3aed";
            ctx.beginPath();
            ctx.arc(g.ballX, g.ballY, 5, 0, Math.PI * 2);
            ctx.fill();

            // Score
            ctx.fillStyle = "#c4b5fd";
            ctx.font = "bold 24px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(String(g.playerScore), W / 2 - 30, 28);
            ctx.fillText(String(g.aiScore), W / 2 + 30, 28);

            // Max score label
            ctx.fillStyle = "#ddd6fe";
            ctx.font = "10px sans-serif";
            ctx.fillText("First to 11", W / 2, H - 8);

            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(animId);
    }, [gameOver]);

    return (
        <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
        >
            {/* Hint text above game */}
            <div className="text-center mb-2">
                <span className="text-xs text-violet-400 font-medium">
                    {locked ? "Press Esc to release cursor" : "Click on the game to lock cursor"}
                </span>
            </div>
            <div className="relative">
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={220}
                    onClick={handleCanvasClick}
                    onTouchMove={handleTouchMove}
                    className={`rounded-2xl shadow-xl border-2 border-violet-200 w-[400px] h-[220px] lg:w-[480px] lg:h-[264px] ${locked ? "cursor-none" : "cursor-pointer"}`}
                />

                {/* Game Over Overlay */}
                {gameOver && (
                    <div className="absolute inset-0 bg-violet-900/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center gap-4">
                        <span className="text-3xl font-bold text-white">
                            {gameOver === "player" ? "You Win! 🎉" : "We Win! 🏆"}
                        </span>
                        <span className="text-violet-200 text-sm">
                            {gameRef.current.playerScore} — {gameRef.current.aiScore}
                        </span>
                        <button
                            onClick={resetGame}
                            className="px-6 py-2 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-full transition-colors text-sm"
                        >
                            Play Again
                        </button>
                    </div>
                )}
            </div>
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
                            className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-2 mb-6"
                        >
                            <Gamepad2 className="w-4 h-4 text-violet-500" />
                            <span className="text-sm text-violet-600 font-medium">Sports & Gaming Industry</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl font-serif text-[#0e1012] leading-tight">
                            Level up your{" "}
                            <span className="text-violet-500 italic">digital game</span>
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                            Build immersive gaming experiences, esports platforms, and
                            fan engagement solutions that captivate millions of users.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8"
                        >
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-3 bg-violet-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-600 transition-all shadow-lg shadow-violet-500/25"
                            >
                                Discuss Your Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Playable Mini Pong Game */}
                    <div className="hidden md:block">
                        <MiniPongGame />
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
                        Our Services for <span className="text-violet-500 italic">Sports & Gaming</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                        End-to-end solutions to build, launch, and scale digital experiences in gaming
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

                                    <h3 className="text-2xl font-semibold text-[#0e1012] mb-3 group-hover:text-violet-500 transition-colors">
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
                        Gaming <span className="text-violet-500 italic">Use Cases</span>
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
                            className="bg-violet-50 rounded-2xl p-6 text-center"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <item.icon className="w-7 h-7 text-violet-500" />
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
                        Ready to level up your <span className="text-violet-500 italic">platform</span>?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Let&apos;s build a gaming experience your users will love.
                    </p>
                    <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-violet-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-violet-600 transition-colors shadow-lg shadow-violet-500/25"
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

export default function SportsGamingContent() {
    return (
        <>
            <HeroSection />
            <ServicesGrid />
            <UseCasesSection />
            <CTASection />
        </>
    );
}
