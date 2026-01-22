"use client";

import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e1012]">
            {/* Background Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e1012]/70 via-[#0e1012]/50 to-[#0e1012] z-10" />

            {/* Video Background - Using a gradient as fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0e1012]">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00adef]/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight max-w-5xl mx-auto"
                >
                    We craft{" "}
                    <span className="text-[#00adef] relative">
                        innovative
                        <svg
                            className="absolute -bottom-2 left-0 w-full"
                            height="8"
                            viewBox="0 0 200 8"
                            fill="none"
                        >
                            <path
                                d="M2 6C50 2 100 2 198 6"
                                stroke="#00adef"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>{" "}
                    digital solutions
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-6 md:mt-8 text-base md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
                >
                    Full-service technology agency specializing in AI solutions, SaaS development,
                    and custom software across healthcare, fintech, and beyond.
                </motion.p>

                {/* Rotating CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-8 md:mt-12"
                >
                    <a
                        href="#work"
                        className="group relative inline-flex items-center justify-center w-24 h-24 md:w-40 md:h-40"
                    >
                        {/* Rotating text */}
                        <svg
                            className="absolute inset-0 w-full h-full animate-spin-slow"
                            viewBox="0 0 100 100"
                        >
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                />
                            </defs>
                            <text className="text-[8px] uppercase tracking-[0.3em] fill-white">
                                <textPath href="#circlePath">
                                    Our Work • View Projects • Our Work • View Projects •
                                </textPath>
                            </text>
                        </svg>
                        {/* Center arrow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00adef] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="text-[#0e1012]"
                                >
                                    <path
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}
