'use strict';

angular.module('spaceribs.ngPaper', [])
    .directive('paper', ['$http', function ($http) {
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
    }])
    .directive('paperscript', [function () {
        return {
            replace: true,
            template: '<canvas></canvas>',
            restrict: 'E',
            compile: function () {
                var paperscript = '';
                return {
                    pre: function preLink(scope, iElement) {
                        paperscript = iElement.text();
                    },
                    post: function postLink(scope, iElement) {
                        var paperscope = new paper.PaperScope();
                        paperscope.setup(iElement[0]);
                        paper.PaperScript.evaluate(paperscript, paperscope);
                    }
                };
            }
        };
    }]);
