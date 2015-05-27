/**
 * Created by Melo on 2015/3/6.
 */

angular.module('loopbackjs.module.home')
  .directive('nbHeader', ['LOOPBACK', function(LOOPBACK) {
    return {
      restrict: 'A',
      replace: false,
      templateUrl: NEBLE.viewFilesPrefixPath + 'home/views/header.html',
      link: function(scope, element) {
        scope.appName = NEBLE.appName;
      }
    };
  }]);
