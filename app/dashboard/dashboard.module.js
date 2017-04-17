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
    }).directive('dynFbCommentBox', function () {
    function createHTML(href, numposts, colorscheme, width) {
        return '<div class="fb-comments" ' +
            'data-href="' + href + '" ' +
            'data-numposts="' + numposts + '" ' +
            'data-colorsheme="' + colorscheme + '" ' +
            'data-width="' + width + '">' +
            '</div>';
    }


    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            attrs.$observe('pageHref', function (newValue) {
                var href        = newValue;
                var numposts    = attrs.numposts    || 5;
                var colorscheme = attrs.colorscheme || 'light';
                var width = attrs.width || '100%';
                elem.html(createHTML(href, numposts, colorscheme, width));
                    FB.XFBML.parse(elem[0]);
            });
        }
    };

});
