"use client";

import { motion } from "framer-motion";
import { LightStats } from "@/components/LightStats";
import { ArrowRight, Users, Target, Zap, Heart, Award, Globe, Linkedin } from "lucide-react";

// Hero Section
function AboutHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center bg-[#0e1012] overflow-hidden pt-10 lg:pt-20">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute w-96 h-96 rounded-full bg-[#00adef] blur-3xl -top-48 -right-48" />
                <div className="absolute w-96 h-96 rounded-full bg-[#00adef] blur-3xl -bottom-48 -left-48" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <span className="text-[#00adef] italic font-serif text-lg">About Us</span>
                    <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                        We build <span className="text-[#00adef] italic">digital experiences</span>
                        <br />
                        that matter
                    </h1>
                    <p className="mt-8 text-lg text-gray-300 max-w-2xl leading-relaxed">
                        Innodify is a digital solutions agency based in Surat, India. We specialize
                        in AI solutions, CRM systems, SaaS products, web & mobile apps, and eCommerce —
                        helping businesses transform complex ideas into scalable, real-world impact.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}



// Mission Section
function MissionSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#00adef] italic font-serif text-lg">Our Mission</span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0e1012]">
                            Empowering businesses to thrive in the digital era
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            We believe every business deserves technology that works as hard as they do.
                            Our mission is to bridge the gap between ambitious ideas and powerful software,
                            helping brands create meaningful connections with their customers through
                            cutting-edge AI, robust platforms, and beautifully crafted digital products.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            From strategy to execution, we partner with our clients at every step,
                            delivering solutions that not only meet today&apos;s needs but scale for tomorrow&apos;s growth.
                            Whether you&apos;re a startup building your first MVP or an enterprise modernizing
                            legacy systems, we bring the same level of dedication and technical excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-video bg-[#f8f8f8] rounded-2xl overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto bg-[#00adef]/10 rounded-full flex items-center justify-center">
                                        <Target className="w-10 h-10 text-[#00adef]" />
                                    </div>
                                    <p className="mt-4 text-gray-500">Building the future of digital</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Values Section
function ValuesSection() {
    const values = [
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Customer First",
            description: "Every decision we make starts with our clients' success in mind.",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Innovation",
            description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Collaboration",
            description: "We work as an extension of your team, not just a vendor.",
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Excellence",
            description: "Quality is non-negotiable. We deliver work we're proud of.",
        },
    ];

    return (
        <section className="py-24 bg-[#f8f8f8]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#00adef] italic font-serif text-lg">Our Values</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0e1012]">
                        What drives us forward
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl text-center hover:shadow-xl transition-shadow"
                        >
                            <div className="w-14 h-14 mx-auto rounded-full bg-[#00adef]/10 flex items-center justify-center text-[#00adef]">
                                {value.icon}
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-[#0e1012]">{value.title}</h3>
                            <p className="mt-3 text-sm text-gray-600">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Team Section
function TeamSection() {
    const founders = [
        {
            name: "Shivanshu Mishra",
            role: "Co-Founder",
            initial: "SM",
            bio: "With deep technical expertise across multiple domains, Shivanshu architects high-performance systems that transform complex ideas into scalable, real-world impact.",
            linkedin: "https://www.linkedin.com/in/theshivanshumishra/",
        },
        {
            name: "Abhishek Mishra",
            role: "Co-Founder",
            initial: "AM",
            bio: "Abhishek transforms vision into velocity — making bold decisions and driving execution that keeps everything moving forward.",
            linkedin: "https://www.linkedin.com/in/theabhishekmishra/",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#00adef] italic font-serif text-lg">Our Founders</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0e1012]">
                        Meet the people behind Innodify
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {founders.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-[#f8f8f8] rounded-2xl p-8 text-center group hover:shadow-xl transition-shadow"
                        >
                            <div className="w-28 h-28 mx-auto rounded-full bg-white group-hover:bg-[#00adef]/10 flex items-center justify-center transition-colors">
                                <span className="text-3xl font-bold text-[#0e1012] group-hover:text-[#00adef] transition-colors">
                                    {member.initial}
                                </span>
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-[#0e1012]">{member.name}</h3>
                            <p className="mt-1 text-sm font-medium text-[#00adef]">{member.role}</p>
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#0e1012] hover:text-[#00adef] transition-colors"
                            >
                                <Linkedin size={16} />
                                Connect on LinkedIn
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}




// CTA
function AboutCTA() {
    return (
        <section className="py-24 bg-[#f8f8f8]">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012]">
                        Ready to work with us?
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Whether you're starting fresh or looking to scale, we'd love to hear about your project.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact-us"
                            className="inline-flex items-center justify-center gap-2 max-lg:w-full px-8 py-4 bg-[#00adef] text-[#0e1012] font-semibold rounded-full hover:bg-[#00adef]/90 transition-colors"
                        >
                            Get in Touch
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="/career-at-innodify"
                            className="inline-flex items-center justify-center gap-2 max-lg:w-full px-8 py-4 border-2 border-[#0e1012] text-[#0e1012] font-semibold rounded-full hover:bg-[#0e1012] hover:text-white transition-colors"
                        >
                            Join Our Team
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function AboutPageContent() {
    return (
        <>
            <AboutHero />
            <LightStats />
            <MissionSection />
            <ValuesSection />
            <TeamSection />
            <AboutCTA />
        </>
    );
}
