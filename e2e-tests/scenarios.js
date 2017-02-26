'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /mortgage when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/mortgage");
  });


  describe('mortgage', function() {

    beforeEach(function() {
      browser.get('index.html#!/mortgage');
    });


    it('should render mortgage when user navigates to /mortgage', function() {
      expect(element.all(by.css('[ng-view] label')).first().getText()).
        toMatch(/Loan Amount/);
    });

  });


  describe('retirement', function() {

    beforeEach(function() {
      browser.get('index.html#!/retirement');
    });


    it('should render retirement when user navigates to /retirement', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Coming Soon, keep your day job!/);
    });

  });
});
