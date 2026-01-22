"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0e1012] flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(0, 173, 239, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 173, 239, 0.2) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }} />
            </div>

            {/* Animated floating elements */}
            <motion.div
                className="absolute top-20 left-20 w-20 h-20 bg-[#00adef]/10 rounded-full"
                animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-32 right-32 w-32 h-32 bg-[#00adef]/5 rounded-full"
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="text-center relative z-10">
                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <span className="text-[180px] md:text-[250px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00adef] to-[#00adef]/20 leading-none">
                        404
                    </span>
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Search className="w-20 h-20 text-white/30" />
                    </motion.div>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">
                        Page not <span className="text-[#00adef] italic">found</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
                        The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-[#00adef] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#00adef]/90 transition-all"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 px-6 py-3 rounded-full font-semibold hover:border-[#00adef] hover:text-[#00adef] transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </motion.div>

                {/* Quick links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-12"
                >
                    <p className="text-gray-500 text-sm mb-4">Or explore our services:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["AI Solutions", "CRM", "SaaS", "Web Dev", "Mobile Apps"].map((service) => (
                            <Link
                                key={service}
                                href={`/services/${service.toLowerCase().replace(" ", "-")}`}
                                className="text-sm text-gray-400 hover:text-[#00adef] transition-colors"
                            >
                                {service}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
