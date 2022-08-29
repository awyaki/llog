const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "~": path.resolve(__dirname, "../src/renderer"),
        },
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
          {
            test: /\.tsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: "babel-loader",
          },
        ],
      },
    };
  },
};
