"use client";

import { motion } from "framer-motion";
import { Bot, Database, Cloud, Code, ShoppingCart, Smartphone } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Bot,
        title: "AI Solutions",
        description: "Agentic AI for websites, intelligent chatbots, and custom automation that transforms customer experiences.",
        href: "/services/ai-solutions"
    },
    {
        icon: Database,
        title: "CRM Development",
        description: "AI-powered CRM systems tailored to your business workflows, boosting sales and customer retention.",
        href: "/services/crm-development"
    },
    {
        icon: Cloud,
        title: "SaaS Products",
        description: "End-to-end SaaS application development from concept to deployment, built for scale.",
        href: "/services/saas-products"
    },
    {
        icon: Code,
        title: "Web Development",
        description: "Full-stack web applications with modern frameworks, delivering performance and user experience.",
        href: "/services/web-development"
    },
    {
        icon: ShoppingCart,
        title: "eCommerce",
        description: "Shopify, Magento, and headless commerce solutions that drive conversions and growth.",
        href: "/services/ecommerce"
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android with seamless experiences.",
        href: "/services/mobile-apps"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] } },
};

export function ServicesSection() {
    return (
        <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                        What We Do
                    </span>
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif text-dark">
                        Solutions that <span className="text-primary italic">scale</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Full-spectrum technology services designed to transform your business
                        and accelerate digital growth.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-lg:flex max-lg:flex-nowrap max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:pb-8 max-lg:-mx-6 max-lg:px-6 scrollbar-hide"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            className="group relative max-lg:min-w-[85vw] max-lg:snap-center"
                        >
                            <Link href={service.href} className="block">
                                <div className="bg-light border border-gray-100 p-6 md:p-8 rounded-2xl h-full transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]">
                                    <div className="relative z-10">
                                        {/* Icon container */}
                                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10">
                                            <service.icon
                                                className="w-7 h-7 text-primary"
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="mt-3 text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
