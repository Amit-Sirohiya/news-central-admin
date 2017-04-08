/**
 * Created by Amit on 06-12-2016.
 */

angular.module('news-hub.news')
    .service('NewsService', function ($http, api, logger) {
        this.all = function () {
            return $http.get(api.newsServer + '/v1/news');
        };

        this.save = function (news) {
            return $http.post(api.newsServer + '/v1/news', news)
                .success(function (data, status, headers, config) {
                    logger.success("News saved successfully.");
                })
                .catch(function (data, status) {
                    logger.error(data);
                });
        };

        this.get = function (id) {
            return $http.get(api.newsServer + '/v1/news/' + id)
                .success(function (data, status, headers, config) {
                    logger.success("News fetched successfully.");
                })
                .catch(function (data, status) {
                    logger.error(data);
                });
        };

        this.delete = function (id) {
            return $http.delete(api.newsServer + '/v1/news/' + id)
                .success(function (data, status, headers, config) {
                    logger.success("News deleted successfully.");
                })
                .catch(function (data, status) {
                    logger.error(data);
                });
        };
    });