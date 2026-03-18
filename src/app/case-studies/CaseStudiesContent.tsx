"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
    {
        title: "Custom Flutter App for CVD Diamond Jewellery Brand",
        client: "Salt & Glitz",
        clientColor: "#E91E63",
        tags: ["Flutter", "iOS", "Android"],
        stat: "2",
        statLabel: "App Stores",
        description: "Custom Flutter mobile app published on both App Store and Play Store for a premium CVD diamond jewellery brand.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
        link: "/case-studies/salt-and-glitz-app",
    },
    {
        title: "Custom eCommerce Website for CVD Diamond Jewellery",
        client: "Salt & Glitz",
        clientColor: "#E91E63",
        tags: ["eCommerce", "Custom Website"],
        stat: "100%",
        statLabel: "Custom Built",
        description: "Fully custom eCommerce website for Salt & Glitz to showcase and sell their premium CVD lab-grown diamond jewellery collection.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
        link: "/case-studies/salt-and-glitz-website",
    },
    {
        title: "Shopify eCommerce Store for Premium Jewellery Brand",
        client: "D Khushalbhai Jewellers",
        clientColor: "#D4AF37",
        tags: ["Shopify", "eCommerce"],
        stat: "100%",
        statLabel: "Digital Presence",
        description: "Complete Shopify store development with payment gateway and delivery partner integrations for a premium gold, diamond, and silver jewellery retailer.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
        link: "/case-studies/dkhushalbhai-jewellers",
    },
    {
        title: "Cloud-Based Transformation of Real Estate Operations",
        client: "Mahalaxmi Group",
        clientColor: "#00adef",
        tags: ["Cloud CRM", "Web App"],
        stat: "30%",
        statLabel: "Productivity Boost",
        description: "How we helped Mahalaxmi Real Estate Group achieve 100% data security and boost productivity by 30% with a custom cloud-native CRM.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        link: "/case-studies/mahalaxmi-real-estate",
    },
    {
        title: "Ustart: Zero-Commission Cab & Bike App",
        client: "Ustart",
        clientColor: "#00adef",
        tags: ["React Native", "Mobile App"],
        stat: "0%",
        statLabel: "Commission",
        description: "A highly optimized, native-performance ride hailing platform for cabs and bikes using custom Native Modules.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
        link: "/case-studies/ustart",
    },
    {
        title: "Unisphere: Highly Secure Exam Portal",
        client: "BML Munjal University",
        clientColor: "#00adef",
        tags: ["EKS", "Node.js"],
        stat: "100%",
        statLabel: "Uptime Under Load",
        description: "A massive-scale university assessment portal with impenetrable browser security and Kubernetes-driven microservices.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        link: "/case-studies/unisphere-exam-portal",
    },
    {
        title: "Unisphere: Full College Management System",
        client: "BML Munjal University",
        clientColor: "#00adef",
        tags: ["React Native", "Mobile App"],
        stat: "5k+",
        statLabel: "Daily Users",
        description: "An all-in-one mobile app to digitalize campus operations including gatepasses, shuttles, and cafeteria bookings.",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
        link: "/case-studies/unisphere-app",
    },
];

const featured = caseStudies[0];
const remaining = caseStudies.slice(1);

function CaseStudiesHero() {
    return (
        <section className="pt-32 pb-16 bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
                    className="max-w-3xl"
                >
                    <span className="text-primary italic font-serif text-lg">Case Studies</span>
                    <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                        Real <span className="text-primary italic">results</span> from real clients
                    </h1>
                    <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
                        From mobile apps to cloud CRMs, see how we&apos;ve helped businesses across industries build digital products that drive growth.
                    </p>
                </motion.div>

                {/* Aggregate stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
                    className="mt-12 flex flex-wrap gap-8 md:gap-16 border-t border-white/10 pt-8"
                >
                    {[
                        { value: "7+", label: "Projects Shipped" },
                        { value: "5+", label: "Industries" },
                        { value: "100%", label: "Client Retention" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                            <span className="ml-2 text-sm text-gray-400">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function FeaturedCaseStudy() {
    return (
        <section className="bg-dark pb-24">
            <div className="container mx-auto px-6">
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
                >
                    <Link href={featured.link} className="group block">
                        <div className="grid lg:grid-cols-2 gap-0 bg-navy/50 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-300">
                            {/* Image */}
                            <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                                <Image
                                    src={featured.image}
                                    alt={featured.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span style={{ color: featured.clientColor }} className="font-bold text-lg">{featured.client}</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">Featured</span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-serif text-white group-hover:text-primary transition-colors leading-tight">
                                    {featured.title}
                                </h2>

                                <p className="mt-4 text-gray-400 leading-relaxed">{featured.description}</p>

                                <div className="mt-8 flex items-center justify-between">
                                    <div>
                                        <span className="text-3xl font-bold text-primary">{featured.stat}</span>
                                        <span className="ml-2 text-sm text-gray-400">{featured.statLabel}</span>
                                    </div>
                                    <span className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary transition-colors">
                                        Read Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>

                                <div className="mt-6 flex gap-2">
                                    {featured.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.article>
            </div>
        </section>
    );
}

function CaseStudiesGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {remaining.map((study, index) => (
                        <motion.article
                            key={study.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
                        >
                            <Link href={study.link} className="group block h-full">
                                <div className="bg-light rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-200 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                            <span style={{ color: study.clientColor }} className="font-bold">{study.client}</span>
                                            <div className="flex gap-2">
                                                {study.tags.map((tag) => (
                                                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-white rounded-full text-gray-600">{tag}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <h2 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors line-clamp-2">
                                            {study.title}
                                        </h2>

                                        <p className="mt-3 text-gray-500 text-sm line-clamp-2 flex-grow">{study.description}</p>

                                        <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-primary">{study.stat}</span>
                                                <span className="ml-2 text-sm text-gray-400">{study.statLabel}</span>
                                            </div>
                                            <span className="flex items-center gap-1 text-sm font-medium text-dark group-hover:text-primary transition-colors">
                                                Read Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CaseStudiesCTA() {
    return (
        <section className="py-24 bg-dark">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        Want similar <span className="text-primary italic">results</span>?
                    </h2>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can help your business achieve its digital goals.
                    </p>
                    <Link
                        href="/contact-us"
                        className="group mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-dark font-semibold rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all duration-200"
                    >
                        Start Your Success Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default function CaseStudiesContent() {
    return (
        <>
            <CaseStudiesHero />
            <FeaturedCaseStudy />
            <CaseStudiesGrid />
            <CaseStudiesCTA />
        </>
    );
}
