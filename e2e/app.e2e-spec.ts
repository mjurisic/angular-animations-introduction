import { AngularAnimationDemoPage } from './app.po';

describe('angular-animation-demo App', () => {
  let page: AngularAnimationDemoPage;

  beforeEach(() => {
    page = new AngularAnimationDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
