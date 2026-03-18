"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NextCaseStudyProps {
    title: string;
    client: string;
    image: string;
    link: string;
}

export function NextCaseStudy({ title, client, image, link }: NextCaseStudyProps) {
    return (
        <section className="py-16 bg-light border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">Next Case Study</div>
                <Link href={link} className="group block">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="relative w-full md:w-48 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                sizes="(max-width: 768px) 100vw, 192px"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-grow">
                            <span className="text-sm text-primary font-semibold">{client}</span>
                            <h3 className="mt-1 text-xl md:text-2xl font-serif text-dark group-hover:text-primary transition-colors">
                                {title}
                            </h3>
                        </div>
                        <ArrowRight size={24} className="text-gray-300 group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0 hidden md:block" />
                    </div>
                </Link>
            </div>
        </section>
    );
}

interface CaseStudyCTAProps {
    heading?: string;
}

export function CaseStudyCTA({ heading = "Ready to start your project?" }: CaseStudyCTAProps) {
    return (
        <section className="py-20 bg-dark">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
                >
                    <h2 className="text-3xl font-serif text-white">{heading}</h2>
                    <Link
                        href="/contact-us"
                        className="group mt-8 inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-full font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all duration-200"
                    >
                        Start Your Project
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
