"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

// Comprehensive FAQ data organized by category for SEO
const faqCategories = [
    {
        category: "AI Solutions & Machine Learning",
        icon: "🤖",
        faqs: [
            {
                question: "What AI solutions does Innodify offer?",
                answer: "We offer comprehensive AI solutions including machine learning model development, natural language processing (NLP), computer vision, predictive analytics, AI-powered chatbots, recommendation engines, and custom AI integrations. Our solutions help businesses automate processes, gain insights from data, and enhance customer experiences."
            },
            {
                question: "How long does it take to develop a custom AI solution?",
                answer: "Development timelines vary based on complexity. Simple AI chatbots can be deployed in 4-6 weeks, while complex machine learning models with custom training may take 3-6 months. We follow an agile approach with regular milestones to ensure transparency throughout the development process."
            },
            {
                question: "Do you provide AI consulting services?",
                answer: "Yes, we offer AI consulting to help businesses identify opportunities for AI implementation, evaluate ROI potential, and create strategic roadmaps. Our consultants assess your current infrastructure, data assets, and business goals to recommend the most impactful AI solutions."
            },
            {
                question: "What industries do you serve with AI solutions?",
                answer: "We serve diverse industries including healthcare (diagnostics, patient monitoring), fintech (fraud detection, credit scoring), eCommerce (recommendations, demand forecasting), logistics (route optimization), education (personalized learning), and real estate (property valuation, virtual staging)."
            },
            {
                question: "Can you integrate AI into our existing systems?",
                answer: "Absolutely. We specialize in integrating AI capabilities into existing software ecosystems. Whether it's adding intelligent automation to your CRM, implementing AI-powered search, or enhancing your mobile app with machine learning features, we ensure seamless integration with minimal disruption."
            },
        ]
    },
    {
        category: "CRM Development",
        icon: "📊",
        faqs: [
            {
                question: "What CRM platforms do you work with?",
                answer: "We develop custom CRM solutions from scratch and also customize existing platforms like Salesforce, HubSpot, Zoho, and Microsoft Dynamics. Our custom CRMs are tailored to your specific workflows, integrations, and reporting needs."
            },
            {
                question: "How much does custom CRM development cost?",
                answer: "Custom CRM development costs range from $25,000 for basic systems to $150,000+ for enterprise solutions with advanced features. Factors include user count, integrations required, custom workflows, reporting complexity, and mobile accessibility needs. We provide detailed quotes after understanding your requirements."
            },
            {
                question: "Can you migrate data from our existing CRM?",
                answer: "Yes, we handle complete CRM data migrations including customer records, interaction history, documents, and custom fields. We ensure data integrity, perform thorough testing, and provide training on the new system. Migration typically takes 2-4 weeks depending on data volume."
            },
            {
                question: "Do your CRMs integrate with other business tools?",
                answer: "Our CRMs integrate with popular business tools including email platforms (Gmail, Outlook), marketing automation (Mailchimp, HubSpot), accounting software (QuickBooks, Xero), communication tools (Slack, Teams), and payment processors (Stripe, PayPal). We also build custom API integrations."
            },
            {
                question: "Do you provide CRM training and support?",
                answer: "We provide comprehensive training including user manuals, video tutorials, and live training sessions. Post-launch support includes bug fixes, feature enhancements, and technical assistance. We offer flexible support packages from basic maintenance to 24/7 enterprise support."
            },
        ]
    },
    {
        category: "SaaS Product Development",
        icon: "☁️",
        faqs: [
            {
                question: "What is your SaaS development process?",
                answer: "Our SaaS development follows a structured approach: Discovery & Planning (2-3 weeks), UI/UX Design (3-4 weeks), MVP Development (8-12 weeks), Testing & QA (2-3 weeks), Launch & Iteration. We use agile sprints with bi-weekly demos to ensure alignment with your vision."
            },
            {
                question: "Which technologies do you use for SaaS development?",
                answer: "We use modern, scalable technologies: React/Next.js or Vue for frontends, Node.js/Python/Go for backends, PostgreSQL/MongoDB for databases, AWS/GCP/Azure for cloud infrastructure, and Docker/Kubernetes for containerization. Technology choices depend on your specific requirements."
            },
            {
                question: "How do you handle SaaS security and compliance?",
                answer: "Security is built into every layer: SOC 2 compliant processes, data encryption (at rest and in transit), role-based access control, regular security audits, and penetration testing. We also help with GDPR, HIPAA, and PCI-DSS compliance as needed."
            },
            {
                question: "Can you build multi-tenant SaaS applications?",
                answer: "Yes, we specialize in multi-tenant architecture allowing you to serve multiple customers from a single codebase while keeping their data isolated. This approach reduces infrastructure costs and simplifies maintenance while providing customization options per tenant."
            },
            {
                question: "Do you offer SaaS maintenance and scaling services?",
                answer: "We provide ongoing maintenance including performance monitoring, security updates, bug fixes, and feature development. As your user base grows, we help scale infrastructure, optimize databases, implement caching strategies, and ensure 99.9% uptime."
            },
        ]
    },
    {
        category: "Web Development",
        icon: "🌐",
        faqs: [
            {
                question: "What types of websites do you develop?",
                answer: "We develop corporate websites, eCommerce stores, web applications, portals, landing pages, and progressive web apps (PWAs). From simple brochure sites to complex platforms with real-time features, we handle projects of all scales."
            },
            {
                question: "Do you build responsive websites?",
                answer: "Absolutely. All our websites are mobile-first and fully responsive across devices (desktop, tablet, mobile). We test on multiple browsers and devices to ensure consistent experiences. We also optimize for various screen sizes and orientations."
            },
            {
                question: "What is your web development tech stack?",
                answer: "We primarily use Next.js, React, Vue.js, and Angular for frontends. Backend technologies include Node.js, Python (Django/FastAPI), and PHP (Laravel). We use headless CMS solutions like Strapi, Contentful, and Sanity for content management."
            },
            {
                question: "How do you optimize websites for SEO?",
                answer: "Our SEO optimization includes semantic HTML structure, meta tags optimization, schema markup, fast loading speeds (Core Web Vitals), mobile optimization, XML sitemaps, clean URLs, image optimization, and accessibility compliance. We also integrate analytics for ongoing SEO monitoring."
            },
            {
                question: "Do you provide website hosting and maintenance?",
                answer: "Yes, we offer managed hosting on AWS, Vercel, or custom infrastructure. Maintenance packages include security updates, performance monitoring, content updates, backup management, SSL certificate renewal, and 24/7 uptime monitoring."
            },
            {
                question: "How long does it take to build a website?",
                answer: "Simple websites take 2-4 weeks, medium complexity sites 4-8 weeks, and complex web applications 8-16+ weeks. Timeline depends on design requirements, features, integrations, and content readiness. We provide detailed project schedules upfront."
            },
        ]
    },
    {
        category: "Mobile App Development",
        icon: "📱",
        faqs: [
            {
                question: "Do you develop iOS, Android, or both?",
                answer: "We develop for both platforms. We build native apps using Swift (iOS) and Kotlin (Android), as well as cross-platform apps using React Native and Flutter. Cross-platform development is cost-effective and ensures consistent experiences across devices."
            },
            {
                question: "How much does mobile app development cost?",
                answer: "Costs vary widely: simple apps start around $25,000-$50,000, medium complexity apps $50,000-$150,000, and enterprise apps $150,000+. Factors include platform choice, feature complexity, backend requirements, third-party integrations, and design sophistication."
            },
            {
                question: "Do you help with app store submission?",
                answer: "Yes, we handle the entire submission process including app store optimization (ASO), screenshot preparation, description writing, compliance review, and addressing any rejections. We ensure your app meets Apple App Store and Google Play guidelines."
            },
            {
                question: "Can you add features to an existing mobile app?",
                answer: "We regularly enhance existing apps with new features, performance improvements, UI refreshes, and new integrations. We conduct code audits to understand your current architecture before proposing enhancements."
            },
            {
                question: "Do you provide app maintenance and updates?",
                answer: "We offer comprehensive app maintenance including OS compatibility updates, bug fixes, performance optimization, security patches, and feature updates. We also monitor app analytics and gather user feedback for continuous improvement."
            },
        ]
    },
    {
        category: "eCommerce Solutions",
        icon: "🛒",
        faqs: [
            {
                question: "Which eCommerce platforms do you work with?",
                answer: "We work with Shopify, Shopify Plus, WooCommerce, Magento, BigCommerce, and custom headless commerce solutions. Platform selection depends on your catalog size, customization needs, budget, and growth plans."
            },
            {
                question: "Can you migrate my store to a new platform?",
                answer: "Yes, we handle complete eCommerce migrations including products, customers, orders, reviews, and SEO data. We ensure zero downtime during migration and implement redirects to preserve search rankings. Typical migrations take 4-8 weeks."
            },
            {
                question: "Do you integrate payment gateways?",
                answer: "We integrate all major payment gateways including Stripe, PayPal, Razorpay, Square, Authorize.net, and local payment methods. We also implement buy-now-pay-later options, cryptocurrency payments, and subscription billing."
            },
            {
                question: "Can you optimize my store's conversion rate?",
                answer: "We offer CRO services including A/B testing, checkout optimization, page speed improvements, trust signal implementation, cart abandonment recovery, and personalized recommendations. Our data-driven approach typically improves conversions by 20-40%."
            },
            {
                question: "Do you provide eCommerce marketing integrations?",
                answer: "We integrate marketing tools including email platforms (Klaviyo, Mailchimp), SMS marketing, loyalty programs, affiliate systems, social commerce (Instagram, Facebook shops), and analytics platforms (Google Analytics 4, Mixpanel)."
            },
        ]
    },
    {
        category: "Project Process & Pricing",
        icon: "💼",
        faqs: [
            {
                question: "How do you price your projects?",
                answer: "We offer both fixed-price and time-and-materials pricing. Fixed-price is ideal for well-defined projects, while T&M suits evolving requirements. We provide detailed estimates after discovery sessions. Typical projects range from $15,000 to $500,000+ depending on scope."
            },
            {
                question: "What is your payment structure?",
                answer: "Typical payment structure: 25% upfront to begin, 25% at design approval, 25% at development completion, 25% at launch. For larger projects, we offer monthly milestone-based payments. We accept wire transfers, credit cards, and various international payment methods."
            },
            {
                question: "How do you communicate during projects?",
                answer: "We assign a dedicated project manager and use tools like Slack for daily communication, Jira/Linear for task tracking, Figma for design collaboration, and regular video calls (weekly or bi-weekly). You'll have full visibility into project progress."
            },
            {
                question: "Do you sign NDAs and contracts?",
                answer: "Yes, we sign NDAs before discussing confidential information and provide detailed service agreements covering scope, timeline, deliverables, IP ownership, payment terms, and warranties. Your intellectual property rights are fully protected."
            },
            {
                question: "What happens after project completion?",
                answer: "We provide documentation, training sessions, and warranty period (typically 30-60 days). We offer ongoing support packages for maintenance, updates, and enhancements. Many clients continue with us for long-term partnerships."
            },
            {
                question: "Do you offer refunds if I'm not satisfied?",
                answer: "We have milestone-based approval processes to ensure satisfaction at each stage. If issues arise, we work to resolve them. For significant problems, we offer partial refunds based on work completed. Our focus is always on delivering value and maintaining relationships."
            },
        ]
    },
    {
        category: "Working With Innodify",
        icon: "🤝",
        faqs: [
            {
                question: "Where is Innodify located?",
                answer: "We're a digital-first agency serving clients globally. While we have team members across multiple time zones, we ensure overlap with your working hours for seamless collaboration. We've successfully delivered projects for clients in North America, Europe, Asia, and beyond."
            },
            {
                question: "What is your team structure?",
                answer: "Our team includes product strategists, UI/UX designers, full-stack developers, mobile developers, QA engineers, DevOps specialists, and project managers. For each project, we assemble a dedicated team based on the required expertise."
            },
            {
                question: "How quickly can you start a new project?",
                answer: "Depending on our current capacity, we can typically start new projects within 1-2 weeks. For larger engagements, we recommend booking 2-4 weeks in advance. We also offer expedited timelines for urgent projects at premium rates."
            },
            {
                question: "Do you work with startups or only enterprises?",
                answer: "We work with businesses of all sizes—from early-stage startups to Fortune 500 enterprises. Our scalable approach means we can tailor our processes and team size to match your needs and budget. We've helped numerous startups build MVPs and scale to millions of users."
            },
            {
                question: "Can we hire your developers on a dedicated basis?",
                answer: "Yes, we offer dedicated team models where developers work exclusively on your project. This is ideal for long-term engagements. Developers integrate with your workflows, attend your standups, and operate as an extension of your internal team."
            },
            {
                question: "What makes Innodify different from other agencies?",
                answer: "We combine deep technical expertise with business acumen. Our team doesn't just write code—we understand your market, users, and goals. We focus on outcomes over outputs, prioritize communication, use cutting-edge technologies, and build solutions that scale."
            },
        ]
    },
];

// Flatten all FAQs for search
const allFaqs = faqCategories.flatMap(cat =>
    cat.faqs.map(faq => ({ ...faq, category: cat.category, icon: cat.icon }))
);

export default function FaqContent() {
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedIndex, setExpandedIndex] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    // Filter FAQs based on search query
    const filteredFaqs = useMemo(() => {
        if (!searchQuery.trim()) {
            if (activeCategory) {
                return allFaqs.filter(faq => faq.category === activeCategory);
            }
            return allFaqs;
        }
        const query = searchQuery.toLowerCase();
        return allFaqs.filter(faq =>
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query) ||
            faq.category.toLowerCase().includes(query)
        );
    }, [searchQuery, activeCategory]);

    const toggleFaq = (id: string) => {
        setExpandedIndex(expandedIndex === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-[#0e1012] pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#00adef]/10 border border-[#00adef]/30 rounded-full px-4 py-2 mb-6">
                            <HelpCircle className="w-4 h-4 text-[#00adef]" />
                            <span className="text-sm text-[#00adef] font-medium">Help Center</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Frequently Asked <span className="text-[#00adef] italic">Questions</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-8">
                            Find answers to common questions about our services, process, and pricing.
                            Can't find what you're looking for? Contact us directly.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00adef] shadow-lg"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        {searchQuery && (
                            <p className="mt-4 text-gray-400">
                                Found <span className="text-[#00adef] font-semibold">{filteredFaqs.length}</span> results
                            </p>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Category Filters */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
                <div className="container mx-auto px-6">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${!activeCategory
                                ? "bg-[#00adef] text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            All Topics
                        </button>
                        {faqCategories.map((cat) => (
                            <button
                                key={cat.category}
                                onClick={() => setActiveCategory(cat.category)}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${activeCategory === cat.category
                                    ? "bg-[#00adef] text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                <span>{cat.icon}</span>
                                {cat.category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    {filteredFaqs.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
                            <p className="text-gray-500 mb-6">
                                Try adjusting your search or browse all categories
                            </p>
                            <button
                                onClick={() => { setSearchQuery(""); setActiveCategory(null); }}
                                className="text-[#00adef] font-medium hover:underline"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    ) : (
                        <div className="space-y-4">
                            {filteredFaqs.map((faq, index) => {
                                const faqId = `${faq.category}-${index}`;
                                const isExpanded = expandedIndex === faqId;

                                return (
                                    <motion.div
                                        key={faqId}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.03 }}
                                        className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors"
                                    >
                                        <button
                                            onClick={() => toggleFaq(faqId)}
                                            className="w-full px-6 py-5 flex items-start gap-4 text-left"
                                        >
                                            <span className="text-xl flex-shrink-0 mt-0.5">{faq.icon}</span>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 pr-8">
                                                    {faq.question}
                                                </h3>
                                                {searchQuery && (
                                                    <span className="text-xs text-[#00adef] mt-1 block">
                                                        {faq.category}
                                                    </span>
                                                )}
                                            </div>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-5 pl-16">
                                                        <p className="text-gray-600 leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white border-t border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif text-[#0e1012] mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Our team is here to help. Reach out and we'll get back to you within 24 hours.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 bg-[#00adef] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0090c9] transition-colors"
                    >
                        Contact Us
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Schema.org FAQ structured data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": allFaqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </div>
    );
}
