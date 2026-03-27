import connectDB from './db';
import Blog from '@/models/Blog';
import { BlogPost } from '@/data/blogs';

export async function getBlogs(): Promise<BlogPost[]> {
    try {
        await connectDB();
        const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
        
        return blogs.map((blog: any) => {
            const { _id, createdAt, updatedAt, ...rest } = blog;
            return {
                ...rest,
                _id: _id?.toString(),
            };
        }) as BlogPost[];
    } catch (error) {
        console.error('Error fetching blogs from DB:', error);
        return [];
    }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    try {
        await connectDB();
        const blog = await Blog.findOne({ slug }).lean();
        if (!blog) return null;
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const b = blog as any;
        const { _id, createdAt, updatedAt, ...rest } = b;
        return {
            ...rest,
            _id: _id?.toString(),
        } as BlogPost;
    } catch (error) {
        console.error('Error fetching blog post by slug from DB:', error);
        return null;
    }
}
