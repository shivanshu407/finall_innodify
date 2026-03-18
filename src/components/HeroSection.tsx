"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Orchestrated stagger — the ONE hero moment
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const fadeSlideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
        },
    },
};

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
            {/* Structured geometric background — no floating blobs */}
            <div className="absolute inset-0">
                {/* Subtle diagonal accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/50 -skew-x-12 translate-x-1/4" />
                {/* Soft radial glow — static, not animated */}
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/30 to-dark z-10" />

            {/* Content Container — choreographed stagger entrance */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto"
                >
                    {/* Headline */}
                    <motion.h1
                        variants={fadeSlideUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight"
                    >
                        We build{" "}
                        <span className="text-primary italic">digital products</span>{" "}
                        that matter
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeSlideUp}
                        className="mt-6 md:mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        From AI-powered solutions to custom web and mobile apps — we transform your ideas into exceptional digital experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeSlideUp}
                        className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/contact-us"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-dark bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all duration-200 max-lg:w-full"
                        >
                            Start Your Project
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>

                        <Link
                            href="/case-studies"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:border-primary hover:text-primary active:scale-[0.98] transition-all duration-200 max-lg:w-full"
                        >
                            View Our Work
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator — only animated element, small and purposeful */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
            >
                <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: [0.25, 1, 0.5, 1] }}
                        className="w-2 h-3 bg-primary rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}
