"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ShoppingCart, CreditCard, Truck, Gem, Shield, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DKhushalbhaiJewellersCaseStudy() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#0e1012] pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1012] via-[#0e1012]/80 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Case Studies
                    </Link>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#D4AF37] font-semibold tracking-wider text-sm uppercase">Jewellery • Shopify • eCommerce</span>
                            <h1 className="mt-4 text-4xl md:text-6xl font-serif text-white leading-tight">
                                Premium Jewellery Store <br />
                                <span className="text-[#D4AF37] italic">Goes Digital</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                                How D Khushalbhai Jewellers launched their complete eCommerce presence with Shopify, integrated payment gateways, and delivery partners.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-white/10 pt-8"
                        >
                            <div>
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-sm text-gray-400 mt-1">Online Presence</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">3</div>
                                <div className="text-sm text-gray-400 mt-1">Payment Gateways</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">5+</div>
                                <div className="text-sm text-gray-400 mt-1">Delivery Partners</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">1000+</div>
                                <div className="text-sm text-gray-400 mt-1">Products Listed</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Client & Challenge */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-[#0e1012] mb-4">About Client</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                D Khushalbhai Jewellers is a trusted name in the jewellery industry, known for their exquisite collection of real gold jewellery, diamond jewellery, and silver jewellery. With decades of experience in traditional retail, they sought to expand their reach through a modern digital storefront while maintaining the premium experience their customers expect.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium">Gold Jewellery</span>
                                <span className="px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium">Diamond Jewellery</span>
                                <span className="px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium">Silver Jewellery</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold text-[#0e1012] mb-6">The Requirements</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <ShoppingCart size={14} className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Complete eCommerce Store</h3>
                                        <p className="text-sm text-gray-600 mt-1">A premium-looking online store showcasing their entire jewellery collection.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CreditCard size={14} className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Payment Gateway Integration</h3>
                                        <p className="text-sm text-gray-600 mt-1">Secure payment processing for high-value jewellery transactions.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-6 h-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Truck size={14} className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Delivery Partner Integration</h3>
                                        <p className="text-sm text-gray-600 mt-1">Reliable and insured shipping for valuable jewellery items.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-[#0e1012] text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="text-[#D4AF37] font-semibold tracking-wider text-sm uppercase">The Solution</span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-serif">
                            Complete <span className="text-[#D4AF37] italic">Shopify Store</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            We built a stunning Shopify store that reflects the premium nature of D Khushalbhai Jewellers' brand with all essential integrations.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Gem,
                                title: "Premium Shopify Theme",
                                description: "Custom-designed storefront with elegant product galleries, zoom functionality, and detailed product pages that showcase each piece beautifully."
                            },
                            {
                                icon: CreditCard,
                                title: "Payment Gateways",
                                description: "Integrated multiple payment options including Razorpay, PayU, and bank transfers to provide flexibility for high-value purchases."
                            },
                            {
                                icon: Truck,
                                title: "Delivery Partners",
                                description: "Connected with trusted delivery partners offering insured shipping for valuable jewellery items with real-time tracking."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="text-[#D4AF37]" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-16 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {["Shopify", "Razorpay", "PayU", "Shiprocket", "Delhivery"].map((tech) => (
                            <span key={tech} className="text-xl font-bold text-gray-400 flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-[#D4AF37]" />
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-[#0e1012] mb-8">
                                Delivered <span className="text-[#D4AF37] italic">Results</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Shield className="text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">Complete Digital Presence</h3>
                                        <p className="text-gray-600">Full-fledged online store showcasing their entire jewellery collection with professional imagery.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CreditCard className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">Secure Payment Processing</h3>
                                        <p className="text-gray-600">Multiple payment gateway options enabling safe transactions for high-value jewellery purchases.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Zap className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0e1012]">Nationwide Delivery</h3>
                                        <p className="text-gray-600">Integrated delivery partners ensuring safe, insured shipping across India.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0e1012] rounded-3xl p-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <span className="text-9xl font-serif text-white">"</span>
                            </div>
                            <blockquote className="relative z-10">
                                <p className="text-xl md:text-2xl text-white leading-relaxed italic">
                                    "Innodify transformed our traditional jewellery business into a modern online store. The website beautifully showcases our gold, diamond, and silver collections. The payment and delivery integrations work flawlessly."
                                </p>
                                <footer className="mt-8 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        D
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Owner</div>
                                        <div className="text-gray-400 text-sm">D Khushalbhai Jewellers</div>
                                    </div>
                                </footer>
                            </blockquote>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif text-[#0e1012] mb-6">
                        Ready to take your business online?
                    </h2>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0090c9] transition-colors"
                    >
                        Start Your Project
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
