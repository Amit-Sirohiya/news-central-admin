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

    .controller('NewsController', function ($scope, $state, $stateParams, $location) {

        $scope.url = $location.absUrl();

        $scope.show = {
            darkTheme: true
        };

        $scope.newsList = [

            {
                id: 1,
                headline: 'Sunidhi Chauhan on the cover of Femina Magazine, March edition',
                subHeading: 'Posted On  08 Mar, 2017 @ 20:53 pm by RnMTeam',
                tags : [ 'Entertainment', 'Bollywood', 'Singer', 'Femina'],
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
                tags : [ 'Entertainment', 'Bollywood', 'Singer', 'Movie'],
                content: 'If you have watched the film, you will know who we are talking about.' +
                'Otherwise, you wouldnt know. So here it is - Kangana Ranaut can be seen grooving to the peppy Bloody Hell number in the period film.' +
                'But along with her, there iss someone else we spotted during the song.' +
                'No, this time, it isn not any other actor but a singer.' +
                'Yes, Sunidhi Chauhan who sung the song was there in three shots and she definitely looked mesmerising in the 40s attire. Go watch the song again to spot her!'
            },
            {
                id: 3,
                headline: 'Indian Idol: 5 reasons LV Revanth might win the show.',
                subHeading: 'Posted On 31st March, 2017 @ 20:53 pm by Sony TV',
                tags : [ 'Entertainment', 'TV', 'Reality Show'],
                content: 'The season finale of Indian Idol 9 is just round the corner with just three contestants left - LV Revanth Kumar, Khuda Baksh and PVNS Rohit.' +
                'From fourteen they are down to just three after Maalavika Sundar was eliminated on Saturday.' +
                'These three singers will put their best foot forward for the coveted title of Indian Idol but Vishakhapatnams LV Revanth is our favourite.' +
                'Revanth is a budding professional and has immense talent. Here are five reasons why we think he might win this season of Indian Idol.'
            },
            {
                id: 4,
                headline: 'Jio on a roll, claims 72 million as Prime members in one month',
                subHeading: 'Posted On  31 Mar, 2017 @ 07:00 pm by TOI',
                tags : [ 'Communication', 'Recharge', 'Mobile'],
                content: 'Reliance Jio Infocomm Ltd. announced on March 31, 2017, that in just one month, over 72 million customers have signed up for Jio Prime.' +
                'According to a company press release, this is the largest migration from free to paid services in history in such a short period of time.' +
                'The release said,Considering the unprecedented demand for enrolling to Jio Prime and doing the first recharge, ' +
                'Jio has extended the deadline for purchasing Jio Rs 303 (and other) plans till April 15. ' +
                'This extension will provide the necessary breathing room for users to avoid service disruption during the transition from free to paid services.'
            }
        ];

        $scope.view = function (id) {
            $state.go('news-hub.news.view', {
                id : id
            });
        };

        if($stateParams.mode === 'view'){
            $scope.news = _.find($scope.newsList, function (news) {
                return news.id === Number($stateParams.id);
            });
        }
    });