'use strict';

// Declare app level module which depends on views, and components
angular.module('news-hub', [
    'ngAnimate', 'ngAria', 'ngMaterial', 'ngResource', 'ngMessages',
    'ui.router',
    // the templates cache
    'templates-app', 'templates-common',
    'news-hub.version',
    'news-hub.navigation',
    'news-hub.news'
]).
    config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        //$locationProvider.hashPrefix('!');

        //$routeProvider.otherwise({redirectTo: '/view1'});
        $stateProvider
            .state('news-hub', {
                url: '/news-hub',
                templateUrl: 'news/news.tpl.html',
                views: {
                    "navigation.header": {
                        templateUrl: "navigation/navigation.tpl.html",
                        controller: "NavigationController"
                    }
                }
            });
        $urlRouterProvider.otherwise('/news-hub/news/list');

        $locationProvider.html5Mode(false);
    });
