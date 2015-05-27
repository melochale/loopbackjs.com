/**
 * Created by Melo on 2015/3/6.
 */

angular.module('loopbackjs.module.home')
  .directive('nbFooter', ['LOOPBACK', function(LOOPBACK) {
    return {
      scope: {
      },
      restrict: 'A',
      templateUrl: NEBLE.viewFilesPrefixPath + 'home/views/footer.html',
      controller: 'FooterCtrl'
    };
  }]);
