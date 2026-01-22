"use client";

import { motion } from "framer-motion";
import { Bot, Database, Cloud, Code, ShoppingCart, Smartphone } from "lucide-react";

const services = [
    {
        icon: Bot,
        title: "AI Solutions",
        description: "Agentic AI for websites, intelligent chatbots, and custom automation that transforms customer experiences.",
    },
    {
        icon: Database,
        title: "CRM Development",
        description: "AI-powered CRM systems tailored to your business workflows, boosting sales and customer retention.",
    },
    {
        icon: Cloud,
        title: "SaaS Products",
        description: "End-to-end SaaS application development from concept to deployment, built for scale.",
    },
    {
        icon: Code,
        title: "Web Development",
        description: "Full-stack web applications with modern frameworks, delivering performance and user experience.",
    },
    {
        icon: ShoppingCart,
        title: "eCommerce",
        description: "Shopify, Magento, and headless commerce solutions that drive conversions and growth.",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android with seamless experiences.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function ServicesSection() {
    return (
        <section id="services" className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-[#00adef] uppercase tracking-wider">
                        What We Do
                    </span>
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif text-[#0e1012]">
                        Solutions that <span className="text-[#00adef]">scale</span>
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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            className="group p-6 md:p-8 bg-[#f8f8f8] rounded-2xl hover:bg-[#0e1012] transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="w-14 h-14 bg-[#00adef]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00adef]/20 transition-colors">
                                <service.icon
                                    className="w-7 h-7 text-[#00adef]"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-[#0e1012] group-hover:text-white transition-colors">
                                {service.title}
                            </h3>
                            <p className="mt-3 text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
