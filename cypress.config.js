const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://www.saucedemo.com',
      viewportWidth: 1920,
      viewportHeight: 1080,
      chromeWebSecurity: false,
      specPattern: "**/*.feature",
      excludeSpecPattern: "*.js,*.ts",
    setupNodeEvents(on, config) {
        return require('./cypress/plugins/index.js')(on,config)
    },
  },
});
