module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-jucian0`
  extends: ["jucian0"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
