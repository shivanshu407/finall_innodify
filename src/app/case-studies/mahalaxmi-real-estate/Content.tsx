"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Shield, Zap, Globe, Smartphone, LayoutDashboard, Users, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudyContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#0e1012] pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')] bg-cover bg-center opacity-20" />
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
                            <span className="text-[#00adef] font-semibold tracking-wider text-sm uppercase">Real Estate • CRM • Cloud</span>
                            <h1 className="mt-4 text-4xl md:text-6xl font-serif text-white leading-tight">
                                Cloud-Based Transformation of <br />
                                <span className="text-[#00adef] italic">Real Estate Operations</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                                How Mahalaxmi Real Estate Group achieved 100% data security and boosted productivity by 30% with a custom cloud-native CRM.
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
                                <div className="text-sm text-gray-400 mt-1">Data Security</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">30%</div>
                                <div className="text-sm text-gray-400 mt-1">Productivity Boost</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">0</div>
                                <div className="text-sm text-gray-400 mt-1">Data Leaks</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">Instant</div>
                                <div className="text-sm text-gray-400 mt-1">Onboarding</div>
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
                                Mahalaxmi Real Estate Group is a prominent real estate consultancy operating in the competitive Delhi NCR market. Specializing in residential and commercial property sales, they manage a dynamic team of sales agents and handle a high volume of leads daily. Their focus is on efficiency, data security, and providing a seamless experience for both their agents and clients.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold text-[#0e1012] mb-6">The Challenges</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Lock size={14} className="text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Data Security & Leakage</h3>
                                        <p className="text-sm text-gray-600 mt-1">No mechanism to hide sensitive client contact details, leading to privacy concerns.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <LayoutDashboard size={14} className="text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Inefficient Workflow</h3>
                                        <p className="text-sm text-gray-600 mt-1">Agents overwhelmed by cluttered interfaces and unorganized lead lists.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Smartphone size={14} className="text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Accessibility Issues</h3>
                                        <p className="text-sm text-gray-600 mt-1">Team needed access from anywhere without being tied to office devices.</p>
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
                        <span className="text-[#00adef] font-semibold tracking-wider text-sm uppercase">The Solution</span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                            A Modern, Cloud-Native <span className="text-[#00adef] italic">CRM</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            We engineered a tailored CRM solution hosted securely on the web for instant access from any location.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Role-Based Access Control",
                                description: "Strict separation between Admin and Employee views. Critical contact info is automatically masked to prevent unauthorized data sharing."
                            },
                            {
                                icon: LayoutDashboard,
                                title: "Optimized Kanban Pipeline",
                                description: "Visual drag-and-drop pipeline for managing lead stages (New -> Contacted -> Site Visit -> Won), helping visualize the sales funnel."
                            },
                            {
                                icon: Smartphone,
                                title: "Universal Accessibility",
                                description: "Entirely web-based architecture allows real-time access from smartphones, tablets, or laptops ensuring business continuity."
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
                                <div className="w-12 h-12 bg-[#00adef]/20 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="text-[#00adef]" />
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
                        {["Node.js", "Preact", "Cloud Native", "Secure Auth", "Real-time DB"].map((tech) => (
                            <span key={tech} className="text-xl font-bold text-gray-400 flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-[#00adef]" />
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results & Testimonial */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012] mb-8">
                                Measurable <span className="text-[#00adef] italic">Impact</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Shield className="text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">100% Data Security</h3>
                                        <p className="text-gray-600">Zero instances of unauthorized data access due to strict masking policies.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Zap className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">30% Productivity Increase</h3>
                                        <p className="text-gray-600">Agents save hours per week with focused views and lightning-fast interface.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Users className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">Real-Time Visibility</h3>
                                        <p className="text-gray-600">Management has instant access to pipeline and performance from anywhere.</p>
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
                                    "The new web CRM has been a game-changer for Mahalaxmi Real Estate. It's incredibly fast and gives us total control. I finally have peace of mind knowing my client data is secure, and my team can access exactly what they need."
                                </p>
                                <footer className="mt-8 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#00adef] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        M
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Director</div>
                                        <div className="text-gray-400 text-sm">Mahalaxmi Real Estate Group</div>
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
                        Ready to transform your operations?
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
