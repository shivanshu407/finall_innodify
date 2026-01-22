"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Bot, Database, Cloud, Code, ShoppingCart, Smartphone, Heart, Landmark, ShoppingBag, GraduationCap, Building2, Truck } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[] | { columns: { title: string; icon: React.ReactNode; items: DropdownItem[] }[] };
}

// Magento Icon SVG
const MagentoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7v10l3 1.73V8.73L12 5.46l6 3.27v10l3-1.73V7L12 2z" fill="#00adef" />
    <path d="M12 8.5L9 10.23v7.04L12 19l3-1.73v-7.04L12 8.5z" fill="#00adef" />
  </svg>
);

// Shopify Icon SVG
const ShopifyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15.5 3.5c-.3 0-.5.2-.5.5v.5h-1c-.1-.5-.4-1-.9-1.3-.4-.3-.9-.4-1.4-.3-.9.2-1.6.9-1.9 1.8l-.3.8h-.5c-.3 0-.5.2-.5.5v.5H7v12h10V6h-1v-.5h-.5v-.5c0-.3-.2-.5-.5-.5h-.5zm-3 1c.3 0 .6.1.8.3.2.2.3.4.4.7h-1.5l.3-.8c0-.1.1-.2.2-.2h.8zM9 8h6v8H9V8z" fill="#00adef" />
  </svg>
);

// Headless Icon SVG
const HeadlessIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" fill="#00adef" />
    <circle cx="20" cy="7" r="2" fill="#00adef" />
    <circle cx="20" cy="12" r="2" fill="#00adef" />
    <circle cx="20" cy="17" r="2" fill="#00adef" />
  </svg>
);

const navItems: NavItem[] = [
  {
    label: "Services",
    dropdown: [
      { label: "AI Solutions", href: "/services/ai-solutions", icon: <Bot className="w-5 h-5" /> },
      { label: "CRM Development", href: "/services/crm-development", icon: <Database className="w-5 h-5" /> },
      { label: "SaaS Products", href: "/services/saas-products", icon: <Cloud className="w-5 h-5" /> },
      { label: "Web Development", href: "/services/web-development", icon: <Code className="w-5 h-5" /> },
      { label: "eCommerce", href: "/services/ecommerce", icon: <ShoppingCart className="w-5 h-5" /> },
      { label: "Mobile Apps", href: "/services/mobile-apps", icon: <Smartphone className="w-5 h-5" /> },
    ],
  },
  {
    label: "Industries",
    dropdown: [
      { label: "Healthcare", href: "/industries/healthcare", icon: <Heart className="w-5 h-5" /> },
      { label: "Fintech", href: "/industries/fintech", icon: <Landmark className="w-5 h-5" /> },
      { label: "eCommerce", href: "/industries/ecommerce", icon: <ShoppingBag className="w-5 h-5" /> },
      { label: "Education", href: "/industries/education", icon: <GraduationCap className="w-5 h-5" /> },
      { label: "Real Estate", href: "/industries/real-estate", icon: <Building2 className="w-5 h-5" /> },
      { label: "Logistics", href: "/industries/logistics", icon: <Truck className="w-5 h-5" /> },
    ],
  },
];

const rightNavItems: NavItem[] = [
  {
    label: "Company",
    dropdown: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/career-at-innodify" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQ", href: "/faq" },
      { label: "Guides", href: "/guides" },
    ],
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0e1012] backdrop-blur-md shadow-lg py-3" : "bg-[#0e1012]/95 backdrop-blur-sm py-4"
          }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <img
                src="/innodify-logo.svg"
                alt="Innodify"
                className="h-10 w-auto group-hover:opacity-90 transition-opacity"
              />
            </a>

            {/* Desktop Navigation - Left */}
            <nav className="hidden lg:flex items-center gap-1 ml-12">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                >
                  <a
                    href={item.href || "#"}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${activeDropdown === item.label
                      ? "text-[#00adef]"
                      : "text-white/90 hover:text-white"
                      }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </a>
                </div>
              ))}
            </nav>

            {/* Desktop Navigation - Right */}
            <div className="hidden lg:flex items-center gap-1">
              {rightNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href || "#"}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${activeDropdown === item.label
                      ? "text-[#00adef]"
                      : "text-white/90 hover:text-white"
                      }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </a>
                  {/* Inline dropdown for right nav items */}
                  <AnimatePresence>
                    {activeDropdown === item.label && item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl py-2 min-w-[160px]"
                      >
                        {(item.dropdown as DropdownItem[]).map((dropItem) => (
                          <a
                            key={dropItem.label}
                            href={dropItem.href}
                            className="block px-4 py-2.5 text-gray-700 hover:text-[#00adef] hover:bg-gray-50 transition-colors font-medium text-sm"
                          >
                            {dropItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Contact Button */}
              <a
                href="/contact-us"
                className="ml-4 px-6 py-2 rounded-full border-2 border-[#00adef] text-[#00adef] text-sm font-semibold hover:bg-[#00adef] hover:text-[#0e1012] transition-all duration-300"
              >
                CONTACT
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menus - Only for Services/Industries */}
        <AnimatePresence>
          {activeDropdown && navItems.find((i) => i.label === activeDropdown)?.dropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-2xl"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container mx-auto px-6 py-8">
                {/* Simple Dropdown (Platforms) */}
                {navItems.find((i) => i.label === activeDropdown)?.dropdown &&
                  Array.isArray(
                    navItems.find((i) => i.label === activeDropdown)?.dropdown
                  ) && (
                    <div className="flex gap-8">
                      {(
                        navItems.find((i) => i.label === activeDropdown)
                          ?.dropdown as DropdownItem[]
                      ).map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-[#00adef]">{item.icon}</span>
                          <span className="font-medium text-gray-800 group-hover:text-[#00adef] transition-colors">
                            {item.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-[#0e1012] lg:hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img src="/innodify-logo.svg" alt="Innodify" className="h-8 w-auto" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="space-y-2">
                {[...navItems, ...rightNavItems].map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div className="border-b border-white/10 last:border-0">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full py-4 text-xl font-serif text-white hover:text-[#00adef] transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-[#00adef]" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-white/5 rounded-xl mb-4"
                            >
                              <div className="flex flex-col py-2">
                                {(item.dropdown as DropdownItem[]).map((subItem) => (
                                  <a
                                    key={subItem.label}
                                    href={subItem.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-6 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-3"
                                  >
                                    {subItem.icon && <span className="text-[#00adef]">{subItem.icon}</span>}
                                    {subItem.label}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href || "#"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 text-xl font-serif text-white hover:text-[#00adef] transition-colors border-b border-white/10"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
                <div className="pt-6">
                  <a
                    href="/contact-us"
                    className="flex items-center justify-center w-full px-8 py-4 bg-[#00adef] text-[#0e1012] font-semibold rounded-full hover:bg-[#00adef]/90 transition-colors"
                  >
                    CONTACT US
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
