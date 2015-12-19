

class rdWidget {
    constructor(){
        let directive = {
            transclude: true,
            template: '<div class="widget" ng-transclude></div>',
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            /* */
        }
    }
}
angular
    .module('RDash')
    .directive('rdWidget', [rdWidget]);
