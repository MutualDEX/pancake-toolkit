module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
     name: "@storybook/addon-essentials",
      options: {
        backgrounds: true,
        toolbars: true,
        controls: true,
        actions: true,
        viewport: true,
        docs: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "themeprovider-storybook/register",
  ],
};
