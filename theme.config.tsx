import React from "react";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps: () => {
    return {
      titleTemplate: "CUA %s",
    };
  },
  logo: (
    <span className="font-bold md:text-lg transition-all">
      <Image
        className="md:mr-3 mr-1 md:h-8 md:w-8 w-6 h-6 inline-block"
        src="/favicon.ico"
        width={256}
        height={256}
        alt="create-universal-app logo"
      />
      create-universal-app
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
