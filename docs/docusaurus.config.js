/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ensemble',
  tagline: 'loltgt ensemble project',
  url: 'https://loltgt.github.io',
  baseUrl: '/ensemble/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'loltgt',
  projectName: 'ensemble',
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'demos',
        path: 'demos',
        editUrl: 'https://github.com/loltgt/ensemble-docs',
        editCurrentVersion: true,
        routeBasePath: 'demos',
        sidebarPath: require.resolve('./sidebars-demos.js')
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'ensemble',
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'demos/',
          activeBasePath: 'demos',
          label: 'Demos',
          position: 'left',
        },
        {
          href: 'https://github.com/loltgt/ensemble',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/loltgt/ensemble',
            },
          ],
        },
      ],
      copyright: '<p>Copyright © Leonardo Laureti</p>\n<p>Built with Docusaurus.</p>',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/loltgt/ensemble-docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
