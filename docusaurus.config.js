// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "humming:bird",
  tagline: "",
  // TODO: change favicon
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://hummingbird.sahaj.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sahajsoft", // Usually your GitHub org/user name.
  projectName: "hummingbird-doc", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sahajsoft/hummingbird-doc/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sahajsoft/hummingbird-doc/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "humming:bird",
        logo: {
          alt: "humming:bird Logo",
          // TODO: change logo
          src: "img/logo.svg",
        },
        items: [
          {
            label: "About",
            to: "docs/hummingbird",
            position: "right",
          },
          {
            label: "Getting Started",
            to: "docs/getting-started/architecture",
            position: "right",
          },
          {
            label: "Tutorial",
            to: "docs/tutorial",
            position: "right",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/sahajsoft/hummingbird-doc",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About",
            items: [
              {
                label: "humming:bird",
                to: "/docs/hummingbird",
              },
              {
                label: "Get Involved",
                to: "/docs/get-involved/suggest-feature",
              },
            ],
          },
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "docs/getting-started/architecture",
              },
              {
                label: "Tutorial",
                to: "/docs/tutorial",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // TODO: add other social media links like LinkedIn, Discord, etc.
              {
                label: "Twitter",
                href: "https://twitter.com/SahajSoftware",
              },
              {
                label: "GitHub",
                href: "https://github.com/sahajsoft/hummingbird-doc",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} humming:bird`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
