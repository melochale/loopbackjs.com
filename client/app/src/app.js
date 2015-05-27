'use strict';

//* App Module 

angular.module('loopbackjs', [
	'ui.router',
  'loopbackjs.module.core',
  'loopbackjs.module.config',
  'loopbackjs.module.home',
  'loopbackjs.module.users'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
  })
  .run(function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  })
  .controller('AppCtrl', ['$scope', function($scope) {

  }]);

