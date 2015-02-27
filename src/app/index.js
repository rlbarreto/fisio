'use strict';

angular.module('fisio', ['ngAnimate', 'ngCookies', 'ngSanitize', 'restangular', 'ui.router', 'ngMaterial',
  'fisio.menu'
])
  .config(function ($stateProvider, $urlRouterProvider, menuServiceProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controllerAs: 'mainCtrl',
        controller: 'MainController'
      });

    $urlRouterProvider.otherwise('/');

    menuServiceProvider.addMenu({label: 'Teste', subMenu: [{label: 'Teste1'}]});
  })
;
