'use strict';

describe('news-hub.version module', function() {
  beforeEach(module('news-hub.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
