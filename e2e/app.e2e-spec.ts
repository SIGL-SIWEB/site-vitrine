import { SiteVitrinePage } from './app.po';

describe('site-vitrine App', () => {
  let page: SiteVitrinePage;

  beforeEach(() => {
    page = new SiteVitrinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
