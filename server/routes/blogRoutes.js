const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

// GET /api/blogs — Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// GET /api/blogs/:slug — Get single blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

// POST /api/blogs — Create a new blog
router.post('/', async (req, res) => {
  try {
    const {
      title, excerpt, content, author, date, readTime,
      category, image, metaTitle, metaDescription, keywords, canonicalUrl,
    } = req.body;

    // Auto-generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    // Check if slug already exists
    const existing = await Blog.findOne({ slug });
    if (existing) {
      return res.status(400).json({ error: 'A blog with this title/slug already exists' });
    }

    const blog = await Blog.create({
      title,
      slug,
      excerpt,
      content,
      author: author || 'Innodify Admin',
      date: date || new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      readTime: readTime || '5 min read',
      category,
      image: image || '',
      metaTitle: metaTitle || '',
      metaDescription: metaDescription || '',
      keywords: keywords || [],
      canonicalUrl: canonicalUrl || '',
    });

    res.status(201).json({ success: true, blog });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Failed to create blog' });
  }
});

// PUT /api/blogs/:slug — Update a blog
router.put('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // If title changed, regenerate slug
    if (req.body.title && req.body.title !== blog.title) {
      req.body.slug = req.body.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
    }

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true, runValidators: true }
    );

    res.json({ success: true, blog: updatedBlog });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

// DELETE /api/blogs/:slug — Delete a blog
router.delete('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

module.exports = router;
