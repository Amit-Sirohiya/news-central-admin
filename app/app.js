'use strict';

// Declare app level module which depends on views, and components
angular.module('news-hub', [
    'ngAnimate', 'ngAria', 'ngMaterial', 'ngResource', 'ngMessages',
    'ui.router',
    // the templates cache
    'templates-app', 'templates-common',
    'news-hub.blocks.router',
    'news-hub.version',
    'news-hub.navigation',
    'news-hub.dashboard',
    'news-hub.news'
])

    .controller('MainController', function () {

    });
