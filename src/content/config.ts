import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date(),
    title: z.string(),
    author: z.string(),
    description: z.string().optional(),
    hasMath: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
