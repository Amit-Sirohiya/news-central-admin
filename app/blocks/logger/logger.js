(function () {
    'use strict';

    angular.module('news-hub.blocks.logger', [])
        .factory('logger', function logger($log, toastr) {

            var options = {
                preventDuplicates : true
            };

            return {
                showToasts: true,
                error: error,
                info: info,
                success: success,
                warning: warning,
                log: $log.log // straight to console; bypass toastr
            };


            function error(message, data, title) {
                toastr.error(message, title, options);
                $log.error('Error: ' + message, data);
            }

            function info(message, data, title) {
                toastr.info(message, title, options);
                $log.info('info: ' + message, data);
            }

            function success(message, data, title) {
                toastr.success(message, title, options);
                $log.info('success: ' + message, data);
            }

            function warning(message, data, title) {
                toastr.warning(message, title, options);
                $log.warn('warning: ' + message, data);
            }
        });
}());
