/**
 * Created by Amit on 06-12-2016.
 */

angular.module('news-hub.category')
    .service('CategoryService', function ($http, api) {
        this.all = function () {
            return $http.get(api.newsServer + '/v1/category');
        };
    });