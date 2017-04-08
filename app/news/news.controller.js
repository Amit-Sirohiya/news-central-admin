/**
 * Created by Amit on 06-12-2016.
 */

angular.module('news-hub.news')

    //.config(function ($mdThemingProvider) {
    //    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    //    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    //    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    //    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    //})

    .controller('NewsController', function ($scope, $state, $stateParams, $location, CategoryService, NewsService, logger) {

        $scope.url = $location.absUrl();

        $scope.show = {
            darkTheme: true
        };

        $scope.categories = [];
        $scope.newsList = [];
        $scope.news = {
            title: '', source: '', description: '', publishedOn: new Date().toDateString(), categories : []
        };

        if ($stateParams.mode === 'list') {
            NewsService.all()
                .then(function (newsList) {
                    $scope.newsList = newsList.data;
                });
        }

        if ($stateParams.mode === 'create') {
            CategoryService.all()
                .then(function (categoryList) {
                    $scope.categories = categoryList.data;
                });
            $scope.selected = {
                item: null,
                searchText: null
            };
        }
        if($stateParams.mode === 'view'){
            CategoryService.all()
                .then(function (categoryList) {
                    $scope.categories = categoryList.data;
                    return NewsService.get($stateParams.id);
                })
                .then(function (newsdata) {
                    var news = newsdata.data;
                    $scope.news.id = news.id;
                    $scope.news.title = news.title;
                    var matchedCategory = _.find($scope.categories, function (category) {
                        return category.id === news.categoryId;
                    });
                    $scope.news.categories.push(matchedCategory.name);
                    $scope.news.source = news.source;
                    $scope.news.description = news.description;
                    $scope.news.publishedOn = news.publishedOn;
                });
        }

        $scope.searchCategory = function (searchText) {
            if(!searchText){
                return [];
            }
            var lowercaseQuery = searchText.toLowerCase();
            return _.filter($scope.categories, function (category) {
                if(category.name.toLowerCase().indexOf(lowercaseQuery) === 0){
                    return true;
                }
            });
        };

        $scope.view = function (id) {
            $state.go('news-hub.news.view', {
                id : id
            });
        };

        $scope.deleteNews = function (id) {
            NewsService.delete(id)
                .then(function () {
                    $scope.newsList = _.filter($scope.newsList, function (news) {
                        if(news.id !== id){
                            return true;
                        }
                    });
                    //logger.success("News deleted successfully.");
                });
        };
        $scope.save = function () {
            var newsToSave = {
                title : $scope.news.title,
                source : $scope.news.source,
                description : $scope.news.description,
                publishedOn : $scope.news.publishedOn,
                categoryId : _.first($scope.news.categories).id
            };
            console.log("%c News", "color: blue;", $scope.news);
            NewsService.save(newsToSave)
                .then(function (data, status, headers, config) {
                    logger.success("News Saved.");
                })
                .catch(function (error) {
                    logger.error(error);
                });
        };

        $scope.cancel = function () {
            $state.go('news-hub.dashboard');
        };
    });