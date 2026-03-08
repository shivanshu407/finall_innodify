"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Landmark, Truck, GraduationCap, Building2, Gamepad2, Film } from "lucide-react";
import Link from "next/link";

const industries = [
    { name: "Healthcare", icon: Heart, description: "HIPAA-compliant solutions", href: "/industries/healthcare" },
    { name: "eCommerce", icon: ShoppingBag, description: "Scalable online stores", href: "/industries/ecommerce" },
    { name: "Fintech", icon: Landmark, description: "Secure financial platforms", href: "/industries/fintech" },
    { name: "Logistics", icon: Truck, description: "Supply chain optimization", href: "/industries/logistics" },
    { name: "Education", icon: GraduationCap, description: "EdTech & LMS platforms", href: "/industries/education" },
    { name: "Real Estate", icon: Building2, description: "Property tech solutions", href: "/industries/real-estate" },
    { name: "Sports & Gaming", icon: Gamepad2, description: "Interactive experiences", href: "/industries/sports-gaming" },
    { name: "Media & Entertainment", icon: Film, description: "Content platforms", href: "/industries/media-entertainment" },
];

export function PlatformsSection() {
    return (
        <section id="industries" className="py-24 md:py-32 bg-[#f8f9fa] relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full bg-[#00adef]/5 blur-3xl"
                    style={{ top: '10%', left: '-15%' }}
                    animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl"
                    style={{ bottom: '10%', right: '-10%' }}
                    animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-[#00adef] uppercase tracking-wider">
                        Industries
                    </span>
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif text-[#0e1012]">
                        Expertise across <span className="text-gradient-liquid">sectors</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We bring deep domain knowledge to deliver tailored solutions for diverse industries.
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-lg:flex max-lg:flex-nowrap max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:pb-8 max-lg:-mx-6 max-lg:px-6 scrollbar-hide"
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group max-lg:min-w-[45vw] max-lg:snap-center"
                        >
                            <Link href={industry.href} className="block">
                                <div className="liquid-glass-glow flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl transition-all duration-500 hover:scale-[1.03] relative overflow-hidden h-full">
                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00adef]/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '200%' }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    <div className="relative z-10 flex flex-col items-center">
                                        {/* Icon */}
                                        <motion.div
                                            className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-[#00adef]/10"
                                        >
                                            <industry.icon className="w-8 h-8 text-[#00adef] transition-transform group-hover:scale-110" />
                                        </motion.div>

                                        <span className="text-base font-semibold text-[#0e1012] group-hover:text-gradient-liquid transition-all text-center">
                                            {industry.name}
                                        </span>
                                        <span className="text-xs text-gray-500 mt-1 text-center group-hover:text-gray-600 transition-colors">
                                            {industry.description}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
