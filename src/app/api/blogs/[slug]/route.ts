import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';
import { sanitizeString, sanitizeUpdateData } from '@/lib/validation';

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Sanitize slug to prevent NoSQL injection
    const sanitizedSlug = sanitizeString(slug);

    await connectDB();
    const blog = await Blog.findOne({ slug: sanitizedSlug });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Sanitize slug to prevent NoSQL injection
    const sanitizedSlug = sanitizeString(slug);

    await connectDB();
    const blog = await Blog.findOne({ slug: sanitizedSlug });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const body = await request.json();

    // Sanitize update data to prevent NoSQL injection
    const sanitizedBody = sanitizeUpdateData(body);

    // If title changed, regenerate slug
    if (sanitizedBody.title && sanitizedBody.title !== blog.title) {
      sanitizedBody.slug = sanitizedBody.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
    }

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: sanitizedSlug },
      sanitizedBody,
      { new: true, runValidators: true }
    );

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Sanitize slug to prevent NoSQL injection
    const sanitizedSlug = sanitizeString(slug);

    await connectDB();
    const blog = await Blog.findOneAndDelete({ slug: sanitizedSlug });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
