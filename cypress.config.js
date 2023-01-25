const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'aie5z3',
  viewportHeight: 1200,
  viewportWidth: 1600,
  e2e: {
    baseUrl: 'https://tapsshop.pl',
  },
});