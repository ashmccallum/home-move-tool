import { HomeMoveToolPage } from './app.po';

describe('home-move-tool App', function() {
  let page: HomeMoveToolPage;

  beforeEach(() => {
    page = new HomeMoveToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
