"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const caseStudies = [
    {
        id: "mahalaxmi",
        title: "Cloud-Based Transformation of Real Estate Operations",
        category: "Cloud CRM",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        stats: "100% Security",
        link: "/case-studies/mahalaxmi-real-estate"
    },
    {
        id: "umniah",
        title: "224% Speed Increase for Umniah Telecom",
        category: "Performance",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        stats: "2.5x Faster",
        link: "/case-studies/umniah"
    },
    {
        id: "pure",
        title: "Headless Commerce for Pure Daily Care",
        category: "Headless Build",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
        stats: "45% Conv. Rate",
        link: "/case-studies/pure-daily-care"
    },
    {
        id: "stylehouse",
        title: "Seamless Migration for StyleHouse",
        category: "Migration",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        stats: "0 Downtime",
        link: "/case-studies/stylehouse"
    }
];

export function DarkCaseStudiesSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = direction === "left"
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            });
            setTimeout(checkScroll, 300); // Check after scroll animation
        }
    };

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <span className="text-[#00adef] italic font-serif text-lg">Our Work</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#0e1012]">
                            Selected <span className="text-[#00adef] italic">case studies</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#0e1012] transition-all ${!canScrollLeft ? "opacity-30 cursor-not-allowed" : "hover:bg-[#0e1012] hover:text-white hover:border-[#0e1012]"}`}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#0e1012] transition-all ${!canScrollRight ? "opacity-30 cursor-not-allowed" : "hover:bg-[#0e1012] hover:text-white hover:border-[#0e1012]"}`}
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="min-w-[85vw] md:min-w-[400px] lg:min-w-[500px] snap-center group relative cursor-pointer"
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative shadow-lg">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-[#0e1012] uppercase tracking-wider shadow-sm">
                                        {study.category}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-[#0e1012] group-hover:text-[#00adef] transition-colors mb-2">
                                {study.title}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-500">
                                <span className="text-[#00adef] font-medium">{study.stats}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-300" />
                                <Link href={study.link} className="flex items-center gap-1 hover:text-[#0e1012] transition-colors text-sm">
                                    Read Case Study <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
