// On the server, use the local express backend URL directly.
// On the client, use an empty string so requests go to the Next.js proxy rewrite.
const API_URL = typeof window === "undefined" 
    ? (process.env.INTERNAL_API_URL || 'http://127.0.0.1:5000') 
    : (process.env.NEXT_PUBLIC_API_URL || '');

import { BlogPost } from '@/data/blogs';

export async function fetchBlogs(): Promise<BlogPost[]> {
    try {
        const res = await fetch(`${API_URL}/api/blogs`, { cache: 'no-store' });
        if (!res.ok) {
            console.error('Failed to fetch blogs from backend');
            return [];
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const res = await fetch(`${API_URL}/api/blogs/${slug}`, { cache: 'no-store' });
        if (!res.ok) {
            if (res.status === 404) return null;
            console.error('Failed to fetch blog post from backend');
            return null;
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}
