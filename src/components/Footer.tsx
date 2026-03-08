"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Linkedin,
    Twitter,
    Instagram,
    Github,
    ArrowRight,
    Mail,
    MapPin,
    Phone,
    ChevronDown,
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
    ],
};

const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/innodify/", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
];

// Accordion drawer component for mobile
function FooterAccordion({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-4 text-left"
            >
                <h4 className="font-semibold text-lg text-white">{title}</h4>
                <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function LinkList({
    links,
}: {
    links: { name: string; href: string }[];
}) {
    return (
        <ul className="space-y-3">
            {links.map((link) => (
                <li key={link.name}>
                    <Link
                        href={link.href}
                        className="text-gray-400 hover:text-[#00adef] transition-colors text-sm"
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

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
                            Ready to transform your{" "}
                            <span className="text-[#00adef] italic">
                                digital presence
                            </span>
                            ?
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

                {/* ── Desktop layout ── */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-8 pb-16 border-b border-white/10">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-serif font-bold">
                                Innodify
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                            Award-winning digital agency. We build scalable,
                            high-performance web and mobile applications for
                            forward-thinking brands.
                        </p>
                        <div className="max-w-xs">
                            <h4 className="text-sm font-semibold mb-3">
                                Subscribe to our newsletter
                            </h4>
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

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold text-lg mb-6">Services</h4>
                        <LinkList links={footerLinks.Services} />
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold text-lg mb-6">Company</h4>
                        <LinkList links={footerLinks.Company} />
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h4 className="font-semibold text-lg mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-[#00adef]" />
                                </div>
                                <p className="text-sm text-gray-400">
                                    6th Floor, 602 Sundram Plus,
                                    <br />
                                    Timaliyawad, Athugar St, Kharwawad,
                                    <br />
                                    Nanpura, Surat, Gujarat 395001
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-[#00adef]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">
                                        +91 79843 71199
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        +91 91042 41907
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Mon-Sat, 10am - 7pm IST
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-[#00adef]" />
                                </div>
                                <a
                                    href="mailto:support@innodify.co.in"
                                    className="text-sm text-gray-400 hover:text-[#00adef] transition-colors"
                                >
                                    support@innodify.co.in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ── Mobile layout with accordion drawers ── */}
                <div className="lg:hidden pb-8 border-b border-white/10">
                    {/* Brand + Newsletter - always visible */}
                    <div className="text-center mb-8 pb-6 border-b border-white/10">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-serif font-bold">
                                Innodify
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-sm mx-auto mb-6">
                            Award-winning digital agency. We build scalable,
                            high-performance web and mobile applications for
                            forward-thinking brands.
                        </p>
                        <div className="max-w-xs mx-auto">
                            <h4 className="text-sm font-semibold mb-3">
                                Subscribe to our newsletter
                            </h4>
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

                    {/* Accordion drawers */}
                    <FooterAccordion title="Services">
                        <LinkList links={footerLinks.Services} />
                    </FooterAccordion>

                    <FooterAccordion title="Company">
                        <LinkList links={footerLinks.Company} />
                    </FooterAccordion>

                    <FooterAccordion title="Contact Us">
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#00adef] mt-0.5 shrink-0" />
                                <p className="text-sm text-gray-400">
                                    6th Floor, 602 Sundram Plus, Timaliyawad,
                                    Nanpura, Surat, Gujarat 395001
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-[#00adef] mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-400">
                                        +91 79843 71199
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        +91 91042 41907
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-[#00adef] mt-0.5 shrink-0" />
                                <a
                                    href="mailto:support@innodify.co.in"
                                    className="text-sm text-gray-400 hover:text-[#00adef]"
                                >
                                    support@innodify.co.in
                                </a>
                            </li>
                        </ul>
                    </FooterAccordion>

                    <FooterAccordion title="Legal">
                        <LinkList links={footerLinks.Legal} />
                    </FooterAccordion>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} Innodify. All rights
                        reserved.
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

                    {/* Legal links only on desktop bottom bar */}
                    <div className="hidden lg:flex gap-6 text-sm">
                        {footerLinks.Legal.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-500 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
