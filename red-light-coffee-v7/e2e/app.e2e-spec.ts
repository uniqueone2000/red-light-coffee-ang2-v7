import { RedLightCoffeeV7Page } from './app.po';

describe('red-light-coffee-v7 App', () => {
  let page: RedLightCoffeeV7Page;

  beforeEach(() => {
    page = new RedLightCoffeeV7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
