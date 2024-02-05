import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const collectionEntries = await getCollection("docs");

const pages = Object.fromEntries(
  collectionEntries.map(({ data, slug }) => [slug, data]),
);

const withIndex = {
  ...pages,
  index: { title: "Real-time digital product observability." },
};

console.log(withIndex);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages: withIndex,
  getImageOptions: (_path, page) => ({
    title: page.title ?? "Real-time digital product observability.",
    description: page.description,
    logo: {
      path: "./src/assets/logo.png",
    },
    bgImage: {
      path: "./src/assets/og-bg.jpg",
    },
    font: {
      title: {
        families: ["CalSans", "system-ui"],
        weight: "SemiBold",
        lineHeight: 1.5,
      },
      description: {
        color: [200, 200, 200],
      },
    },
    fonts: ["./public/CalSans-SemiBold.ttf"],
  }),
});
