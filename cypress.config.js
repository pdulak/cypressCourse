const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'aie5z3',
  viewportHeight: 1200,
  viewportWidth: 1600,
  e2e: {
    // baseUrl: 'https://fabrykatestow.pl',
    // baseUrl: 'https://simpletestsite.fabrykatestow.pl',
    baseUrl: 'https://tapsshop.pl',
  },
});