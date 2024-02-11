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
        {
          label: "Getting started",
          link: "/docs/getting-started",
        },
        { label: "API Reference", link: "/docs/api-reference" },
        {
          label: "Features",
          items: [
            {
              label: "Event tracking",
              link: "/docs/features/event-tracking",
            },
            {
              label: "Kanban boards",
              link: "/docs/features/kanban-boards",
            },
            {
              label: "Feature flags",
              link: "/docs/features/feature-flags",
            },
          ],
        },
        {
          label: "SDKs",
          items: [{ label: "TypeScript", link: "/docs/sdks/typescript" }],
        },
        {
          label: "Integrations",
          items: [
            { label: "Webhooks", link: "/docs/integrations/webhooks" },
            { label: "RSS Feed", link: "/docs/integrations/rss" },
          ],
        },
        {
          label: "Self-hosting",
          items: [{ label: "Docker Image", link: "/docs/self-hosting/docker" }],
        },
      ],
      components: {
        Head: "./src/components/docs-head.astro",
      },
    }),
  ],
});
