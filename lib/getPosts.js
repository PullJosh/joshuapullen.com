import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const fullPath = join(postsDirectory, `${slug}/index.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const post = matter(fileContents, {
    excerpt: (file, options) => {
      file.excerpt = file.content.split("\n").slice(0, 4).join(" ").trim();
    },
  });
  return {
    ...post,
    data: {
      ...post.data,
      date: post.data.date.getTime(),
    },
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => ({ ...getPostBySlug(slug), slug }))
    .sort((a, b) => (new Date(a.data.date) > new Date(b.data.date) ? -1 : 1));
}
