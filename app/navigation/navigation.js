/**
 * Created by Amit on 20-12-2016.
 */

angular.module("news-hub.navigation", [])
    .controller("NavigationController", function ($scope, $state) {
        $scope.goToDashboard = function () {
            $state.go('news-hub.dashboard');
        };
        $scope.navigateTo = function (stateName) {
            if(stateName) {
                $state.go(stateName);
            }
            else{
                $state.go('news-hub.news.list');
            }
        };
        $scope.navigateTo1 = function () {
            $state.go('news-hub.news.edit');
        };
    });