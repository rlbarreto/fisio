 'use strict';

angular.module('fisio')
  .controller('MainController', function (menuService) {
    var self = this;

    self.menu = menuService.getMenu();

  });
