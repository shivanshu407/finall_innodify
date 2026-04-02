import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';
import { validateBlogInput } from '@/lib/validation';

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    // Validate and sanitize input
    const validatedData = validateBlogInput(body);

    // Auto-generate slug from title
    const slug = validatedData.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    // Check if slug already exists
    const existing = await Blog.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { error: 'A blog with this title/slug already exists' },
        { status: 400 }
      );
    }

    const blog = await Blog.create({
      title: validatedData.title,
      slug,
      excerpt: validatedData.excerpt,
      content: validatedData.content,
      author: validatedData.author || 'Innodify Admin',
      date: validatedData.date || new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      readTime: validatedData.readTime || '5 min read',
      category: validatedData.category,
      image: validatedData.image || '',
      metaTitle: validatedData.metaTitle || '',
      metaDescription: validatedData.metaDescription || '',
      keywords: validatedData.keywords || [],
      canonicalUrl: validatedData.canonicalUrl || '',
    });

    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
