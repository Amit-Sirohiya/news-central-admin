angular.module('news-hub.signIn')
    .controller('SignInController', function ( $state, $rootScope, $scope) {

        //FB.logout(function(response) {
        //    // user is now logged out
        //});
        if ($rootScope.email) {
            $scope.user = {
                "username": $rootScope.email,
                "password": ""
            };
        } else {
            $scope.user = {
                "username": "",
                "password": ""
            };
        }

        $scope.userLogin = function () {

            if (!$scope.user.username && !$scope.user.password) {
                //logger.error("Both Username and Password are required");
            } else if ($scope.user.username === "" || !$scope.user.username) {
                //logger.error("Username is required");
            } else if ($scope.user.password === "" || !$scope.user.password) {
                //logger.error("Password is required");
            }

        };
        //$scope.skipSignInPage = function () {
        //    $state.go('ocart.menu');
        //
        //};
        //
        //$scope.signUpPage = function () {
        //    $state.go('ocart.signUp');
        //
        //};

        $scope.fbLogin = function () {
            FB.login(function (response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', function (response) {
                        console.log('Good to see you, ' + response.name + '.');
                        $state.go('news-hub.dashboard');
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        };



        var email = $scope.username;

        //$scope.forgotUserPassword = function (email) {
        //    if (email !== "" && email) {
        //        UtilService.showSpinner();
        //        RestApi.adminToken.post()
        //            .then(function (token) {
        //                return RestApi.forgotPassword.put(token.data, email)
        //                    .then(function (status) {
        //                        if (status.data) {
        //                            UtilService.hideSpinner();
        //                            logger.success("password reset link send to your email successfully");
        //                        }
        //                    });
        //            }).catch(function (error) {
        //                UtilService.hideSpinner();
        //                if (error.status === 401 && error.data.message) {
        //                    logger.error(error.data.message);
        //                }
        //            });
        //    }
        //};
    });
