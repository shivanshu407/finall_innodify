"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
    {
        title: "Mahalaxmi Real Estate",
        category: "Real Estate Platform",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        href: "/case-studies/mahalaxmi-real-estate"
    },
    {
        title: "Salt & Glitz",
        category: "E-Commerce App",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        href: "/case-studies/salt-and-glitz-app"
    },
    {
        title: "Unisphere Exam Portal",
        category: "EdTech Platform",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        href: "/case-studies/unisphere-exam-portal"
    },
    {
        title: "DKhushalbhai Jewellers",
        category: "E-Commerce Website",
        image: "https://images.unsplash.com/photo-1515562141589-67f0d937be40?w=800&q=80",
        href: "/case-studies/dkhushalbhai-jewellers"
    },
    {
        title: "UStart",
        category: "Startup Platform",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
        href: "/case-studies/ustart"
    }
];

export function DarkCaseStudiesSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="py-24 md:py-32 bg-dark relative overflow-hidden">
            {/* Subtle geometric accent */}
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-navy/30 skew-x-12 -translate-x-1/4" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header row */}
                <div className="flex items-end justify-between mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary italic font-serif text-lg">Our Work</span>
                        <h2 className="mt-3 text-3xl md:text-5xl font-serif text-white">
                            Featured <span className="text-primary italic">case studies</span>
                        </h2>
                    </motion.div>

                    {/* Navigation Arrows */}
                    <div className="hidden lg:flex gap-3">
                        <button
                            onClick={() => scroll("left")}
                            aria-label="Scroll left"
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-dark transition-all duration-300"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            aria-label="Scroll right"
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-dark transition-all duration-300"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
                >
                    {caseStudies.map((study) => (
                        <motion.div
                            key={study.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[35vw] snap-start"
                        >
                            <Link href={study.href} className="block group">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
                                    />
                                </div>
                                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                                    {study.category}
                                </span>
                                <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-primary transition-colors">
                                    {study.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
