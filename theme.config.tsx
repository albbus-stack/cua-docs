import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps: () => {
    return {
      titleTemplate: "CUA %s",
    };
  },
  faviconGlyph: "🌌",
  logo: (
    <span className="font-bold md:text-lg transition-all">
      <span className="md:mr-1">🌌</span> create-universal-app
    </span>
  ),
  project: {
    link: "https://github.com/chen-rn/CUA",
  },
  chat: {
    link: "https://discord.gg/5HvtckjyYb",
  },
  docsRepositoryBase: "https://github.com/albbus-stack/cua-docs/tree/master",
  footer: {
    component: () => null,
  },
};

export default config;
