(function (angular) {

    'use strict';


    var module = angular.module('rcGallery');


    module.directive('rcGallery', [ function () {
        return {
            restrict: 'EA',
            scope: {
                loadUrls: '&rcgLoadUrls',
                onGalleryReady : '&rcgOnGalleryReady'
            },
            controller: "rcGalleryCtrl",
            controllerAs: "rcGalleryApi",
            link: {
                pre: function (scope, elem, attrs, controller) {

                    scope.rcGalleryApi.rcGalleryElement = angular.element(elem);

                }
            }
        };
    }]);

}(angular));
