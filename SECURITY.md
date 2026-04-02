# Security Documentation

## Important Security Notice

This repository contains security-sensitive configurations. Please read and follow these guidelines carefully.

## Environment Variables

**CRITICAL:** Never commit `.env` files to version control. The following environment variables must be set:

### Required Environment Variables

```bash
# MongoDB Connection
MONGODB_URI="your_mongodb_connection_string"

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# Google Gemini AI
GEMINI_API_KEY="your_gemini_api_key"
```

### Setting Up Environment Variables

1. **Local Development:**
   - Copy `server/.env.example` to `server/.env`
   - Fill in your actual credentials
   - Never commit `server/.env` to git

2. **Production:**
   - Set environment variables in your hosting platform (Vercel, Netlify, etc.)
   - Never use hardcoded credentials in production

## Security Features Implemented

### 1. Input Validation & Sanitization
- All user inputs are validated before processing
- NoSQL injection prevention through input sanitization
- File type and size validation for uploads
- Maximum content length limits enforced

### 2. Rate Limiting
- API endpoints are rate-limited to prevent abuse
- Different limits for different endpoint types:
  - File uploads: 5 per minute
  - Blog operations: 20 per minute
  - Chat API: 10 per minute
  - Default: 30 per minute

### 3. Security Headers
- **HSTS**: Forces HTTPS connections
- **CSP**: Content Security Policy to prevent XSS
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **Referrer-Policy**: Controls referrer information

### 4. File Upload Security
- File type whitelist (JPEG, PNG, WebP, GIF only)
- Maximum file size: 10MB
- Files uploaded to Cloudinary (isolated from server)

### 5. Database Security
- Mongoose schema validation
- Input sanitization before database queries
- Whitelisted fields for updates

## Security Best Practices

### Credential Rotation
If credentials are ever exposed:
1. **Immediately** rotate all affected credentials
2. Check for unauthorized access in MongoDB Atlas and Cloudinary
3. Review git history and remove exposed credentials using `git filter-branch` or BFG Repo-Cleaner
4. Update all environment variables in production

### Dependency Management
1. Regularly run `npm audit` to check for vulnerabilities
2. Keep dependencies up to date: `npm audit fix`
3. Review security advisories for critical packages

### Code Review Checklist
Before deploying code, ensure:
- [ ] No hardcoded credentials or secrets
- [ ] All user inputs are validated
- [ ] Database queries are sanitized
- [ ] Error messages don't expose sensitive information
- [ ] Rate limiting is in place for public APIs
- [ ] File uploads are validated and restricted

## Reporting Security Issues

If you discover a security vulnerability, please:
1. **Do NOT** open a public issue
2. Email the security team directly
3. Include detailed steps to reproduce
4. Allow time for a fix before public disclosure

## Security Monitoring

### Recommended Tools
- **npm audit**: Built-in dependency vulnerability scanner
- **Snyk**: Advanced dependency and code scanning
- **OWASP Dependency-Check**: Additional dependency scanning
- **MongoDB Atlas**: Built-in security monitoring

### Logging
- All authentication attempts are logged
- Failed API calls are logged for analysis
- Monitor logs for suspicious patterns

## Compliance Notes

This application implements security measures for:
- Data protection
- API abuse prevention
- XSS attack prevention
- Injection attack prevention
- Rate limiting and DoS protection

For production deployments, consider additional measures:
- WAF (Web Application Firewall)
- DDoS protection service
- Professional security audit
- Penetration testing
- GDPR/privacy compliance review

## Contact

For security concerns, contact the development team immediately.
