'use strict';

// Declare app level module which depends on views, and components
angular.module('news-hub', [
    'ngAnimate', 'ngAria', 'ngMaterial', 'ngResource', 'ngMessages',
    'ui.router',
    // the templates cache
    'templates-app', 'templates-common',
    'news-hub.version',
    'news-hub.navigation',
    'news-hub.dashboard',
    'news-hub.news'
]).
    config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
        //$locationProvider.hashPrefix('!');

        //$mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        //$mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        //$mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();

        $stateProvider
            .state('news-hub', {
                url: '/news-hub',
                abstract :true,
                views: {
                    "navigation.header": {
                        templateUrl: "navigation/navigation.tpl.html",
                        controller: "NavigationController"
                    }
                }
            });
        $urlRouterProvider.otherwise('/news-hub/dashboard');

        $locationProvider.html5Mode(false);
    });
