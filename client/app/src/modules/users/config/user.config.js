/**
 * Created by Melo on 2015/3/6.
 */

angular.module('loopbackjs.module.users')
  .config(['$stateProvider', 'NEBLE', function($stateProvider, NEBLE) {
    $stateProvider
      .state('user', {
        url: '/user',
        controller: 'ContactCtrl',
        templateUrl: NEBLE.viewFilesPrefixPath + 'users/views/contact.html'
      });
  }]);