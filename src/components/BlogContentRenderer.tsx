"use client";

import Link from "next/link";

export function slugify(text: string) {
    return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

export function extractHeadings(content: string) {
    const lines = content.split('\n');
    const headings: { id: string; text: string; level: number }[] = [];
    
    lines.forEach((line) => {
        if (line.startsWith('#### ')) {
            const text = line.replace('#### ', '');
            headings.push({ id: slugify(text), text, level: 4 });
        } else if (line.startsWith('### ')) {
            const text = line.replace('### ', '');
            headings.push({ id: slugify(text), text, level: 3 });
        } else if (line.startsWith('## ')) {
            const text = line.replace('## ', '');
            headings.push({ id: slugify(text), text, level: 2 });
        }
    });
    
    return headings;
}

interface BlogContentRendererProps {
    content: string;
    className?: string;
}

/**
 * Reusable component for rendering blog content with markdown-like syntax.
 * Updated for the dark-themed redesign with heading IDs for standard scroll-spying TOCs.
 */
export default function BlogContentRenderer({ content, className = "" }: BlogContentRendererProps) {
    const renderText = (text: string) => {
        // Parse bold text and links
        const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
        return parts.map((part, i) => {
            // Bold text
            if (part.startsWith("**") && part.endsWith("**")) {
                return (
                    <strong key={i} className="text-white font-semibold">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            // Links
            if (part.startsWith("[") && part.includes("](")) {
                const match = part.match(/\[(.*?)\]\((.*?)\)/);
                if (match) {
                    const label = match[1];
                    const url = match[2];
                    const isExternal = url.startsWith("http");
                    return (
                        <Link
                            key={i}
                            href={url}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="text-[#00adef] font-medium hover:underline transition-all"
                        >
                            {label}
                        </Link>
                    );
                }
            }
            return part;
        });
    };

    const lines = content.split('\n');

    return (
        <div className={`prose prose-invert prose-lg max-w-none ${className}`}>
            <div className="text-[#d1d5db] leading-relaxed font-sans space-y-4">
                {lines.map((line, i) => {
                    // H4 Headers (check before H3 since #### starts with ###)
                    if (line.startsWith('#### ')) {
                        const rawText = line.replace('#### ', '');
                        return (
                            <h4 id={slugify(rawText)} key={i} className="text-xl font-serif text-[#e5e7eb] mt-8 mb-3 scroll-mt-24">
                                {rawText}
                            </h4>
                        );
                    }
                    // H3 Headers (check before H2 since ### starts with ##)
                    if (line.startsWith('### ')) {
                        const rawText = line.replace('### ', '');
                        return (
                            <h3 id={slugify(rawText)} key={i} className="text-2xl font-serif text-white mt-10 mb-4 scroll-mt-24">
                                {rawText}
                            </h3>
                        );
                    }
                    // H2 Headers
                    if (line.startsWith('## ')) {
                        const rawText = line.replace('## ', '');
                        return (
                            <h2 id={slugify(rawText)} key={i} className="text-3xl font-serif text-white mt-12 mb-5 scroll-mt-24">
                                {rawText}
                            </h2>
                        );
                    }
                    // Bullet points
                    if (line.startsWith('- ')) {
                        return (
                            <div key={i} className="flex gap-3 ml-4">
                                <span className="text-[#00adef] font-bold">•</span>
                                <p className="text-[#d1d5db]">{renderText(line.replace('- ', ''))}</p>
                            </div>
                        );
                    }
                    // Images
                    if (line.startsWith('![')) {
                        const match = line.match(/!\[(.*?)\]\((.*?)\)/);
                        if (match) {
                            const alt = match[1];
                            const src = match[2];
                            return (
                                <div key={i} className="my-8 space-y-2 flex flex-col items-center">
                                    <img
                                        src={src}
                                        alt={alt}
                                        className="w-full max-w-[700px] h-auto max-h-[400px] object-cover rounded-xl border border-[#2a2f36] shadow-2xl"
                                    />
                                    {alt && (
                                        <p className="text-center text-sm text-[#6b7280] italic max-w-[400px]">
                                            {alt}
                                        </p>
                                    )}
                                </div>
                            );
                        }
                    }
                    // Empty lines
                    if (line.trim() === '') {
                        return <div key={i} className="h-4" />;
                    }
                    // Regular paragraphs
                    return <p key={i} className="text-[#d1d5db]">{renderText(line)}</p>;
                })}
            </div>
        </div>
    );
}
