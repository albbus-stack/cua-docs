import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps: () => {
    return {
      titleTemplate: "CUA - %s",
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
    component: () => (
      <div className="text-center py-5 pb-5 border-t border-gray-800/70 text-gray-500">
        Built with Nextra and NextJS by{" "}
        <a
          href="https://github.com/albbus-stack"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-gray-600 dark:text-gray-400"
        >
          albbus-stack
        </a>
      </div>
    ),
  },
};

export default config;
