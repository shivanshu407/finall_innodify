"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Save, Upload, Trash2, Search, Bold, List, Type, Heading3, Heading4, Image as ImageIcon, Link as LinkIcon, Eye, Edit3, Search as SearchIcon, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BlogPost, defaultBlogs } from "@/data/blogs";
import { addBlog, deleteBlog, updateBlog } from "@/actions/blogActions";
import BlogContentRenderer from "@/components/BlogContentRenderer";

type EditorTab = "content" | "seo";
type ViewMode = "edit" | "split" | "preview";

export default function AddBlogPage() {
    const router = useRouter();

    const [editingSlug, setEditingSlug] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<EditorTab>("content");
    const [viewMode, setViewMode] = useState<ViewMode>("split");
    const [formData, setFormData] = useState<Partial<BlogPost>>({
        author: "Innodify Admin",
        date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }),
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const keywords = e.target.value.split(",").map(k => k.trim()).filter(k => k);
        setFormData((prev) => ({ ...prev, keywords }));
    };

    const filteredBlogs = searchQuery.length >= 2
        ? defaultBlogs.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : defaultBlogs;

    const handleEdit = (post: BlogPost) => {
        setFormData(post);
        setEditingSlug(post.slug);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const insertFormatting = (prefix: string, suffix: string = "") => {
        const textarea = document.querySelector('textarea[name="content"]') as HTMLTextAreaElement;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const before = text.substring(0, start);
        const after = text.substring(end, text.length);
        const selected = text.substring(start, end);

        const newText = before + prefix + selected + suffix + after;

        setFormData(prev => ({ ...prev, content: newText }));

        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(
                start + prefix.length,
                start + prefix.length + selected.length
            );
        }, 0);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.excerpt || !formData.category || !formData.content) {
            alert("Please fill in all required fields.");
            return;
        }

        const slug = (formData.title || "")
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

        const newPost: BlogPost = {
            title: formData.title || "Untitled",
            slug: slug || "untitled",
            excerpt: formData.excerpt || "",
            content: formData.content || "",
            author: formData.author || "Innodify Admin",
            date: formData.date || new Date().toLocaleDateString(),
            readTime: formData.readTime || "5 min read",
            category: formData.category || "General",
            image:
                formData.image ||
                "https://images.unsplash.com/photo-1499750310159-5254f4121c6d?w=600&q=80",
            // SEO fields
            metaTitle: formData.metaTitle,
            metaDescription: formData.metaDescription,
            keywords: formData.keywords,
            canonicalUrl: formData.canonicalUrl,
        };

        let result;
        if (editingSlug) {
            result = await updateBlog(editingSlug, newPost);
        } else {
            result = await addBlog(newPost);
        }

        if (result.success) {
            alert(editingSlug ? "Blog post updated successfully!" : "Blog post added successfully!");
            if (editingSlug) {
                setEditingSlug(null);
                setFormData({
                    author: "Innodify Admin",
                    date: new Date().toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    }),
                });
                router.refresh();
                window.location.reload();
            } else {
                router.push("/blog");
                router.refresh();
            }
        } else {
            alert("Failed to save blog post. " + result.error);
        }
    };

    const metaTitleLength = (formData.metaTitle || formData.title || "").length;
    const metaDescLength = (formData.metaDescription || formData.excerpt || "").length;

    return (
        <section className="relative min-h-screen bg-[#0e1012] py-24 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0e1012] -z-10" />
            <div className="absolute inset-0 opacity-20 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00adef]/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#00adef] transition-colors"
                        >
                            <ArrowLeft size={20} />
                            Back
                        </Link>
                        <h1 className="text-2xl font-serif text-[#e5e7eb]">
                            {editingSlug ? "Edit Post" : "Create New Post"}
                        </h1>
                        {editingSlug && (
                            <button
                                onClick={() => {
                                    setEditingSlug(null);
                                    setFormData({ author: "Innodify Admin" });
                                }}
                                className="text-sm text-red-400 hover:text-red-300 transition-colors"
                            >
                                Cancel Edit
                            </button>
                        )}
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center gap-2 bg-[#15181c] p-1 rounded-lg border border-[#2a2f36]">
                        <button
                            onClick={() => setViewMode("edit")}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${viewMode === "edit" ? "bg-[#00adef] text-[#0e1012]" : "text-[#9ca3af] hover:text-white"}`}
                        >
                            <Edit3 size={14} /> Edit
                        </button>
                        <button
                            onClick={() => setViewMode("split")}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${viewMode === "split" ? "bg-[#00adef] text-[#0e1012]" : "text-[#9ca3af] hover:text-white"}`}
                        >
                            Split
                        </button>
                        <button
                            onClick={() => setViewMode("preview")}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${viewMode === "preview" ? "bg-[#00adef] text-[#0e1012]" : "text-[#9ca3af] hover:text-white"}`}
                        >
                            <Eye size={14} /> Preview
                        </button>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-4 mb-6 border-b border-[#2a2f36]">
                    <button
                        onClick={() => setActiveTab("content")}
                        className={`pb-3 px-2 text-sm font-medium transition-all border-b-2 flex items-center gap-2 ${activeTab === "content" ? "border-[#00adef] text-[#00adef]" : "border-transparent text-[#9ca3af] hover:text-white"}`}
                    >
                        <Edit3 size={16} /> Content
                    </button>
                    <button
                        onClick={() => setActiveTab("seo")}
                        className={`pb-3 px-2 text-sm font-medium transition-all border-b-2 flex items-center gap-2 ${activeTab === "seo" ? "border-[#00adef] text-[#00adef]" : "border-transparent text-[#9ca3af] hover:text-white"}`}
                    >
                        <SearchIcon size={16} /> SEO & Metadata
                    </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <form onSubmit={handleSubmit}>
                        {/* Main Editor Area */}
                        <div className={`grid gap-6 ${viewMode === "split" ? "lg:grid-cols-2" : "grid-cols-1"}`}>

                            {/* Editor Panel */}
                            {viewMode !== "preview" && (
                                <div className="space-y-6">
                                    {activeTab === "content" && (
                                        <>
                                            {/* Title */}
                                            <div>
                                                <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                                    Title *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={formData.title || ""}
                                                    placeholder="Enter post title"
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb] text-lg font-medium
                                                        placeholder:text-[#6b7280] border border-[#2a2f36]
                                                        focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                        outline-none transition-all"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {/* Author */}
                                                <div>
                                                    <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                                        Author
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="author"
                                                        value={formData.author || ""}
                                                        placeholder="Author name"
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                                                            placeholder:text-[#6b7280] border border-[#2a2f36]
                                                            focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                            outline-none transition-all"
                                                    />
                                                </div>

                                                {/* Category */}
                                                <div>
                                                    <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                                        Category *
                                                    </label>
                                                    <select
                                                        name="category"
                                                        value={formData.category || ""}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                                                            border border-[#2a2f36]
                                                            focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                            outline-none transition-all"
                                                    >
                                                        <option value="">Select Category</option>
                                                        <option value="Development">Development</option>
                                                        <option value="UX Design">UX Design</option>
                                                        <option value="Technology">Technology</option>
                                                        <option value="Marketing">Marketing</option>
                                                        <option value="Tutorial">Tutorial</option>
                                                        <option value="Performance">Performance</option>
                                                        <option value="Platforms">Platforms</option>
                                                    </select>
                                                </div>

                                                {/* Read Time */}
                                                <div>
                                                    <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                                        Read Time
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="readTime"
                                                        value={formData.readTime || ""}
                                                        placeholder="e.g. 5 min read"
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                                                            placeholder:text-[#6b7280] border border-[#2a2f36]
                                                            focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                            outline-none transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {/* Excerpt */}
                                            <div>
                                                <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                                    Excerpt *
                                                </label>
                                                <textarea
                                                    name="excerpt"
                                                    value={formData.excerpt || ""}
                                                    rows={2}
                                                    placeholder="Brief summary of the post (also used as default meta description)"
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                                                        placeholder:text-[#6b7280] border border-[#2a2f36]
                                                        focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                        outline-none transition-all resize-none"
                                                />
                                            </div>

                                            {/* Image URL */}
                                            <div>
                                                <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                                    Featured Image URL
                                                </label>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="url"
                                                        name="image"
                                                        value={formData.image || ""}
                                                        placeholder="https://example.com/image.jpg"
                                                        onChange={handleChange}
                                                        className="flex-1 px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                                                            placeholder:text-[#6b7280] border border-[#2a2f36]
                                                            focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                            outline-none transition-all"
                                                    />
                                                    <div className="px-4 py-3 bg-[#15181c] rounded-lg border border-[#2a2f36] text-[#6b7280]">
                                                        <Upload size={20} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Editor */}
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <label className="block text-sm font-medium text-[#b6bcc6]">
                                                        Content *
                                                    </label>
                                                    <div className="flex items-center gap-1 bg-[#15181c] p-1 rounded-md border border-[#2a2f36]">
                                                        <button
                                                            type="button"
                                                            onClick={() => insertFormatting("### ")}
                                                            className="p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all"
                                                            title="Heading 1"
                                                        >
                                                            <Heading3 size={16} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => insertFormatting("#### ")}
                                                            className="p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all"
                                                            title="Heading 2"
                                                        >
                                                            <Heading4 size={16} />
                                                        </button>
                                                        <div className="w-px h-4 bg-[#2a2f36] mx-1" />
                                                        <button
                                                            type="button"
                                                            onClick={() => insertFormatting("**", "**")}
                                                            className="p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all"
                                                            title="Bold"
                                                        >
                                                            <Bold size={16} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => insertFormatting("- ")}
                                                            className="p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all"
                                                            title="Bullet List"
                                                        >
                                                            <List size={16} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const url = prompt("Enter image URL:");
                                                                const alt = prompt("Enter image description (alt text):");
                                                                if (url) {
                                                                    insertFormatting(`![${alt || ""}](${url})`);
                                                                }
                                                            }}
                                                            className="p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all"
                                                            title="Insert Image"
                                                        >
                                                            <ImageIcon size={16} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const text = prompt("Enter link text:");
                                                                const url = prompt("Enter URL (e.g. /services or https://google.com):");
                                                                if (text && url) {
                                                                    insertFormatting(`[${text}](${url})`);
                                                                }
                                                            }}
                                                            className="p-1.5 hover:bg-[#2a2f36] rounded text-[#9ca3af] hover:text-[#00adef] transition-all"
                                                            title="Insert Link"
                                                        >
                                                            <LinkIcon size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <textarea
                                                    name="content"
                                                    value={formData.content || ""}
                                                    rows={viewMode === "split" ? 20 : 16}
                                                    placeholder="Write the full blog post content here..."
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                                                        placeholder:text-[#6b7280] border border-[#2a2f36]
                                                        focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                        outline-none transition-all font-mono text-sm shadow-inner resize-none"
                                                />
                                                <p className="text-[10px] text-[#4b5563] mt-2 flex items-center gap-1">
                                                    <Type size={10} />
                                                    Markdown: ### Header, **Bold**, - Bullet, ![Alt](URL) Image, [Text](URL) Link
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    {activeTab === "seo" && (
                                        <div className="space-y-6 bg-[#15181c] rounded-xl p-6 border border-[#2a2f36]">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Settings className="text-[#00adef]" size={24} />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">SEO Settings</h3>
                                                    <p className="text-sm text-[#6b7280]">Optimize your post for search engines</p>
                                                </div>
                                            </div>

                                            {/* Meta Title */}
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <label className="block text-sm font-medium text-[#b6bcc6]">
                                                        Meta Title
                                                    </label>
                                                    <span className={`text-xs ${metaTitleLength > 60 ? "text-red-400" : metaTitleLength > 50 ? "text-yellow-400" : "text-green-400"}`}>
                                                        {metaTitleLength}/60 characters
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="metaTitle"
                                                    value={formData.metaTitle || ""}
                                                    placeholder={formData.title || "Uses post title if left empty"}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg bg-[#0e1012] text-[#e5e7eb]
                                                        placeholder:text-[#4b5563] border border-[#2a2f36]
                                                        focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                        outline-none transition-all"
                                                />
                                                <p className="text-[10px] text-[#4b5563] mt-1">Recommended: 50-60 characters. This appears in search results as the page title.</p>
                                            </div>

                                            {/* Meta Description */}
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <label className="block text-sm font-medium text-[#b6bcc6]">
                                                        Meta Description
                                                    </label>
                                                    <span className={`text-xs ${metaDescLength > 160 ? "text-red-400" : metaDescLength > 140 ? "text-yellow-400" : "text-green-400"}`}>
                                                        {metaDescLength}/160 characters
                                                    </span>
                                                </div>
                                                <textarea
                                                    name="metaDescription"
                                                    value={formData.metaDescription || ""}
                                                    rows={3}
                                                    placeholder={formData.excerpt || "Uses excerpt if left empty"}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg bg-[#0e1012] text-[#e5e7eb]
                                                        placeholder:text-[#4b5563] border border-[#2a2f36]
                                                        focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                        outline-none transition-all resize-none"
                                                />
                                                <p className="text-[10px] text-[#4b5563] mt-1">Recommended: 140-160 characters. This appears below the title in search results.</p>
                                            </div>

                                            {/* Keywords */}
                                            <div>
                                                <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                                    Keywords
                                                </label>
                                                <input
                                                    type="text"
                                                    name="keywords"
                                                    value={formData.keywords?.join(", ") || ""}
                                                    placeholder="e.g. ecommerce, website, development"
                                                    onChange={handleKeywordsChange}
                                                    className="w-full px-4 py-3 rounded-lg bg-[#0e1012] text-[#e5e7eb]
                                                        placeholder:text-[#4b5563] border border-[#2a2f36]
                                                        focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                        outline-none transition-all"
                                                />
                                                <p className="text-[10px] text-[#4b5563] mt-1">Separate keywords with commas. Used for meta keywords tag.</p>
                                            </div>

                                            {/* Canonical URL */}
                                            <div>
                                                <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                                    Canonical URL (optional)
                                                </label>
                                                <input
                                                    type="url"
                                                    name="canonicalUrl"
                                                    value={formData.canonicalUrl || ""}
                                                    placeholder="https://innodify.com/blog/your-post"
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg bg-[#0e1012] text-[#e5e7eb]
                                                        placeholder:text-[#4b5563] border border-[#2a2f36]
                                                        focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                                        outline-none transition-all"
                                                />
                                                <p className="text-[10px] text-[#4b5563] mt-1">Use if this content exists elsewhere to avoid duplicate content issues.</p>
                                            </div>

                                            {/* SEO Preview */}
                                            <div className="mt-8 pt-6 border-t border-[#2a2f36]">
                                                <h4 className="text-sm font-medium text-[#b6bcc6] mb-4">Search Result Preview</h4>
                                                <div className="bg-white rounded-lg p-4">
                                                    <p className="text-[#1a0dab] text-lg font-medium truncate">
                                                        {formData.metaTitle || formData.title || "Post Title"}
                                                    </p>
                                                    <p className="text-[#006621] text-sm">
                                                        innodify.com › blog › {formData.title?.toLowerCase().replace(/\s+/g, "-").slice(0, 20) || "post-slug"}
                                                    </p>
                                                    <p className="text-[#545454] text-sm line-clamp-2 mt-1">
                                                        {formData.metaDescription || formData.excerpt || "Post description will appear here..."}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Preview Panel */}
                            {(viewMode === "split" || viewMode === "preview") && (
                                <div className={`bg-[#15181c] rounded-xl border border-[#2a2f36] overflow-hidden ${viewMode === "preview" ? "max-w-4xl mx-auto" : ""}`}>
                                    <div className="sticky top-0 bg-[#15181c] border-b border-[#2a2f36] px-4 py-3 flex items-center gap-2">
                                        <Eye size={16} className="text-[#00adef]" />
                                        <span className="text-sm font-medium text-[#9ca3af]">Live Preview</span>
                                    </div>
                                    <div className="p-6 max-h-[calc(100vh-300px)] overflow-y-auto">
                                        {formData.image && (
                                            <div className="aspect-[21/9] rounded-xl overflow-hidden mb-6 bg-[#0e1012]">
                                                <img
                                                    src={formData.image}
                                                    alt={formData.title || "Featured image"}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        {formData.category && (
                                            <span className="inline-block px-3 py-1 rounded-full bg-[#00adef]/10 text-[#00adef] text-xs font-medium mb-4">
                                                {formData.category}
                                            </span>
                                        )}
                                        <h1 className="text-2xl lg:text-3xl font-serif text-white mb-4">
                                            {formData.title || "Untitled Post"}
                                        </h1>
                                        <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-6 pb-6 border-b border-[#2a2f36]">
                                            <span>{formData.author || "Author"}</span>
                                            <span>•</span>
                                            <span>{formData.date}</span>
                                            {formData.readTime && (
                                                <>
                                                    <span>•</span>
                                                    <span>{formData.readTime}</span>
                                                </>
                                            )}
                                        </div>
                                        <BlogContentRenderer content={formData.content || "*Start writing to see your content here...*"} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full bg-[#00adef] text-[#0e1012] font-semibold py-4
                                    rounded-lg hover:bg-[#00adef]/90 active:scale-[0.99]
                                    transition-all flex items-center justify-center gap-2"
                            >
                                <Save size={20} />
                                {editingSlug ? "Update Post" : "Publish Post"}
                            </button>
                        </div>
                    </form>
                </motion.div>

                {/* Manage Blogs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-24"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-[#2a2f36] pb-4">
                        <h2 className="text-2xl font-serif text-[#e5e7eb]">
                            Manage Existing Posts
                        </h2>
                        <div className="relative w-full md:w-64">
                            <input
                                type="text"
                                placeholder="Search by title..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#15181c] text-[#e5e7eb] 
                                    placeholder:text-[#6b7280] border border-[#2a2f36]
                                    focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                                    outline-none transition-all text-sm"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]" size={16} />
                        </div>
                    </div>
                    <div className="space-y-4">
                        {filteredBlogs.map((post, index) => (
                            <div
                                key={index}
                                className="bg-[#15181c] p-4 rounded-lg border border-[#2a2f36] flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-md bg-cover bg-center shrink-0"
                                        style={{ backgroundImage: `url(${post.image})` }}
                                    />
                                    <div>
                                        <h3 className="text-[#e5e7eb] font-medium line-clamp-1">{post.title}</h3>
                                        <p className="text-xs text-[#6b7280]">{post.category} • {post.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleEdit(post)}
                                        className="p-2 text-[#6b7280] hover:text-[#00adef] hover:bg-[#00adef]/10 rounded-lg transition-all"
                                        title="Edit Post"
                                    >
                                        <Edit3 size={18} />
                                        <span className="sr-only">Edit</span>
                                    </button>
                                    <button
                                        onClick={async () => {
                                            if (confirm(`Are you sure you want to delete "${post.title}"?`)) {
                                                const result = await deleteBlog(post.slug);
                                                if (result.success) {
                                                    alert("Post deleted successfully!");
                                                    window.location.reload();
                                                } else {
                                                    alert("Failed to delete: " + result.error);
                                                }
                                            }
                                        }}
                                        className="p-2 text-[#6b7280] hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                                        title="Delete Post"
                                    >
                                        <Trash2 size={18} />
                                        <span className="sr-only">Delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
