import { Proj6HttpPage } from './app.po';

describe('proj6-http App', function() {
  let page: Proj6HttpPage;

  beforeEach(() => {
    page = new Proj6HttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
