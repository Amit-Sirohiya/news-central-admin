/**
 * Created by Amit on 06-04-2017.
 */

angular.module("news-hub.blocks.router", ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();

        $stateProvider
            .state('news-hub', {
                url: '/news-hub',
                abstract: true,
                views: {
                    "navigation.header": {
                        templateUrl: "navigation/navigation.tpl.html",
                        controller: "NavigationController"
                    }
                }
            });
        $urlRouterProvider.otherwise('/news-hub/dashboard');

        $locationProvider.html5Mode(false);

    })
    .run(function ($rootScope) {
        //$rootScope.$on('$viewContentLoaded', function () {
        //    console.log("State change success.");
        //    var fbFunction = function () {
        //        console.log("Inside FB function.");
        //        var id = 'facebook-jssdk';
        //        var fjs = document.getElementsByTagName('script')[0];
        //        if (document.getElementById(id)) {
        //            return;
        //        }
        //        var js = document.createElement('script');
        //        js.id = id;
        //        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
        //        fjs.parentNode.insertBefore(js, fjs);
        //    };
        //    fbFunction();
        //});
    });