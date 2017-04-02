/**
 * Created by Amit on 06-12-2016.
 */

angular.module('news-hub.news')



    .controller('DashboardController', function ($scope, $state) {
        $scope.show = {
            darkTheme: true
        };

        $scope.view = function (id) {
            $state.go('news-hub.news.view', {
                id : id
            });
        };

        $scope.newsList = [
            {
                id: 1,
                headline: 'Sunidhi Chauhan on the cover of Femina Magazine, March edition',
                subHeading: 'Posted On  08 Mar, 2017 @ 20:53 pm by RnMTeam',
                content: "This Womens Day is indeed special for one of Bollywoods biggest playback singer, Sunidhi Chauhan." +
                "The singer who made 2017 grand with Rangoon track 'Bloody Hell' is pushing the envelope further by not just limiting herself to music." +
                "The singer made it to the March 2017 cover of 'Femina' magazine." +
                "Yes, Sunidhi looks both powerful and in control on the March 2017 Femina cover." +
                "The singer who has earlier tried her hands at acting is now exploring more with Femina." +
                "An overjoyed Sunidhi shared the magazine cover on her social media accounts and also expressed her happiness."
            },
            {
                id: 2,
                headline: 'OMG: Sunidhi Chauhan played cameo in Kangana Ranauts Bloody Hell from Rangoon',
                subHeading: 'Posted On  24 Feb, 2017 @ 20:53 pm by DNA webdesk',
                content: 'If you have watched the film, you will know who we are talking about.' +
                'Otherwise, you wouldnt know. So here it is - Kangana Ranaut can be seen grooving to the peppy Bloody Hell number in the period film.' +
                'But along with her, there iss someone else we spotted during the song.' +
                'No, this time, it isn not any other actor but a singer.' +
                'Yes, Sunidhi Chauhan who sung the song was there in three shots and she definitely looked mesmerising in the 40s attire. Go watch the song again to spot her!'
            }
        ];
    });