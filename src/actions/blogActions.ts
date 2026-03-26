'use server';

import { BlogPost } from '@/data/blogs';
import { revalidatePath } from 'next/cache';

const API_URL = process.env.INTERNAL_API_URL || 'http://127.0.0.1:5000';

export async function addBlog(newBlog: BlogPost) {
    try {
        const response = await fetch(`${API_URL}/api/blogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBlog),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        revalidatePath('/blog');
        return { success: true };
    } catch (error: any) {
        console.error('Failed to add blog:', error);
        return { success: false, error: error.message || 'Failed to save blog to database.' };
    }
}

export async function deleteBlog(slug: string) {
    try {
        const response = await fetch(`${API_URL}/api/blogs/${slug}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        revalidatePath('/blog');
        return { success: true };
    } catch (error: any) {
        console.error('Failed to delete blog:', error);
        return { success: false, error: error.message || 'Failed to delete blog from database.' };
    }
}

export async function updateBlog(oldSlug: string, updatedBlog: BlogPost) {
    try {
        const response = await fetch(`${API_URL}/api/blogs/${oldSlug}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBlog),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        revalidatePath('/blog');
        revalidatePath(`/blog/${oldSlug}`);
        if (updatedBlog.slug && updatedBlog.slug !== oldSlug) {
            revalidatePath(`/blog/${updatedBlog.slug}`);
        }
        
        return { success: true };
    } catch (error: any) {
        console.error('Failed to update blog:', error);
        return { success: false, error: error.message || 'Failed to update blog in database.' };
    }
}
