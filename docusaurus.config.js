
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QA Advisor Documentation',
  tagline: 'User and Developer Documentation for QA Advisor WordPress Analytics',
  favicon: 'img/favicon.ico',

  url: 'https://docs.quarka.org',
  baseUrl: '/',

  organizationName: 'quarka-org', // Usually your GitHub org/user name.
  projectName: 'docs.quarka.org', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'es', 'fr', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      ja: {
        htmlLang: 'ja',
        label: '日本語',
      },
      es: {
        htmlLang: 'es',
        label: 'Español',
      },
      fr: {
        htmlLang: 'fr',
        label: 'Français',
      },
      de: {
        htmlLang: 'de',
        label: 'Deutsch',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/quarka-org/docs.quarka.org/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/quarka-org/docs.quarka.org/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en', 'ja', 'es', 'fr', 'de']
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: 'QA Advisor Documentation',
        logo: {
          alt: 'QA Advisor Logo',
          src: 'img/qa-new-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userManualSidebar',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developerManualSidebar',
            position: 'left',
            label: 'Developer Guide',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'releaseNotesSidebar',
            position: 'left',
            label: 'Release Notes',
          },
          {
            type: 'docSidebar',
            sidebarId: 'faqSidebar',
            position: 'left',
            label: 'FAQ',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/quarka-org/docs.quarka.org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/docs/user-manual',
              },
              {
                label: 'Developer Guide',
                to: '/docs/developer-manual',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/quarka-org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Release Notes',
                to: '/docs/release-notes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quarka Organization. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      headTags: [
        {
          tagName: 'script',
          attributes: {},
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KPXJJV3M');`,
        },
        {
          tagName: 'noscript',
          attributes: {},
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPXJJV3M" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
