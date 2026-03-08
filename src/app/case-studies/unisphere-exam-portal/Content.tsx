"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Server, Shield, Cloud, Lock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UnisphereExamCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#0e1012] pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80')] bg-cover bg-center opacity-20" />
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
                            <span className="text-[#00adef] font-semibold tracking-wider text-sm uppercase">EdTech • EKS • Microservices</span>
                            <h1 className="mt-4 text-4xl md:text-6xl font-serif text-white leading-tight">
                                Unisphere: Highly Secure <br />
                                <span className="text-[#00adef] italic">Exam Portal</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                                How we built a massive-scale university assessment portal with impenetrable browser security and Kubernetes-driven microservices.
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
                                    <Cloud size={24} /> EKS
                                </div>
                                <div className="text-sm text-gray-400 mt-1">Hosting Env</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white flex items-center gap-2">
                                    <Lock size={24} /> SEB
                                </div>
                                <div className="text-sm text-gray-400 mt-1">Custom Fork Security</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">Node.js</div>
                                <div className="text-sm text-gray-400 mt-1">Microservices</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white flex items-center gap-2">
                                    <Users size={24} /> 100%
                                </div>
                                <div className="text-sm text-gray-400 mt-1">Uptime Under Load</div>
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
                                Universities face immense challenges when transitioning internal assessments online. Not only do the systems need to handle massive, simultaneous traffic spikes (when hundreds or thousands of students start an exam at the exact same minute), but the security standard must be absolutely impenetrable to prevent cheating or bypassing restricted environments.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-[#00adef]/10 text-[#00adef] rounded-full text-sm font-medium">EdTech</span>
                                <span className="px-4 py-2 bg-[#00adef]/10 text-[#00adef] rounded-full text-sm font-medium">Cybersecurity</span>
                                <span className="px-4 py-2 bg-[#00adef]/10 text-[#00adef] rounded-full text-sm font-medium">High Concurrency</span>
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
                                        <Server size={14} className="text-[#00adef]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">High-Workload Infrastructure</h3>
                                        <p className="text-sm text-gray-600 mt-1">Must seamlessly scale during intense exam windows without a single transaction failure.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#00adef]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Shield size={14} className="text-[#00adef]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Anti-Cheat Enforcement</h3>
                                        <p className="text-sm text-gray-600 mt-1">Deep integration into secure environments to completely lock down the operating system.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#00adef]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Lock size={14} className="text-[#00adef]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Bespoke Browser Forking</h3>
                                        <p className="text-sm text-gray-600 mt-1">Standard browsers aren't safe enough; needed a custom configuration of SafeExamBrowser.</p>
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
                            EKS Infrastructure & <span className="text-[#00adef] italic">Custom Security</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            We architected a bulletproof microservices backend hosted on Kubernetes, paired with a custom-compiled SafeExamBrowser.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Cloud,
                                title: "Kubernetes (EKS)",
                                description: "Deployed a microservices architecture on AWS EKS that automatically scales pods horizontally identical to traffic spikes."
                            },
                            {
                                icon: Lock,
                                title: "Custom SafeExamBrowser",
                                description: "Forked and deeply configured the open-source SEB to strengthen security protocols, ensuring students absolutely cannot bypass the lock-in."
                            },
                            {
                                icon: Server,
                                title: "Node.js Microservices",
                                description: "Built specialized Node.js microservices to isolate exam processing, timer state, and auto-submission workloads."
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
                        {["Node.js", "Kubernetes (EKS)", "Microservices", "SafeExamBrowser", "AWS", "Redis"].map((tech) => (
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
                        Need secure, high-scale infrastructure?
                    </h2>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0090c9] transition-colors"
                    >
                        Talk to Our Cloud Experts
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
