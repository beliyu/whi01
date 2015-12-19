
import IScope = angular.IScope;

class AlertsCtrl{
    constructor($scope){
        $scope.alerts = [{
            type: 'success',
            msg: 'Well done! You seccessfully read message.'
        }, {
            type: 'danger',
            msg: 'Holy gaucamole. Chage this.'
        }];

        $scope.addAlert = function() {
            $scope.alerts.push({
                msg: 'Another alert!'
            });
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

    }
}

angular
    .module('RDash')
    .controller('AlertsCtrl', ['$scope', AlertsCtrl]);