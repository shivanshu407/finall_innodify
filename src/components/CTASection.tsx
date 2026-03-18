"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    viewport={{ once: true }}
                    className="bg-dark rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
                >
                    {/* Subtle geometric accent */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/30 -skew-x-12 translate-x-1/4" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
                            Ready to build something{" "}
                            <span className="text-primary italic">extraordinary</span>?
                        </h2>
                        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                            Let&apos;s discuss how we can help transform your ideas into exceptional digital products that drive real results.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-dark bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all duration-200 max-lg:w-full"
                            >
                                <span>Start Your Project</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/case-studies"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/20 hover:border-primary hover:text-primary active:scale-[0.98] transition-all duration-200 max-lg:w-full"
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
