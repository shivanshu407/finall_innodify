import type { Metadata } from "next";
import { getBlogBySlug, getBlogs } from "@/lib/server-api";
import BlogPostContent from "./BlogPostContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    const title = post.metaTitle || post.title;
    const description = post.metaDescription || post.excerpt;

    return {
        title,
        description,
        alternates: { canonical: `/blog/${slug}` },
        authors: post.author ? [{ name: post.author }] : undefined,
        openGraph: {
            title,
            description,
            url: `https://innodify.in/blog/${slug}`,
            type: "article",
            publishedTime: post.date,
            authors: post.author ? [post.author] : undefined,
            tags: post.category ? [post.category] : undefined,
            images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: post.image ? [post.image] : ["/innodify-logo.svg"],
        },
    };
}

export async function generateStaticParams() {
    try {
        const blogs = await getBlogs();
        return blogs.map((post) => ({ slug: post.slug }));
    } catch {
        return [];
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    const allBlogs = await getBlogs();
    const recommendedPosts = allBlogs
        .filter((b) => b.slug !== slug)
        .sort((a, b) => {
            if (a.category === post.category && b.category !== post.category) return -1;
            if (a.category !== post.category && b.category === post.category) return 1;
            return 0;
        })
        .slice(0, 3);

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        image: post.image,
        author: {
            "@type": "Person",
            name: post.author || "Innodify Team",
        },
        publisher: {
            "@type": "Organization",
            "@id": "https://innodify.in/#organization",
            name: "Innodify",
            logo: {
                "@type": "ImageObject",
                url: "https://innodify.in/innodify-logo.svg",
            },
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: `https://innodify.in/blog/${slug}`,
        articleSection: post.category,
    };

    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://innodify.in" },
                    { name: "Blog", url: "https://innodify.in/blog" },
                    { name: post?.title || "Post", url: `https://innodify.in/blog/${slug}` },
                ]}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <BlogPostContent post={post} recommendedPosts={recommendedPosts} />
        </>
    );
}
