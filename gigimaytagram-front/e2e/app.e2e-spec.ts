import { GigimaytagramPage } from './app.po';

describe('gigimaytagram App', () => {
  let page: GigimaytagramPage;

  beforeEach(() => {
    page = new GigimaytagramPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
