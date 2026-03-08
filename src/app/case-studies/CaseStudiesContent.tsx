"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Store, Globe } from "lucide-react";
import Link from "next/link";

function CaseStudiesHero() {
    return (
        <section className="py-24 bg-[#0e1012]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto">
                    <span className="text-[#00adef] italic font-serif text-lg">Case Studies</span>
                    <h1 className="mt-4 text-4xl md:text-5xl font-serif text-white">Success Stories</h1>
                    <p className="mt-6 text-gray-300">Real results from real clients. See how we've helped brands grow their eCommerce business.</p>
                </motion.div>
            </div>
        </section>
    );
}

function CaseStudiesGrid() {
    const caseStudies = [
        { title: "Custom Flutter App for CVD Diamond Jewellery Brand", client: "Salt & Glitz", clientColor: "#E91E63", tags: ["Flutter", "iOS", "Android"], stat: "2", statLabel: "App Stores", description: "Custom Flutter mobile app published on both App Store and Play Store for a premium CVD diamond jewellery brand.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80", link: "/case-studies/salt-and-glitz-app" },
        { title: "Custom eCommerce Website for CVD Diamond Jewellery", client: "Salt & Glitz", clientColor: "#E91E63", tags: ["eCommerce", "Custom Website", "Web Development"], stat: "100%", statLabel: "Custom Built", description: "Fully custom eCommerce website for Salt & Glitz to showcase and sell their premium CVD lab-grown diamond jewellery collection.", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", link: "/case-studies/salt-and-glitz-website" },
        { title: "Shopify eCommerce Store for Premium Jewellery Brand", client: "D Khushalbhai Jewellers", clientColor: "#D4AF37", tags: ["Shopify", "eCommerce", "Payment Integration"], stat: "100%", statLabel: "Digital Presence", description: "Complete Shopify store development with payment gateway and delivery partner integrations for a premium gold, diamond, and silver jewellery retailer.", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80", link: "/case-studies/dkhushalbhai-jewellers" },
        { title: "Cloud-Based Transformation of Real Estate Operations", client: "Mahalaxmi Group", clientColor: "#00adef", tags: ["Cloud CRM", "Web App"], stat: "30%", statLabel: "Productivity", description: "How we helped Mahalaxmi Real Estate Group achieve 100% data security and boost productivity by 30% with a custom cloud-native CRM.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80", link: "/case-studies/mahalaxmi-real-estate" },
        { title: "Ustart: Zero-Commission Cab & Bike App", client: "Ustart", clientColor: "#00adef", tags: ["React Native", "Expo", "Native Modules"], stat: "0%", statLabel: "Commission", description: "A highly optimized, native-performance ride hailing platform for cabs and bikes using custom Native Modules.", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80", link: "/case-studies/ustart" },
        { title: "Unisphere: Highly Secure Exam Portal", client: "BML Munjal University", clientColor: "#00adef", tags: ["EKS", "Node.js", "SafeExamBrowser"], stat: "100%", statLabel: "Uptime Under Load", description: "A massive-scale university assessment portal with impenetrable browser security and Kubernetes-driven microservices.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", link: "/case-studies/unisphere-exam-portal" },
        { title: "Unisphere: Full College Management System", client: "BML Munjal University", clientColor: "#00adef", tags: ["React Native", "Mobile App", "Node.js"], stat: "5k+", statLabel: "Daily Users", description: "An all-in-one mobile app to digitalize campus operations including gatepasses, shuttles, and cafeteria bookings.", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80", link: "/case-studies/unisphere-app" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.article key={study.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-[#f8f8f8] rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow h-full">
                            <Link href={study.link || "#"} className="block h-full">
                                <div className="aspect-video overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${study.image})` }} />
                                </div>
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                                        <span style={{ color: study.clientColor }} className="font-bold text-lg">{study.client}</span>
                                        <div className="flex gap-2">
                                            {study.tags.slice(0, 2).map((tag) => (
                                                <span key={tag} className="px-3 py-1 text-xs font-medium bg-white rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-semibold text-[#0e1012] group-hover:text-[#00adef] transition-colors line-clamp-2">{study.title}</h2>
                                    <p className="mt-3 text-gray-600 text-sm line-clamp-2">{study.description}</p>
                                    <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                        <div>
                                            <span className="text-2xl font-bold text-[#00adef]">{study.stat}</span>
                                            <span className="ml-2 text-sm text-gray-500">{study.statLabel}</span>
                                        </div>
                                        <span className="flex items-center gap-1 text-sm font-medium text-[#0e1012] group-hover:text-[#00adef]">
                                            Read Case Study <ArrowRight size={14} />
                                        </span>
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
        <section className="py-24 bg-[#0e1012]">
            <div className="container mx-auto px-6 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-3xl md:text-4xl font-serif text-white">Want similar <span className="text-[#00adef] italic">results</span>?</h2>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Let's discuss how we can help your business achieve its eCommerce goals.</p>
                    <Link href="/contact-us" className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#00adef] text-[#0e1012] font-semibold rounded-full hover:bg-[#00adef]/90 transition-colors">
                        Start Your Success Story <ArrowRight size={18} />
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
            <CaseStudiesGrid />
            <CaseStudiesCTA />
        </>
    );
}
