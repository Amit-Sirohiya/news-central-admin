'use strict';

// Declare app level module which depends on views, and components
angular.module('news-hub', [
  'ngAnimate', 'ngAria', 'ngMaterial', 'ngResource', 'ngMessages',
  'ui.router',
  'news-hub.version'
]).
config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //$locationProvider.hashPrefix('!');

  //$routeProvider.otherwise({redirectTo: '/view1'});
      $stateProvider
          .state('news-hub', {
              url : '/news-hub',
              templateUrl: 'news/news.tpl.html'
          });
      $urlRouterProvider.otherwise('/news-hub');

      $locationProvider.html5Mode(false);
});
