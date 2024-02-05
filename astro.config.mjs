import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://supso.co",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    starlight({
      title: "Supso Docs",
      titleDelimiter: "-",
      customCss: ["./src/starlight.css"],
      sidebar: [
        { label: "Welcome", link: "/docs" },
        { label: "Getting started", link: "/docs/getting-started" },
        { label: "Features", items: [] },
        { label: "API Reference", items: [] },
        { label: "SDKs", items: [] },
        { label: "Integrations", items: [] },
      ],
      components: {
        Head: "./src/components/docs-head.astro",
      },
    }),
  ],
});
