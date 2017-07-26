import { CompareAngularPage } from './app.po';

describe('compare-angular App', () => {
  let page: CompareAngularPage;

  beforeEach(() => {
    page = new CompareAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
