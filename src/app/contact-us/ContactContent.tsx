"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";

// Hero Section
function ContactHero() {
    return (
        <section className="relative py-24 bg-[#0e1012] overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute w-96 h-96 rounded-full bg-[#00adef] blur-3xl -top-48 right-1/4" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="text-[#00adef] italic font-serif text-lg">Get in Touch</span>
                    <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                        Let's build something <span className="text-[#00adef] italic">amazing</span> together
                    </h1>
                    <p className="mt-6 text-lg text-gray-300">
                        Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Contact Form Section
function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you! We'll be in touch soon.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0e1012]">
                            Contact Information
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Fill out the form and our team will get back to you within 24 hours.
                            Or reach out directly using the information below.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#00adef]/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-[#00adef]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0e1012]">Email Us</h3>
                                    <a href="mailto:support@innodify.co.in" className="text-gray-600 hover:text-[#00adef] transition-colors">
                                        support@innodify.co.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#00adef]/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-[#00adef]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0e1012]">Call Us</h3>
                                    <a href="tel:+917984371199" className="text-gray-600 hover:text-[#00adef] transition-colors block">
                                        +91 79843 71199
                                    </a>
                                    <a href="tel:+919104241907" className="text-gray-600 hover:text-[#00adef] transition-colors block">
                                        +91 91042 41907
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#00adef]/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-[#00adef]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0e1012]">Visit Us</h3>
                                    <p className="text-gray-600">
                                        6th Floor, 602 Sundram Plus,<br />
                                        Timaliyawad, Athugar St, Kharwawad,<br />
                                        Nanpura, Surat, Gujarat 395001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#00adef]/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-[#00adef]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0e1012]">Business Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Saturday: 10:00 AM - 7:00 PM IST
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-12 p-6 bg-[#f8f8f8] rounded-xl">
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-6 h-6 text-[#00adef]" />
                                <span className="font-semibold text-[#0e1012]">Quick Response</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                                Average response time: Under 4 hours during business hours
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-[#f8f8f8] rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#0e1012] mb-2">
                                        Full Name *
                                    </label>
                                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/20 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#0e1012] mb-2">
                                        Email Address *
                                    </label>
                                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/20 outline-none transition-all" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-[#0e1012] mb-2">
                                        Company Name
                                    </label>
                                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/20 outline-none transition-all" placeholder="Acme Inc." />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-[#0e1012] mb-2">
                                        Phone Number
                                    </label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/20 outline-none transition-all" placeholder="+1 (234) 567-890" />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-[#0e1012] mb-2">
                                        Service Interested In
                                    </label>
                                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/20 outline-none transition-all bg-white">
                                        <option value="">Select a service</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="mobile-apps">Mobile Apps</option>
                                        <option value="saas-products">SaaS Products</option>
                                        <option value="ai-solutions">AI Solutions</option>
                                        <option value="ecommerce">eCommerce</option>
                                        <option value="crm-development">CRM Development</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                            </div>

                            <div className="mt-6">
                                <label htmlFor="message" className="block text-sm font-medium text-[#0e1012] mb-2">
                                    Project Details *
                                </label>
                                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 text-base rounded-lg border border-gray-200 focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/20 outline-none transition-all resize-none" placeholder="Tell us about your project..." />
                            </div>

                            <button type="submit" className="mt-6 w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#00adef] text-[#0e1012] font-semibold rounded-lg hover:bg-[#00adef]/90 transition-colors">
                                Send Message
                                <Send size={18} />
                            </button>

                            <p className="mt-4 text-xs text-gray-500 text-center">
                                By submitting this form, you agree to our privacy policy.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// FAQ Section
function FAQSection() {
    const faqs = [
        { question: "How long does a typical project take?", answer: "Timeline varies based on complexity. A standard Shopify store takes 4-6 weeks, while enterprise Magento projects may take 3-6 months." },
        { question: "Do you offer ongoing support?", answer: "Yes! We offer maintenance and support packages to keep your store running smoothly after launch." },
        { question: "What's your pricing model?", answer: "We offer both fixed-price projects and retainer-based engagements depending on your needs." },
    ];

    return (
        <section className="py-24 bg-[#f8f8f8]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <span className="text-[#00adef] italic font-serif text-lg">FAQ</span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0e1012]">Common Questions</h2>
                </motion.div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl p-6">
                            <h3 className="font-semibold text-[#0e1012]">{faq.question}</h3>
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ContactContent() {
    return (
        <>
            <ContactHero />
            <ContactFormSection />
            <FAQSection />
        </>
    );
}
