import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date(),
    title: z.string(),
    author: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
