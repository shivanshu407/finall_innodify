import type { Metadata } from "next";
import BlogContent from "./BlogContent";
import { getBlogs } from "@/lib/server-api";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Blog | Insights on Web, Mobile & AI Development",
    description:
        "Expert insights on eCommerce, web development, AI, and digital strategy from the Innodify team. Tips, tutorials, and guides to grow your digital business.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "Blog | Insights on Web, Mobile & AI Development",
        description: "Expert insights on eCommerce, web development, and digital strategy.",
        url: "https://innodify.in/blog",
    },
};

export default async function BlogPage() {
    const blogs = await getBlogs();

    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://innodify.in" },
                    { name: "Blog", url: "https://innodify.in/blog" },
                ]}
            />
            <BlogContent initialPosts={blogs} />
        </>
    );
}
