"use client";

import { motion } from "framer-motion";
import {
    Linkedin,
    Facebook,
    Youtube,
    Twitter,
    Instagram,
    Github,
    ArrowRight,
    Mail,
    MapPin,
    Phone
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
    Services: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "SaaS Products", href: "/services/saas-products" },
        { name: "AI Solutions", href: "/services/ai-solutions" },
        { name: "eCommerce", href: "/services/ecommerce" },
    ],
    Company: [
        { name: "About Us", href: "/about-us" },
        { name: "Careers", href: "/career-at-innodify" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact-us" },
    ],
    Legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ]
};

const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
    return (
        <footer className="bg-[#0e1012] text-white pt-20 pb-10 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00adef]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* CTA Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">
                            Ready to transform your <span className="text-[#00adef] italic">digital presence</span>?
                        </h2>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-3 bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0095d0] transition-colors shadow-lg shadow-[#00adef]/20 group"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-serif font-bold">Innodify</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                            Award-winning digital agency. We build scalable, high-performance web and mobile applications for forward-thinking brands.
                        </p>

                        {/* Newsletter Signup */}
                        <div className="max-w-xs">
                            <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-[#00adef] transition-colors"
                                />
                                <button className="bg-white/10 hover:bg-[#00adef] p-2 rounded-lg transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.Services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-[#00adef] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-semibold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.Company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-[#00adef] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4">
                        <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-[#00adef]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">123 Commerce Street, New York, NY 10001</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-[#00adef]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">+1 (234) 567-890</p>
                                    <p className="text-xs text-gray-500 mt-0.5">Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-[#00adef]" />
                                </div>
                                <div>
                                    <a href="mailto:hello@innodify.com" className="text-sm text-gray-400 hover:text-[#00adef] transition-colors">
                                        hello@innodify.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Innodify. All rights reserved.
                    </div>

                    <div className="flex gap-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="text-gray-400 hover:text-[#00adef] transition-colors"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                    <div className="flex gap-6 text-sm">
                        {footerLinks.Legal.map((link) => (
                            <Link key={link.name} href={link.href} className="text-gray-500 hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
