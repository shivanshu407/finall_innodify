"use client";

import { motion } from "framer-motion";

export function CTASection() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00adef]/5 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0e1012] leading-tight">
                            Ready to elevate your{" "}
                            <span className="text-[#00adef]">commerce</span> experience?
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Let&apos;s discuss how we can help transform your digital presence and
                            drive measurable results.
                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center justify-center w-40 h-40 md:w-48 md:h-48"
                        >
                            {/* Rotating text */}
                            <svg
                                className="absolute inset-0 w-full h-full animate-spin-slow"
                                viewBox="0 0 100 100"
                            >
                                <defs>
                                    <path
                                        id="ctaCircle"
                                        d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                                    />
                                </defs>
                                <text className="text-[7px] uppercase tracking-[0.25em] fill-[#0e1012]">
                                    <textPath href="#ctaCircle">
                                        Start Your Project • Let&apos;s Talk • Start Your Project •
                                    </textPath>
                                </text>
                            </svg>
                            {/* Center button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 md:w-28 md:h-28 bg-[#00adef] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#00adef]/30">
                                    <span className="text-lg font-bold text-[#0e1012]">Start</span>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
