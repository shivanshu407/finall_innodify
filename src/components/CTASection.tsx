"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full bg-[#00adef]/5 blur-3xl"
                    style={{ top: '-30%', right: '-20%' }}
                    animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl"
                    style={{ bottom: '-20%', left: '-10%' }}
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="liquid-glass-glow rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
                >
                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00adef]/10 to-transparent -skew-x-12"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                    />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0e1012] leading-tight">
                            Ready to build something{" "}
                            <span className="text-gradient-liquid">extraordinary</span>?
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                            Let&apos;s discuss how we can help transform your ideas into exceptional digital products that drive real results.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 relative overflow-hidden max-lg:w-full"
                                style={{
                                    background: 'linear-gradient(135deg, #00adef 0%, #00d4ff 50%, #00adef 100%)',
                                }}
                            >
                                {/* Shimmer */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                />
                                <span className="relative z-10">Start Your Project</span>
                                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/case-studies"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-[#0e1012] border-2 border-[#0e1012] hover:bg-[#0e1012] hover:text-white transition-all duration-300 max-lg:w-full"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
