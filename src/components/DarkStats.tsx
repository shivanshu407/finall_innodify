"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "3", suffix: "+" },
    { label: "Projects Delivered", value: "40", suffix: "+" },
    { label: "Industries Served", value: "8", suffix: "+" },
    { label: "AI Solutions Built", value: "10", suffix: "+" },
];

export function DarkStats() {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full bg-[#00adef]/5 blur-3xl"
                    style={{ top: '-20%', right: '-10%' }}
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl"
                    style={{ bottom: '-20%', left: '-10%' }}
                    animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Side */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#00adef] italic font-serif text-lg">Why Choose Us</span>
                            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-[#0e1012] leading-tight">
                                Delivering <span className="text-gradient-liquid italic">excellence</span><br />
                                across the globe
                            </h2>
                            <p className="mt-6 text-xl text-gray-600 leading-relaxed font-light">
                                We combine technical expertise with creative innovation to build digital products that drive real business value. Our track record speaks for itself.
                            </p>

                            {/* Award badge with liquid glass */}
                            <motion.div
                                className="mt-10"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="inline-flex items-center gap-4 liquid-glass-glow p-4 rounded-2xl">
                                    <motion.div
                                        className="w-12 h-12 rounded-full bg-[#00adef]/15 flex items-center justify-center text-[#00adef]"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Trophy className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <p className="text-[#0e1012] font-bold">Award Winning</p>
                                        <p className="text-sm text-gray-500">Design & Dev Agency</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side - Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative"
                            >
                                <div className="liquid-glass-glow p-6 md:p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                                    {/* Shimmer on hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00adef]/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '200%' }}
                                        transition={{ duration: 0.8 }}
                                    />

                                    <div className="relative z-10">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0e1012] group-hover:text-gradient-liquid transition-colors font-serif">
                                                {stat.value}
                                            </span>
                                            <span className="text-2xl md:text-3xl font-serif text-[#00adef]">{stat.suffix}</span>
                                        </div>
                                        <p className="mt-2 text-gray-500 font-medium tracking-wide uppercase text-xs md:text-sm">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
