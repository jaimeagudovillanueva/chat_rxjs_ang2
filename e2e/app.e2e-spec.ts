import { Ang2chatPage } from './app.po';

describe('ang2chat App', () => {
  let page: Ang2chatPage;

  beforeEach(() => {
    page = new Ang2chatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
