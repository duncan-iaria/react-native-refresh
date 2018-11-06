require('babel-polyfill');
const detox = require('detox');
const config = require('../package.json').detox;

// console.error('error:', before);
jest.setTimeout(30000);

beforeAll(async () => {
  await detox.init(config);
});

afterAll(async () => {
  await detox.cleanup();
});
