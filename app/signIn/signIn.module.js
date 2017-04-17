/**
 * Created by Aayushi Sharma on 21-10-2016.
 */

angular.module('news-hub.signIn', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('news-hub.signIn',{
                url: '/login',
                views : {
                    '@': {
                        templateUrl: "signIn/signIn.tpl.html",
                        controller: 'SignInController'
                    }
                }
            });
    });
window.fbAsyncInit = function () {
    FB.init({
        appId: 1809515272633049,
        xfbml: true,
        version: 'v2.8'
    });
    FB.AppEvents.logPageView();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));