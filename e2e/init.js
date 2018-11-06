require('babel-polyfill');
const detox = require('detox');
const config = require('../package.json').detox;

// console.error('error:', before);
jest.setTimeout(60000);

beforeAll(async () => {
  await detox.init(config);
});

afterAll(async () => {
  await detox.cleanup();
});
