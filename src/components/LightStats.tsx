"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "10", suffix: "+" },
    { label: "Projects Delivered", value: "200", suffix: "+" },
    { label: "Industries Served", value: "8", suffix: "+" },
    { label: "AI Solutions Built", value: "30", suffix: "+" },
];

export function LightStats() {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00adef] blur-[150px] -translate-y-1/2 translate-x-1/3" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Side - Visual/Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#00adef] italic font-serif text-lg">Why Choose Us</span>
                            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-[#0e1012] leading-tight">
                                Delivering <span className="text-[#00adef] italic">excellence</span><br />
                                across the globe
                            </h2>
                            <p className="mt-6 text-xl text-gray-600 leading-relaxed font-light">
                                We combine technical expertise with creative innovation to build digital products that drive real business value. Our track record speaks for itself.
                            </p>

                            <div className="mt-10 flex gap-4">
                                <div className="p-4 bg-[#f8f8f8] rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 rounded-full bg-[#00adef]/10 flex items-center justify-center text-[#00adef]">
                                        <Trophy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[#0e1012] font-bold">Award Winning</p>
                                        <p className="text-sm text-gray-500">Design & Dev Agency</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Grid of Stats */}
                    <div className="grid grid-cols-2 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-[#f8f8f8] p-8 rounded-2xl border border-gray-100 hover:border-[#00adef]/30 hover:shadow-xl transition-all group"
                            >
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl md:text-6xl font-bold text-[#0e1012] group-hover:text-[#00adef] transition-colors font-serif max-lg:text-4xl">
                                        {stat.value}
                                    </span>
                                    <span className="text-3xl font-serif text-[#00adef]">{stat.suffix}</span>
                                </div>
                                <p className="mt-2 text-gray-500 font-medium tracking-wide uppercase text-sm">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
