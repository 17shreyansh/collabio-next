import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content/pages");

export interface PageContent {
  frontmatter: Record<string, any>;
  content: string;
}

export function getPageContent(slug: string): PageContent | null {
  try {
    const realSlug = slug === "/" || slug === "" ? "home" : slug.replace(/\.md$/, "");
    const fullPath = path.join(contentDir, `${realSlug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content };
  } catch (error) {
    console.error(`Error reading content for ${slug}:`, error);
    return null;
  }
}
