// Input validation utilities

export interface BlogInput {
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  date?: string;
  readTime?: string;
  category: string;
  image?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

// Sanitize string input to prevent NoSQL injection
export function sanitizeString(input: string): string {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  // Remove potential MongoDB operators
  return input.replace(/[${}]/g, '');
}

// Validate and sanitize blog data
export function validateBlogInput(data: any): BlogInput {
  const errors: string[] = [];

  // Required fields validation
  if (!data.title || typeof data.title !== 'string' || data.title.trim().length === 0) {
    errors.push('Title is required and must be a non-empty string');
  } else if (data.title.length > 200) {
    errors.push('Title must be less than 200 characters');
  }

  if (!data.excerpt || typeof data.excerpt !== 'string' || data.excerpt.trim().length === 0) {
    errors.push('Excerpt is required and must be a non-empty string');
  } else if (data.excerpt.length > 500) {
    errors.push('Excerpt must be less than 500 characters');
  }

  if (!data.content || typeof data.content !== 'string' || data.content.trim().length === 0) {
    errors.push('Content is required and must be a non-empty string');
  } else if (data.content.length > 100000) {
    errors.push('Content must be less than 100,000 characters');
  }

  if (!data.category || typeof data.category !== 'string' || data.category.trim().length === 0) {
    errors.push('Category is required and must be a non-empty string');
  } else if (data.category.length > 100) {
    errors.push('Category must be less than 100 characters');
  }

  // Optional fields validation
  if (data.author && (typeof data.author !== 'string' || data.author.length > 100)) {
    errors.push('Author must be a string less than 100 characters');
  }

  if (data.readTime && (typeof data.readTime !== 'string' || data.readTime.length > 50)) {
    errors.push('Read time must be a string less than 50 characters');
  }

  if (data.metaTitle && (typeof data.metaTitle !== 'string' || data.metaTitle.length > 200)) {
    errors.push('Meta title must be a string less than 200 characters');
  }

  if (data.metaDescription && (typeof data.metaDescription !== 'string' || data.metaDescription.length > 500)) {
    errors.push('Meta description must be a string less than 500 characters');
  }

  if (data.keywords && (!Array.isArray(data.keywords) || data.keywords.some((k: any) => typeof k !== 'string'))) {
    errors.push('Keywords must be an array of strings');
  }

  if (data.canonicalUrl && typeof data.canonicalUrl !== 'string') {
    errors.push('Canonical URL must be a string');
  }

  if (errors.length > 0) {
    throw new Error(`Validation failed: ${errors.join(', ')}`);
  }

  // Return sanitized data
  return {
    title: sanitizeString(data.title.trim()),
    excerpt: sanitizeString(data.excerpt.trim()),
    content: sanitizeString(data.content.trim()),
    category: sanitizeString(data.category.trim()),
    author: data.author ? sanitizeString(data.author.trim()) : undefined,
    date: data.date,
    readTime: data.readTime ? sanitizeString(data.readTime.trim()) : undefined,
    image: data.image,
    metaTitle: data.metaTitle ? sanitizeString(data.metaTitle.trim()) : undefined,
    metaDescription: data.metaDescription ? sanitizeString(data.metaDescription.trim()) : undefined,
    keywords: data.keywords || [],
    canonicalUrl: data.canonicalUrl,
  };
}

// Sanitize update data to prevent NoSQL injection
export function sanitizeUpdateData(data: any): Record<string, any> {
  const allowedFields = [
    'title', 'excerpt', 'content', 'author', 'date', 'readTime',
    'category', 'image', 'metaTitle', 'metaDescription', 'keywords', 'canonicalUrl'
  ];

  const sanitized: Record<string, any> = {};

  for (const key of Object.keys(data)) {
    // Only allow whitelisted fields
    if (allowedFields.includes(key)) {
      const value = data[key];

      // Prevent MongoDB operators
      if (typeof value === 'string') {
        sanitized[key] = sanitizeString(value);
      } else if (Array.isArray(value)) {
        sanitized[key] = value;
      } else if (value === null || value === undefined) {
        sanitized[key] = value;
      }
    }
  }

  return sanitized;
}
