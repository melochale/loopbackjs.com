/**
 * Created by Melo on 2015/3/6.
 */


angular.module('loopbackjs.module.home')
  .config(['$stateProvider', 'LOOPBACK', function($stateProvider, LOOPBACK) {
    $stateProvider
      .state('contact', {
      url: '/contact',
      controller: 'ContactCtrl',
      templateUrl: NEBLE.viewFilesPrefixPath + 'home/views/contact.html'
      });
  }]);