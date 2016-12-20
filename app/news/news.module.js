/**
 * Created by Amit on 06-12-2016.
 */

angular.module('news-hub.news', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('news-hub.news', {
                url : '/news',
                abstract : true,
                template : '<ui-view/>'
            })
            .state('news-hub.news.list', {
                url : '/list',
                views : {
                    '@' : {
                        templateUrl: "news/news.tpl.html",
                        controller: "NewsController"
                    }
                }
            });
    });