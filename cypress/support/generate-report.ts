const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './cypress/reports/cucumber-json',
  reportPath: './cypress/reports/cucumber-html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '120'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  },
  customData: {
    title: 'Cypress Cucumber Test Report',
    data: [
      { label: 'Project', value: 'Assert Edge Automation' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Time', value: new Date().toLocaleString() }
    ]
  }
});

console.log('Report generated at: cypress/reports/cucumber-html/index.html');