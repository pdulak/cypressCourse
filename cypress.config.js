const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://fabrykatestow.pl',
    setupNodeEvents(on, config) {

    }
  }
});