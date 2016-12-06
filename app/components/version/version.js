'use strict';

angular.module('news-hub.version', [
  'news-hub.version.interpolate-filter',
  'news-hub.version.version-directive'
])

.value('version', '0.1');
