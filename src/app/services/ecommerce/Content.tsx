"use client";

import { motion } from "framer-motion";
import { ArrowRight, Store, Code, Zap, BarChart3, Search, Shield, Palette, RefreshCw, Users, Mail, Target, Globe, CreditCard, Truck } from "lucide-react";
import Link from "next/link";
import { TabbedProcess } from "@/components/TabbedProcess";

// Hero Section
function ServicesHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center bg-[#0e1012] overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute w-[600px] h-[600px] rounded-full bg-[#00adef] blur-3xl -top-1/2 left-1/4" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="text-[#00adef] italic font-serif text-lg">eCommerce Development</span>
                    <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                        Build & scale your <span className="text-[#00adef] italic">online store</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                        From Shopify to Magento and headless solutions, we build high-converting
                        eCommerce experiences that drive revenue and growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}





// CTA
function ServicesCTA() {
    return (
        <section className="py-24 bg-[#f8f8f8]">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012]">
                        Not sure where to start?
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Let's chat about your project. We'll help you identify the right solutions for your business.
                    </p>
                    <Link
                        href="/contact-us"
                        className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#00adef] text-[#0e1012] font-semibold rounded-full hover:bg-[#00adef]/90 transition-colors"
                    >
                        Schedule a Call
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default function EcommerceServicesContent() {
    return (
        <>
            <ServicesHero />
            <TabbedProcess />
            <ServicesCTA />
        </>
    );
}
