const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('homeText'))).toBeVisible();
    await expect(element(by.id('testId'))).toBeVisible();
    // await expect(element(by.label('Settings'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await expect(element(by.id('testId'))).toBeVisible();
    // await expect(element(by.id('settingsText'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.label('World!!!'))).toBeVisible();
  // });
});
