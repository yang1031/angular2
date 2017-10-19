import { AngularaaaPage } from './app.po';

describe('angularaaa App', () => {
  let page: AngularaaaPage;

  beforeEach(() => {
    page = new AngularaaaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
