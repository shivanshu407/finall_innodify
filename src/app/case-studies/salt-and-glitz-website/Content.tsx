"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Globe, ShoppingCart, CreditCard, Gem, Palette, Shield, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudyContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#0e1012] pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80')] bg-cover bg-center opacity-20" />
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
                            <span className="text-[#E91E63] font-semibold tracking-wider text-sm uppercase">CVD Diamonds • Custom eCommerce • Web Development</span>
                            <h1 className="mt-4 text-4xl md:text-6xl font-serif text-white leading-tight">
                                Custom eCommerce Website for <br />
                                <span className="text-[#E91E63] italic">Premium CVD Diamonds</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                                How we built a fully custom eCommerce website for Salt & Glitz to showcase and sell their premium CVD lab-grown diamond jewellery collection.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-white/10 pt-8"
                        >
                            <div>
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-sm text-gray-400 mt-1">Custom Built</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">Fast</div>
                                <div className="text-sm text-gray-400 mt-1">Page Load</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">SEO</div>
                                <div className="text-sm text-gray-400 mt-1">Optimized</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">Secure</div>
                                <div className="text-sm text-gray-400 mt-1">Payments</div>
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
                                Salt & Glitz is a modern jewellery brand specializing in CVD (Chemical Vapor Deposition) lab-grown diamond jewellery. With a focus on ethical, sustainable luxury, they offer stunning diamond pieces that are environmentally conscious and conflict-free. They needed a custom eCommerce website that could showcase their premium collections and handle online sales.
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
                                        <Globe size={14} className="text-[#E91E63]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Custom eCommerce Website</h3>
                                        <p className="text-sm text-gray-600 mt-1">A fully custom-built website, not using templates or standard platforms.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#E91E63]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <ShoppingCart size={14} className="text-[#E91E63]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Product Showcase</h3>
                                        <p className="text-sm text-gray-600 mt-1">Beautiful product galleries to showcase premium diamond jewellery.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#E91E63]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CreditCard size={14} className="text-[#E91E63]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Secure Checkout</h3>
                                        <p className="text-sm text-gray-600 mt-1">Integrated payment processing for high-value jewellery purchases.</p>
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
                            Custom <span className="text-[#E91E63] italic">eCommerce Website</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            We designed and developed a fully custom eCommerce website tailored to Salt & Glitz's premium brand identity.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Palette,
                                title: "Custom Design",
                                description: "Bespoke design reflecting the luxury and elegance of CVD diamonds. Every element crafted to perfection."
                            },
                            {
                                icon: Gem,
                                title: "Product Galleries",
                                description: "High-resolution product imagery with zoom, multiple views, and detailed specifications for each piece."
                            },
                            {
                                icon: Shield,
                                title: "Secure Payments",
                                description: "Integrated secure payment gateways for safe transactions on high-value jewellery purchases."
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
                        {["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "REST API"].map((tech) => (
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
                                        <Globe className="text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">Stunning Online Presence</h3>
                                        <p className="text-gray-600">A beautiful, fast-loading website that showcases their CVD diamond collection perfectly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <ShoppingCart className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">Seamless Shopping Experience</h3>
                                        <p className="text-gray-600">Easy product browsing, cart management, and checkout flow for customers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Zap className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">Fast & SEO Optimized</h3>
                                        <p className="text-gray-600">Optimized for search engines and fast page loads to attract and retain customers.</p>
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
                                    "Our custom website from Innodify perfectly represents our brand. The product galleries look stunning and our customers love the shopping experience. It's exactly what we needed to sell our CVD diamonds online."
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
                        Ready for your custom website?
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
