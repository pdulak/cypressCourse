const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1200,
  viewportWidth: 1600,
  e2e: {
    // baseUrl: 'https://fabrykatestow.pl',
    baseUrl: 'https://simpletestsite.fabrykatestow.pl',
    setupNodeEvents(on, config) {

    }
  }
});