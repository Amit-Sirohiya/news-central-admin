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
                params : {
                    mode : 'list'
                },
                views : {
                    '@' : {
                        templateUrl: "news/news-list.tpl.html",
                        controller: "NewsController"
                    },
                    'news-content@news-hub.news.list' :{
                        templateUrl: "common/news-container.tpl.html"
                    }
                }
            })
            .state('news-hub.news.create', {
                url : '/create',
                params : {
                    mode : 'create'
                },
                views : {
                    '@' : {
                        templateUrl: "news/news-form.tpl.html",
                        controller: "NewsController"
                    }
                }
            })
            .state('news-hub.news.edit', {
                url : '/edit',
                params : {
                    mode : 'edit'
                },
                views : {
                    '@' : {
                        templateUrl: "news/news-list.tpl.html",
                        controller: "NewsController"
                    },
                    'news-content@news-hub.news.edit' :{
                        templateUrl: "common/news-container.tpl.html"
                    }
                }
            })
            .state('news-hub.news.view', {
                url : '/:id',
                views : {
                    '@' : {
                        templateUrl: "news/news.tpl.html",
                        controller: "NewsController"
                    },
                    'news-content@news-hub.news.view' :{
                        templateUrl: "common/news-container.tpl.html"
                    }
                },
                params: {
                    mode: 'view'
                }
            });
    });