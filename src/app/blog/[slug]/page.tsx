import type { Metadata } from "next";
import { defaultBlogs } from "@/data/blogs";
import BlogPostContent from "./BlogPostContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = defaultBlogs.find((b) => b.slug === slug);

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
    return defaultBlogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = defaultBlogs.find((b) => b.slug === slug);

    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://innodify.in" },
                    { name: "Blog", url: "https://innodify.in/blog" },
                    { name: post?.title || "Post", url: `https://innodify.in/blog/${slug}` },
                ]}
            />
            <BlogPostContent />
        </>
    );
}
