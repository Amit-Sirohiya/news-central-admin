/**
 * Created by Amit on 20-12-2016.
 */

angular.module("news-hub.navigation", [])
    .controller("NavigationController", function ($scope, $state) {
        $scope.goToDashboard = function () {
            $state.go('news-hub.dashboard');
        };
        $scope.navigateTo = function () {
            $state.go('news-hub.news.list');
        };
    });