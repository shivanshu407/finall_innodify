"use client";

import { useEffect, useState } from "react";

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface BlogTableOfContentsProps {
    title: string;
    headings: Heading[];
}

export default function BlogTableOfContents({ title, headings }: BlogTableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);
                if (visibleEntries.length > 0) {
                    // Update active ID based on the first visible entry
                    setActiveId(visibleEntries[0].target.id);
                }
            },
            {
                rootMargin: "0px 0px -80% 0px", // Trigger when heading is near the top
                threshold: 1.0,
            }
        );

        // Observe all heading elements
        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]);

    const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Smooth scroll with offset for sticky header if needed
            window.scrollTo({
                top: element.offsetTop - 80, 
                behavior: "smooth"
            });
            // Update active state manually upon click to prevent lag
            setActiveId(id);
        }
    };

    if (headings.length === 0) return null;

    return (
        <aside className="sticky top-24 mr-8 lg:w-72 hidden md:block self-start">
            <h5 className="text-sm font-semibold tracking-wider text-[#9ca3af] uppercase mb-4">
                Table of Contents
            </h5>
            <h3 className="text-lg text-white font-serif font-black leading-snug mb-6 border-b border-[#2a2f36] pb-4">
                {title}
            </h3>
            <nav className="flex flex-col gap-1">
                {headings.map((heading, i) => {
                    const isActive = activeId === heading.id;
                    return (
                        <a
                            key={i}
                            href={`#${heading.id}`}
                            onClick={(e) => scrollToHeading(e, heading.id)}
                            className={`
                                py-2 pl-4 text-sm transition-all border-l-2
                                ${heading.level === 4 ? "ml-4" : ""}
                                ${isActive 
                                    ? "border-[#00adef] text-[#00adef] font-medium bg-[#00adef]/10" 
                                    : "border-transparent text-[#9ca3af] hover:text-white hover:border-[#4b5563]"
                                }
                            `}
                        >
                            {heading.text}
                        </a>
                    );
                })}
            </nav>
        </aside>
    );
}
