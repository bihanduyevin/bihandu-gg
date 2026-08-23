import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(
  process.cwd(),
  "content/blog",
);

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
  content: string;
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(
  slug: string,
): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");

    const fullPath = path.join(
      postsDirectory,
      `${realSlug}.mdx`,
    );

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(
      fullPath,
      "utf8",
    );

    const { data, content } = matter(fileContents);

    return {
      id: realSlug,
      slug: realSlug,
      title: String(data.title ?? "Untitled"),
      excerpt: String(data.excerpt ?? ""),
      category: String(
        data.category ?? "Uncategorized",
      ),
      date: String(data.date ?? ""),
      readTime: String(data.readTime ?? ""),
      imageUrl: String(data.image ?? ""),
      content,
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter(
      (post): post is BlogPost => post !== null,
    )
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return dateB - dateA;
    });
}