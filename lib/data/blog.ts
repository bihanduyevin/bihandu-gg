export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "post-01",
    title: "Your First Blog Post",
    excerpt:
      "A placeholder article for the Bihandu.gg blog. Replace this with your first real article.",
    category: "Technology",
    date: "Coming soon",
    readTime: "5 min read",
    imageUrl: "/images/blog/post-01.jpg",
    slug: "your-first-blog-post",
  },
  {
    id: "post-02",
    title: "GIS & Urban Exploration",
    excerpt:
      "A placeholder for a future article about GIS, cities, mapping, or urban exploration.",
    category: "GIS",
    date: "Coming soon",
    readTime: "6 min read",
    imageUrl: "/images/blog/post-02.jpg",
    slug: "gis-urban-exploration",
  },
  {
    id: "post-03",
    title: "Behind the Lens",
    excerpt:
      "A placeholder for a future photography article about cities, composition, and visual storytelling.",
    category: "Photography",
    date: "Coming soon",
    readTime: "4 min read",
    imageUrl: "/images/blog/post-03.jpg",
    slug: "behind-the-lens",
  },
  {
    id: "post-04",
    title: "Notes From the Digital World",
    excerpt:
      "A placeholder for a future technology or development article.",
    category: "Development",
    date: "Coming soon",
    readTime: "7 min read",
    imageUrl: "/images/blog/post-04.jpg",
    slug: "notes-from-the-digital-world",
  },
];