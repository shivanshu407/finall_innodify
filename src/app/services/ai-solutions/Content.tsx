"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Brain, Sparkles, MessageSquare, Workflow, Zap, ArrowRight, Send } from "lucide-react";
import Link from "next/link";

// Subtle animated background for light theme
function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(0, 173, 239, 0.08) 0%, transparent 70%)",
                    top: "-20%",
                    right: "-10%",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(0, 173, 239, 0.05) 0%, transparent 70%)",
                    bottom: "-30%",
                    left: "-10%",
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -20, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}

// Typing animation hook
function useTypingAnimation(text: string, speed: number = 50) {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.slice(0, i + 1));
                i++;
            } else {
                setIsComplete(true);
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return { displayText, isComplete };
}

// AI Chat Demo
interface ChatMsg {
    role: "user" | "model";
    text: string;
}

const SUGGESTED_QUESTIONS = [
    "What can AI do for my business?",
    "How do your chatbots work?",
    "What makes Innodify different?",
];

function AIChatDemo() {
    const [messages, setMessages] = useState<ChatMsg[]>([
        { role: "model", text: "Hey! I'm Inno 🤖 Innodify's AI. Ask me anything about what we can build for you!" },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [msgCount, setMsgCount] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const MAX_MESSAGES = 5;

    const scrollToBottom = useCallback(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim() || isLoading || msgCount >= MAX_MESSAGES) return;

        const userMsg: ChatMsg = { role: "user", text: text.trim() };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);
        setMsgCount(c => c + 1);

        try {
            const history = messages.map(m => ({ role: m.role, text: m.text }));
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text.trim(), history }),
            });

            const data = await res.json();
            const reply = data.reply || data.error || "Hmm, something went wrong 🔧";
            setMessages(prev => [...prev, { role: "model", text: reply }]);
        } catch {
            setMessages(prev => [...prev, { role: "model", text: "Oops, my connection glitched! Try again? 🔌" }]);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, msgCount, messages]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-md"
        >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                {/* Chat header */}
                <div className="bg-[#00adef] px-5 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-white font-semibold text-sm">Inno AI</p>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            <span className="text-white/80 text-xs">Online</span>
                        </div>
                    </div>
                    <span className="ml-auto text-white/60 text-xs">{MAX_MESSAGES - msgCount} chats left</span>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="h-[260px] overflow-y-auto p-4 space-y-3 scrollbar-hide">
                    <AnimatePresence>
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                        ? "bg-[#00adef] text-white rounded-br-md"
                                        : "bg-gray-100 text-gray-800 rounded-bl-md"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start"
                        >
                            <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
                                <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                                <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }} />
                                <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }} />
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Suggested questions */}
                {msgCount === 0 && (
                    <div className="px-4 pb-2 flex flex-wrap gap-2">
                        {SUGGESTED_QUESTIONS.map((q, i) => (
                            <button
                                key={i}
                                onClick={() => sendMessage(q)}
                                className="text-xs bg-[#00adef]/10 text-[#00adef] px-3 py-1.5 rounded-full hover:bg-[#00adef]/20 transition-colors"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input */}
                <form onSubmit={handleSubmit} className="border-t border-gray-100 p-3 flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={msgCount >= MAX_MESSAGES ? "Chat limit reached" : "Ask Inno anything..."}
                        disabled={isLoading || msgCount >= MAX_MESSAGES}
                        className="flex-1 bg-gray-50 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#00adef]/30 disabled:opacity-50 text-gray-800 placeholder:text-gray-400"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading || msgCount >= MAX_MESSAGES}
                        className="w-10 h-10 bg-[#00adef] rounded-full flex items-center justify-center text-white hover:bg-[#0095d0] transition-colors disabled:opacity-50 disabled:hover:bg-[#00adef] flex-shrink-0"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </motion.div>
    );
}

function HeroSection() {
    const { displayText, isComplete } = useTypingAnimation("Intelligent AI for smarter business", 40);

    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            <AnimatedBackground />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-[#00adef]/10 border border-[#00adef]/20 rounded-full px-4 py-2 mb-6"
                        >
                            <motion.div
                                className="w-2 h-2 bg-[#00adef] rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <span className="text-sm text-[#00adef] font-medium">AI-Powered Solutions</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0e1012] leading-tight">
                            {displayText}
                            <motion.span
                                className="inline-block w-1 h-12 bg-[#00adef] ml-1"
                                animate={{ opacity: isComplete ? 0 : [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: isComplete ? 0 : Infinity }}
                            />
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl">
                            From agentic AI to intelligent chatbots, we build custom AI solutions
                            that automate, engage, and transform your operations.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center justify-center gap-3 max-lg:w-full bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0095d0] transition-all shadow-lg shadow-[#00adef]/25"
                            >
                                Start Your AI Journey
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* AI Chat Demo */}
                    <div className="hidden lg:flex justify-center">
                        <AIChatDemo />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Animated feature cards
function FeaturesSection() {
    const features = [
        {
            icon: Bot,
            title: "Agentic AI",
            description: "Autonomous AI agents that reason, plan, and execute complex tasks on your behalf.",
        },
        {
            icon: MessageSquare,
            title: "AI Chatbots",
            description: "Intelligent conversational agents providing 24/7 customer support.",
        },
        {
            icon: Brain,
            title: "Custom AI Models",
            description: "Machine learning models trained on your data for specific business needs.",
        },
        {
            icon: Workflow,
            title: "Process Automation",
            description: "AI-powered automation that streamlines workflows and reduces manual tasks.",
        },
        {
            icon: Sparkles,
            title: "AI Integration",
            description: "Seamlessly integrate AI capabilities into existing systems.",
        },
        {
            icon: Zap,
            title: "Predictive Analytics",
            description: "Data-driven insights and predictions for better business decisions.",
        },
    ];

    return (
        <section className="py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        AI <span className="text-[#00adef] italic">Capabilities</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                        Cutting-edge AI solutions tailored to your business needs
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#00adef]/50 hover:shadow-xl transition-all duration-500 h-full">
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-[#00adef]/10 flex items-center justify-center mb-6 group-hover:bg-[#00adef] transition-colors"
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <feature.icon className="w-8 h-8 text-[#00adef] group-hover:text-white transition-colors" />
                                </motion.div>
                                <h3 className="text-2xl font-semibold text-[#0e1012] mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Stats section
function StatsSection() {
    const stats = [
        { value: 50, suffix: "+", label: "AI Solutions Deployed" },
        { value: 95, suffix: "%", label: "Automation Accuracy" },
        { value: 40, suffix: "%", label: "Cost Reduction" },
        { value: 24, suffix: "/7", label: "AI Availability" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            className="text-center"
                        >
                            <motion.div
                                className="text-5xl md:text-6xl font-bold text-[#0e1012]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-[#00adef]">{stat.value}</span>
                                <span className="text-gray-400">{stat.suffix}</span>
                            </motion.div>
                            <p className="mt-2 text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Process section with timeline
function ProcessSection() {
    const steps = [
        { title: "Discovery", description: "We analyze your business needs and identify AI opportunities" },
        { title: "Design", description: "Our team designs custom AI solutions tailored to your goals" },
        { title: "Development", description: "We build, train, and refine your AI models" },
        { title: "Deployment", description: "Seamless integration into your existing systems" },
        { title: "Optimization", description: "Continuous improvement based on performance data" },
    ];

    return (
        <section className="py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0e1012]">
                        Our <span className="text-[#00adef] italic">Process</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="flex items-start gap-6 mb-12 last:mb-0"
                        >
                            <motion.div
                                className="flex-shrink-0 w-14 h-14 bg-[#00adef] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#00adef]/25"
                                whileHover={{ scale: 1.1 }}
                            >
                                {index + 1}
                            </motion.div>
                            <div className="flex-1 pt-2">
                                <h3 className="text-2xl font-semibold text-[#0e1012] mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
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
        <section className="py-32 bg-white relative overflow-hidden">
            <AnimatedBackground />
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0e1012]">
                        Ready to <span className="text-[#00adef] italic">transform</span> with AI?
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Let's discuss how AI can revolutionize your business operations and drive growth.
                    </p>
                    <motion.div
                        className="mt-10"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center gap-3 bg-[#00adef] text-white px-10 py-5 rounded-full font-bold text-lg max-lg:w-full hover:bg-[#0095d0] transition-colors shadow-lg shadow-[#00adef]/25"
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

export default function AIServicesContent() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <StatsSection />
            <ProcessSection />
            <CTASection />
        </>
    );
}
