const { defineConfig } = require('cypress');
const cypressFirebasePlugin = require('cypress-firebase').plugin;
const admin = require('firebase-admin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    // NOTE: Make supportFile exists if separate location is provided
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
      return cypressFirebasePlugin(on, config, admin);
      // NOTE: If not setting GCLOUD_PROJECT env variable, project can be set like so:
      // return cypressFirebasePlugin(on, config, admin, { projectId: 'some-project' });
    },
  },
});
