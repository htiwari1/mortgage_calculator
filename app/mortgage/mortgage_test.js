'use strict';

describe('myApp.mortgage module', function() {

  beforeEach(module('myApp.mortgage'));

  describe('mortgage controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var mortgageCtrl = $controller('MortgageCtrl');
      expect(mortgageCtrl).toBeDefined();
    }));

  });
});