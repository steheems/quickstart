import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {
  beforeEach(function () {
    browser.get('');
  });

  it('should display the menu', function () {
    expect(element(by.css('ul')).getText()).toContain('Home');
    expect(element(by.css('ul')).getText()).toContain('About');
  });

});
