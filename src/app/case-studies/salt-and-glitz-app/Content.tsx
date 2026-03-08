"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Smartphone, Globe, Apple, Play, Gem, Palette, Shield, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudyContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#0e1012] pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1012] via-[#0e1012]/80 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Case Studies
                    </Link>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#E91E63] font-semibold tracking-wider text-sm uppercase">CVD Diamonds • Flutter • Mobile App</span>
                            <h1 className="mt-4 text-4xl md:text-6xl font-serif text-white leading-tight">
                                Custom Flutter App for <br />
                                <span className="text-[#E91E63] italic">Premium CVD Diamonds</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                                How we built and published a custom Flutter mobile app for Salt & Glitz on both App Store and Play Store.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-white/10 pt-8"
                        >
                            <div>
                                <div className="text-3xl font-bold text-white flex items-center gap-2">
                                    <Apple size={24} /> iOS
                                </div>
                                <div className="text-sm text-gray-400 mt-1">App Store</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white flex items-center gap-2">
                                    <Play size={24} /> Android
                                </div>
                                <div className="text-sm text-gray-400 mt-1">Play Store</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">Flutter</div>
                                <div className="text-sm text-gray-400 mt-1">Cross-Platform</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-sm text-gray-400 mt-1">Custom Design</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Client & Challenge */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-[#0e1012] mb-4">About Client</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Salt & Glitz is a modern jewellery brand specializing in CVD (Chemical Vapor Deposition) lab-grown diamond jewellery. With a focus on ethical, sustainable luxury, they offer stunning diamond pieces that are environmentally conscious and conflict-free. They needed a complete digital presence that reflected their innovative approach to fine jewellery.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-medium">CVD Diamonds</span>
                                <span className="px-4 py-2 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-medium">Lab-Grown</span>
                                <span className="px-4 py-2 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-medium">Sustainable Luxury</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold text-[#0e1012] mb-6">The Requirements</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#E91E63]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Smartphone size={14} className="text-[#E91E63]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Custom Mobile App</h3>
                                        <p className="text-sm text-gray-600 mt-1">A native-like mobile experience for both iOS and Android platforms.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#E91E63]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Globe size={14} className="text-[#E91E63]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Stunning Website</h3>
                                        <p className="text-sm text-gray-600 mt-1">A premium website showcasing their CVD diamond collection.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#E91E63]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Palette size={14} className="text-[#E91E63]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Premium Brand Experience</h3>
                                        <p className="text-sm text-gray-600 mt-1">Design that reflects the luxury and innovation of lab-grown diamonds.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-[#0e1012] text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="text-[#E91E63] font-semibold tracking-wider text-sm uppercase">The Solution</span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                            Custom <span className="text-[#E91E63] italic">Flutter Mobile App</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            We built a beautiful cross-platform mobile app using Flutter, published on both iOS App Store and Google Play Store.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Smartphone,
                                title: "Cross-Platform App",
                                description: "Single codebase Flutter app delivering native performance on both iOS and Android. Smooth animations and premium feel."
                            },
                            {
                                icon: Apple,
                                title: "App Store Launch",
                                description: "Successfully published on Apple's App Store after passing all review guidelines and quality checks."
                            },
                            {
                                icon: Play,
                                title: "Play Store Launch",
                                description: "Live on Google Play Store, accessible to millions of Android users with optimized performance."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 bg-[#E91E63]/20 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="text-[#E91E63]" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {["Flutter", "Dart", "Firebase", "iOS", "Android", "REST API"].map((tech) => (
                            <span key={tech} className="text-xl font-bold text-gray-400 flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-[#E91E63]" />
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012] mb-8">
                                Delivered <span className="text-[#E91E63] italic">Results</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Apple className="text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">Published on App Store</h3>
                                        <p className="text-gray-600">Successfully launched on Apple's App Store, reaching iOS users worldwide.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Play className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">Published on Play Store</h3>
                                        <p className="text-gray-600">Live on Google Play Store, accessible to millions of Android users.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Zap className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">Complete Digital Presence</h3>
                                        <p className="text-gray-600">Unified brand experience across mobile apps and website for maximum reach.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0e1012] rounded-3xl p-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <span className="text-9xl font-serif text-white">"</span>
                            </div>
                            <blockquote className="relative z-10">
                                <p className="text-xl md:text-2xl text-white leading-relaxed italic">
                                    "The Flutter app Innodify built for us is exactly what we envisioned. It looks and feels premium on both iOS and Android, perfectly reflecting our CVD diamond brand. The app store launch was seamless."
                                </p>
                                <footer className="mt-8 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#E91E63] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        S
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Founder</div>
                                        <div className="text-gray-400 text-sm">Salt & Glitz</div>
                                    </div>
                                </footer>
                            </blockquote>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif text-[#0e1012] mb-6">
                        Ready to launch your app?
                    </h2>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0090c9] transition-colors"
                    >
                        Start Your Project
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
