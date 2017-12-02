import { AppPage } from './app.po';

describe('ngapp App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular App');
  });

  it('should have right title', () => {
    page.getPageTitle()
      .then((title: string) => {
        expect(title).toEqual('NodeSense NgApp');
      });
  })
});
