'use strict';
angular.module('spaceribs.ngPaper', []).directive('paper', [
  '$http',
  function ($http) {
    return {
      replace: true,
      template: '<canvas></canvas>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var paperscope = new paper.PaperScope();
        paperscope.setup(element[0]);
        $http.get(attrs.src).success(function (data) {
          paper.PaperScript.evaluate(data, paperscope);
        });
      }
    };
  }
]);