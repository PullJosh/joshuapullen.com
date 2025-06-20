import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const collectionEntries = await getCollection("blog");

const pages = Object.fromEntries(
  collectionEntries.map(({ slug, data }) => [slug, data])
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages: pages,
  getImageOptions: (path, page: (typeof pages)[string]) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[79, 70, 229]],
    border: {
      color: [255, 255, 255],
      width: 30,
      side: "block-end",
    },
    bgImage: {
      path: "./src/pages/open-graph/_background.png",
    },
    padding: 60,
    font: {
      title: {
        color: [255, 255, 255],
        size: 70,
        lineHeight: 1.2,
        weight: "Bold",
      },
      description: {
        color: [165, 180, 252],
        size: 40,
        weight: "Normal",
      },
    },
  }),
});
