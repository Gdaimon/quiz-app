import { TestIngresoPage } from './app.po';

describe('test-ingreso App', () => {
  let page: TestIngresoPage;

  beforeEach(() => {
    page = new TestIngresoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
