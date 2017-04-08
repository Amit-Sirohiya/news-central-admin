/**
 * Created by Amit on 08-04-2017.
 */

angular.module('news-hub.common', [])
    .constant('api', {
        newsServer: '/news-central'
    })
    .constant('toastr', toastr);