'use strict';

describe('Module: ngPaper', function () {
    var scope, element;

    // load the directive's module
    beforeEach(module('spaceribs.ngPaper'));

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    afterEach(function () {
        scope.$destroy();
    });

    it('should have initialized a new project into Paper', inject(function ($compile) {
        element = angular.element('<paper src="drawing_test.js" width="300" height="300"></paper>');
        element = $compile(element)(scope);
        expect(paper.projects.length).toBeGreaterThan(0);
    }));

});