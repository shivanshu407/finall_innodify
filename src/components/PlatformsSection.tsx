"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Landmark, Truck, GraduationCap, Building2, Gamepad2, Film } from "lucide-react";

const industries = [
    { name: "Healthcare", icon: Heart, description: "HIPAA-compliant solutions" },
    { name: "eCommerce", icon: ShoppingBag, description: "Scalable online stores" },
    { name: "Fintech", icon: Landmark, description: "Secure financial platforms" },
    { name: "Logistics", icon: Truck, description: "Supply chain optimization" },
    { name: "Education", icon: GraduationCap, description: "EdTech & LMS platforms" },
    { name: "Real Estate", icon: Building2, description: "Property tech solutions" },
    { name: "Sports & Gaming", icon: Gamepad2, description: "Interactive experiences" },
    { name: "Media & Entertainment", icon: Film, description: "Content platforms" },
];

export function PlatformsSection() {
    return (
        <section id="industries" className="py-24 md:py-32 bg-[#f8f8f8]">
            <div className="container mx-auto px-6">
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
                        Expertise across <span className="text-[#00adef]">sectors</span>
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
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-[#00adef]/50 hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-[#00adef]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00adef]/20 transition-colors">
                                <industry.icon className="w-8 h-8 text-[#00adef] transition-colors" />
                            </div>
                            <span className="text-base font-semibold text-[#0e1012] group-hover:text-[#00adef] transition-colors text-center">
                                {industry.name}
                            </span>
                            <span className="text-xs text-gray-500 mt-1 text-center">
                                {industry.description}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
