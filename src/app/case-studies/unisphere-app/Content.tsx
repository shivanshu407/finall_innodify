"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Smartphone, Users, MapPin, MessageSquare, Coffee, Shield, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaseStudyContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#0e1012] pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80')] bg-cover bg-center opacity-20" />
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
                            <span className="text-[#00adef] font-semibold tracking-wider text-sm uppercase">EdTech • Mobile App • High Concurrency</span>
                            <h1 className="mt-4 text-4xl md:text-6xl font-serif text-white leading-tight">
                                Unisphere: Full College <br />
                                <span className="text-[#00adef] italic">Management System</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                                How we built an all-in-one mobile app to digitalize BML Munjal University's campus operations for 5000+ daily users.
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
                                    <Users size={24} /> 5k+
                                </div>
                                <div className="text-sm text-gray-400 mt-1">Daily Active Users</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white flex items-center gap-2">
                                    <Smartphone size={24} /> 1k
                                </div>
                                <div className="text-sm text-gray-400 mt-1">Concurrent Users</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">Full</div>
                                <div className="text-sm text-gray-400 mt-1">Digital Campus</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">React</div>
                                <div className="text-sm text-gray-400 mt-1">Native App</div>
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
                            <h2 className="text-2xl font-bold text-[#0e1012] mb-4">The Challenge</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Managing the internal functions of a large university campus is incredibly complex. Gatepasses, visitor tracking, shuttle bookings, facility complaints, mess (cafeteria) information, and student communities were all fragmented across different portals, paperwork, and systems. BML Munjal University needed a single, unified, highly reliable mobile application that could act as the digital remote control for all 5000+ students and staff on campus.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-[#00adef]/10 text-[#00adef] rounded-full text-sm font-medium">Campus Life</span>
                                <span className="px-4 py-2 bg-[#00adef]/10 text-[#00adef] rounded-full text-sm font-medium">Logistics</span>
                                <span className="px-4 py-2 bg-[#00adef]/10 text-[#00adef] rounded-full text-sm font-medium">Real-time Data</span>
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
                                    <div className="mt-1 w-6 h-6 bg-[#00adef]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Shield size={14} className="text-[#00adef]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Gatepasses & Visitors</h3>
                                        <p className="text-sm text-gray-600 mt-1">Secure, dynamic QR-code-based gatepass and visitor approval system.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#00adef]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin size={14} className="text-[#00adef]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Asset & Transit Booking</h3>
                                        <p className="text-sm text-gray-600 mt-1">Real-time tracking and seat booking for campus shuttles and transport.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#00adef]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Coffee size={14} className="text-[#00adef]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Mess & Dining Management</h3>
                                        <p className="text-sm text-gray-600 mt-1">Daily menus, meal booking, and real-time cafeteria crowd status.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#00adef]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MessageSquare size={14} className="text-[#00adef]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Complaints & Community</h3>
                                        <p className="text-sm text-gray-600 mt-1">Live ticketing system for facility complaints and community forums.</p>
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
                            The All-in-One <span className="text-[#00adef] italic">Campus Super App</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            We delivered a highly concurrent, modular mobile app handling 1000+ concurrent requests effortlessly during peak hours.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Smartphone,
                                title: "Modular Architecture",
                                description: "Built the app with independent feature modules allowing students to access features like ticketing without draining the main feed resources."
                            },
                            {
                                icon: Users,
                                title: "High Concurrency",
                                description: "Optimized backend polling and WebSockets to handle 500-1000 concurrent students booking shuttles or updating mess data exactly at the hour mark."
                            },
                            {
                                icon: Calendar,
                                title: "Unified Experience",
                                description: "Designed an intuitive UI that consolidated 6 different administrative processes into one fluid mobile experience for students."
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
                        {["React Native", "Node.js", "Redis", "PostgreSQL", "Socket.io", "AWS"].map((tech) => (
                            <span key={tech} className="text-xl font-bold text-gray-400 flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-[#00adef]" />
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif text-[#0e1012] mb-6">
                        Ready to digitalize your operations?
                    </h2>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0090c9] transition-colors"
                    >
                        Talk to Our Experts
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
