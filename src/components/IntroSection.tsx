"use client";

import { motion } from "framer-motion";

export function IntroSection() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0e1012] leading-tight">
                            The future of{" "}
                            <span className="text-[#00adef]">technology</span> is here
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            We combine strategy, technology, and innovation to build
                            software solutions that transform businesses. Our
                            integrated approach ensures every product is optimized for
                            performance and growth.
                        </p>
                    </motion.div>

                    {/* Animated Venn Diagram */}
                    <div className="relative h-80 md:h-[420px] flex items-center justify-center">

                        {/* Outer rotating ring */}
                        <motion.div
                            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-dashed border-[#00adef]/20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Inner rotating ring (opposite direction) */}
                        <motion.div
                            className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-[#00adef]/10"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Strategy Circle - Floating up and down */}
                        <motion.div
                            className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.div
                                className="w-full h-full rounded-full bg-gradient-to-br from-[#00adef] via-[#00c4ff] to-[#0090c9] shadow-2xl flex items-center justify-center relative overflow-hidden"
                                animate={{
                                    boxShadow: [
                                        "0 10px 40px rgba(0, 173, 239, 0.3)",
                                        "0 20px 60px rgba(0, 173, 239, 0.5)",
                                        "0 10px 40px rgba(0, 173, 239, 0.3)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                />
                                <span className="text-white font-bold text-sm md:text-base drop-shadow-lg z-10">Strategy</span>
                            </motion.div>
                        </motion.div>

                        {/* Technology Circle - Floating left and right */}
                        <motion.div
                            className="absolute bottom-8 left-[10%] md:left-[15%] w-32 h-32 md:w-40 md:h-40"
                            animate={{
                                x: [0, 8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                        >
                            <motion.div
                                className="w-full h-full rounded-full bg-gradient-to-br from-[#0077a8] via-[#005580] to-[#003d5c] shadow-2xl flex items-center justify-center relative overflow-hidden"
                                animate={{
                                    boxShadow: [
                                        "0 10px 40px rgba(0, 85, 128, 0.3)",
                                        "0 20px 60px rgba(0, 85, 128, 0.5)",
                                        "0 10px 40px rgba(0, 85, 128, 0.3)"
                                    ]
                                }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                                />
                                <span className="text-white font-bold text-sm md:text-base drop-shadow-lg z-10">Technology</span>
                            </motion.div>
                        </motion.div>

                        {/* Marketing Circle - Floating diagonally */}
                        <motion.div
                            className="absolute bottom-8 right-[10%] md:right-[15%] w-32 h-32 md:w-40 md:h-40"
                            animate={{
                                x: [0, -5, 0],
                                y: [0, 5, 0],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        >
                            <motion.div
                                className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-2xl flex items-center justify-center relative overflow-hidden border border-gray-200"
                                animate={{
                                    boxShadow: [
                                        "0 10px 40px rgba(0, 0, 0, 0.1)",
                                        "0 20px 60px rgba(0, 0, 0, 0.2)",
                                        "0 10px 40px rgba(0, 0, 0, 0.1)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12"
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                                />
                                <span className="text-gray-700 font-bold text-sm md:text-base z-10">Marketing</span>
                            </motion.div>
                        </motion.div>

                        {/* Center SUCCESS with pulsing glow */}
                        <motion.div
                            className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, type: "spring" }}
                        >
                            <motion.div
                                className="relative"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {/* Glow ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-[#00adef]/20 blur-lg"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.4, 0.6, 0.4]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <div className="relative bg-white px-3 py-1.5 rounded-full shadow-lg border border-[#00adef]/50">
                                    <span className="text-xs font-bold text-[#00adef] uppercase tracking-wider">
                                        Success
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Orbiting dots */}
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-[#00adef] to-[#00c4ff]"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                }}
                                animate={{
                                    x: [
                                        Math.cos((i * 60) * Math.PI / 180) * 140,
                                        Math.cos((i * 60 + 360) * Math.PI / 180) * 140
                                    ],
                                    y: [
                                        Math.sin((i * 60) * Math.PI / 180) * 140,
                                        Math.sin((i * 60 + 360) * Math.PI / 180) * 140
                                    ],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.5,
                                }}
                            />
                        ))}

                        {/* Connection lines that pulse - Triangle connecting all 3 circles */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 420">
                            {/* Strategy to Technology */}
                            <motion.path
                                d="M 200 100 L 80 320"
                                stroke="#00adef"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="8 6"
                                strokeOpacity="0.5"
                                animate={{ strokeDashoffset: [0, -28] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            {/* Strategy to Marketing */}
                            <motion.path
                                d="M 200 100 L 320 320"
                                stroke="#00adef"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="8 6"
                                strokeOpacity="0.5"
                                animate={{ strokeDashoffset: [0, -28] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.3 }}
                            />
                            {/* Technology to Marketing - Bottom line */}
                            <motion.path
                                d="M 80 320 L 320 320"
                                stroke="#00adef"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="8 6"
                                strokeOpacity="0.5"
                                animate={{ strokeDashoffset: [0, -28] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.6 }}
                            />
                        </svg>

                        {/* Floating particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={`particle-${i}`}
                                className="absolute w-1.5 h-1.5 rounded-full bg-[#00adef]/40"
                                style={{
                                    top: `${15 + (i * 10)}%`,
                                    left: `${20 + (i * 8)}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    x: [0, 10, 0],
                                    opacity: [0.2, 0.8, 0.2],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
