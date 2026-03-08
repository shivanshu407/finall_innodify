"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Briefcase, Heart, Zap, Users, Coffee, Laptop } from "lucide-react";

function CareersHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center bg-[#0e1012] overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute w-96 h-96 rounded-full bg-[#00adef] blur-3xl top-1/4 left-1/4" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto">
                    <span className="text-[#00adef] italic font-serif text-lg">Join Our Team</span>
                    <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                        Build the future of <span className="text-[#00adef] italic">commerce</span> with us
                    </h1>
                    <p className="mt-6 text-lg text-gray-300">
                        We're a team of passionate eCommerce experts looking for talented individuals who want to make an impact. Join us!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function CultureSection() {
    const perks = [
        { icon: <Laptop className="w-6 h-6" />, title: "Remote-First", desc: "Work from anywhere in the world" },
        { icon: <Clock className="w-6 h-6" />, title: "Flexible Hours", desc: "We trust you to manage your time" },
        { icon: <Coffee className="w-6 h-6" />, title: "Learning Budget", desc: "$1,500/year for courses & conferences" },
        { icon: <Heart className="w-6 h-6" />, title: "Health Benefits", desc: "Comprehensive medical, dental & vision" },
        { icon: <Zap className="w-6 h-6" />, title: "Latest Tech", desc: "MacBook Pro + tools you need" },
        { icon: <Users className="w-6 h-6" />, title: "Team Retreats", desc: "Annual company-wide gatherings" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <span className="text-[#00adef] italic font-serif text-lg">Why Innodify?</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0e1012]">Perks & Benefits</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We believe happy people do their best work. Here's what we offer.</p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {perks.map((perk, index) => (
                        <motion.div key={perk.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4 p-6 bg-[#f8f8f8] rounded-xl hover:bg-white hover:shadow-xl transition-all">
                            <div className="w-12 h-12 rounded-lg bg-[#00adef]/10 flex items-center justify-center flex-shrink-0 text-[#00adef]">{perk.icon}</div>
                            <div>
                                <h3 className="font-semibold text-[#0e1012]">{perk.title}</h3>
                                <p className="mt-1 text-sm text-gray-600">{perk.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function OpenPositionsSection() {
    const positions = [
        { title: "Front End Developer", department: "Engineering", location: "Remote", type: "Full-time" },
        { title: "Back End Developer", department: "Engineering", location: "Remote", type: "Full-time" },
        { title: "Full Stack Developer", department: "Engineering", location: "Remote", type: "Full-time" },
        { title: "Shopify Developer", department: "Engineering", location: "Remote", type: "Full-time" },
        { title: "Graphics Designer", department: "Design", location: "Remote", type: "Full-time" },
    ];

    return (
        <section className="py-24 bg-[#f8f8f8]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                    <span className="text-[#00adef] italic font-serif text-lg">Open Positions</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0e1012]">Join our growing team</h2>
                </motion.div>
                <div className="space-y-4">
                    {positions.map((position, index) => (
                        <motion.div key={position.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow cursor-pointer group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0e1012] group-hover:text-[#00adef] transition-colors">{position.title}</h3>
                                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1"><Briefcase size={14} />{position.department}</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} />{position.location}</span>
                                        <span className="flex items-center gap-1"><Clock size={14} />{position.type}</span>
                                    </div>
                                </div>
                                <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0e1012] text-[#0e1012] font-semibold rounded-full hover:bg-[#0e1012] hover:text-white transition-colors text-sm">
                                    Apply Now <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
                    <p className="text-gray-600">Don't see a role that fits? We're always looking for talented people.</p>
                    <a href="/contact-us" className="mt-4 inline-flex items-center gap-2 text-[#00adef] font-medium hover:underline">
                        Send us your resume <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function ValuesSection() {
    return (
        <section className="py-24 bg-[#0e1012]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                    <span className="text-[#00adef] italic font-serif text-lg">Our Values</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">What we believe in</h2>
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-[#00adef]">Impact Over Output</h3>
                            <p className="mt-3 text-gray-400">We measure success by the value we create, not the hours we clock.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-[#00adef]">Continuous Learning</h3>
                            <p className="mt-3 text-gray-400">eCommerce evolves fast. We stay curious and keep growing.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-[#00adef]">Own Your Work</h3>
                            <p className="mt-3 text-gray-400">We trust each team member to take ownership and deliver excellence.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function CareerContent() {
    return (
        <>
            <CareersHero />
            <CultureSection />
            <OpenPositionsSection />
            <ValuesSection />
        </>
    );
}
