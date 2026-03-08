"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const caseStudies = [
    {
        id: "salt-glitz-app",
        title: "Custom Flutter App for CVD Diamond Jewellery",
        category: "Flutter App",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
        stats: "2 App Stores",
        link: "/case-studies/salt-and-glitz-app"
    },
    {
        id: "salt-glitz-website",
        title: "Custom eCommerce Website for CVD Diamond Jewellery",
        category: "eCommerce",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
        stats: "100% Custom",
        link: "/case-studies/salt-and-glitz-website"
    },
    {
        id: "dkhushalbhai",
        title: "Shopify Store for Premium Jewellery Brand",
        category: "Shopify",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
        stats: "Full eCommerce",
        link: "/case-studies/dkhushalbhai-jewellers"
    },
    {
        id: "mahalaxmi",
        title: "Cloud-Based Transformation of Real Estate Operations",
        category: "Cloud CRM",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        stats: "100% Security",
        link: "/case-studies/mahalaxmi-real-estate"
    },
    {
        id: "ustart-app",
        title: "Ustart: Zero-Commission Ride Hailing",
        category: "React Native",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
        stats: "Native Performance",
        link: "/case-studies/ustart"
    },
    {
        id: "unisphere-exam",
        title: "Unisphere: Highly Secure Exam Portal",
        category: "Cloud Infra",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        stats: "Kubernetes (EKS)",
        link: "/case-studies/unisphere-exam-portal"
    },
    {
        id: "unisphere-app",
        title: "Unisphere: University Management System",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
        stats: "5000+ Daily Users",
        link: "/case-studies/unisphere-app"
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
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full bg-[#00adef]/5 blur-3xl"
                    style={{ top: '20%', right: '-15%' }}
                    animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#00adef] italic font-serif text-lg">Our Work</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#0e1012]">
                            Selected <span className="text-gradient-liquid italic">case studies</span>
                        </h2>
                    </motion.div>

                    {/* Navigation buttons */}
                    <div className="flex gap-4 max-lg:hidden">
                        <motion.button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={`w-12 h-12 rounded-full liquid-glass-glow flex items-center justify-center text-[#0e1012] transition-all ${!canScrollLeft ? "opacity-30 cursor-not-allowed" : "hover:scale-110"}`}
                            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
                            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
                        >
                            <ArrowLeft size={20} />
                        </motion.button>
                        <motion.button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={`w-12 h-12 rounded-full liquid-glass-glow flex items-center justify-center text-[#0e1012] transition-all ${!canScrollRight ? "opacity-30 cursor-not-allowed" : "hover:scale-110"}`}
                            whileHover={canScrollRight ? { scale: 1.1 } : {}}
                            whileTap={canScrollRight ? { scale: 0.95 } : {}}
                        >
                            <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                >
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="min-w-[85vw] md:min-w-[400px] lg:min-w-[480px] snap-center group relative"
                        >
                            <Link href={study.link} className="block">
                                {/* Image container */}
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative liquid-glass-glow">
                                    <motion.div
                                        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%)'
                                        }}
                                    />

                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Category badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-4 py-2 liquid-glass-glow rounded-full text-xs font-semibold text-[#0e1012] uppercase tracking-wider">
                                            {study.category}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-[#0e1012] group-hover:text-gradient-liquid transition-colors mb-2">
                                    {study.title}
                                </h3>
                                <div className="flex items-center gap-4 text-gray-500">
                                    <span className="text-[#00adef] font-medium">{study.stats}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span className="flex items-center gap-1 hover:text-[#0e1012] transition-colors text-sm group-hover:text-[#00adef]">
                                        Read Case Study <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
