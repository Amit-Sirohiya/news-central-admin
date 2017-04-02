/**
 * Created by Amit on 06-12-2016.
 */

angular.module('news-hub.dashboard', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('news-hub.dashboard', {
                url : '/dashboard',
                views : {
                    '@' : {
                        templateUrl: "dashboard/dashboard.tpl.html",
                        controller: "DashboardController"
                    },
                    'news-content@news-hub.dashboard' : {
                        templateUrl: "common/news-container.tpl.html"
                    }
                }
            });
    });