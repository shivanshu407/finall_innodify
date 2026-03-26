import type { Metadata } from "next";
import { fetchBlogBySlug, fetchBlogs } from "@/lib/api";
import BlogPostContent from "./BlogPostContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await fetchBlogBySlug(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        alternates: { canonical: `/blog/${slug}` },
        openGraph: {
            title: post.metaTitle || post.title,
            description: post.metaDescription || post.excerpt,
            url: `https://innodify.in/blog/${slug}`,
            type: "article",
            images: post.image ? [{ url: post.image }] : undefined,
        },
    };
}

export async function generateStaticParams() {
    try {
        const blogs = await fetchBlogs();
        return blogs.map((post) => ({ slug: post.slug }));
    } catch {
        return [];
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await fetchBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    const allBlogs = await fetchBlogs();
    const recommendedPosts = allBlogs
        .filter((b) => b.slug !== slug)
        .sort((a, b) => {
            if (a.category === post.category && b.category !== post.category) return -1;
            if (a.category !== post.category && b.category === post.category) return 1;
            return 0;
        })
        .slice(0, 3);

    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://innodify.in" },
                    { name: "Blog", url: "https://innodify.in/blog" },
                    { name: post?.title || "Post", url: `https://innodify.in/blog/${slug}` },
                ]}
            />
            <BlogPostContent post={post} recommendedPosts={recommendedPosts} />
        </>
    );
}
