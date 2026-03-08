"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e1012]">
            {/* Animated Liquid Blobs Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary large blob */}
                <motion.div
                    className="absolute w-[600px] h-[600px] liquid-blob bg-gradient-to-br from-[#00adef]/30 via-[#00adef]/20 to-transparent blur-3xl"
                    style={{ top: '-10%', right: '-10%' }}
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -40, 20, 0],
                        scale: [1, 1.1, 0.95, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Secondary blob */}
                <motion.div
                    className="absolute w-[500px] h-[500px] liquid-blob-small bg-gradient-to-tr from-[#00adef]/25 via-blue-500/15 to-transparent blur-3xl"
                    style={{ bottom: '-15%', left: '-10%' }}
                    animate={{
                        x: [0, -30, 40, 0],
                        y: [0, 30, -20, 0],
                        scale: [1, 0.9, 1.05, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />

                {/* Accent blob */}
                <motion.div
                    className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-400/20 to-[#00adef]/20 blur-2xl"
                    style={{ top: '40%', left: '20%' }}
                    animate={{
                        x: [0, 60, -40, 0],
                        y: [0, -50, 30, 0],
                        opacity: [0.4, 0.7, 0.5, 0.4],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />

                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#00adef]/60"
                        style={{
                            top: `${20 + i * 12}%`,
                            left: `${15 + i * 14}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e1012]/50 to-[#0e1012] z-10" />

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative max-w-4xl mx-auto"
                >
                    <div className="relative p-8 md:p-12 rounded-3xl">
                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight"
                        >
                            We build{" "}
                            <span className="relative inline-block">
                                <span className="text-gradient-liquid">digital products</span>
                            </span>{" "}
                            that matter
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-6 md:mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                        >
                            From AI-powered solutions to custom web and mobile apps — we transform your ideas into exceptional digital experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/contact-us"
                                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-[#0e1012] overflow-hidden transition-all duration-300 max-lg:w-full"
                                style={{
                                    background: 'linear-gradient(135deg, #00adef 0%, #00d4ff 50%, #00adef 100%)',
                                }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5 }}
                                />
                                <span className="relative z-10">Start Your Project</span>
                            </Link>

                            <Link
                                href="/case-studies"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:border-[#00adef] hover:text-[#00adef] transition-all duration-300 backdrop-blur-sm max-lg:w-full"
                            >
                                View Our Work
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
            >
                <div className="relative">
                    <motion.div
                        className="absolute inset-0 rounded-full bg-[#00adef]/30 blur-md"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="relative w-7 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
                        <motion.div
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-3 bg-gradient-to-b from-[#00adef] to-[#00d4ff] rounded-full mt-2"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
