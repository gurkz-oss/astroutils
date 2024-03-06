import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.gurkz.me",
  integrations: [
    starlight({
      title: "astroutils documentation",
      social: {
        github: "https://github.com/gurkz-oss/astroutils",
      },
      sidebar: [
        {
          label: "Packages",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Analytics", link: "/packages/analytics/" },
          ],
        },
      ],
    }),
  ],
});
