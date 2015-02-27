/**
 * Created by rafael on 25/02/15.
 */
angular.module('fisio.menu')
  .provider('menuService', function () {

    var service = this;

    service.menu = [];

    service.addMenu = function (newMenu) {
      service.menu.push(newMenu);
    }

    service.$get = function () {

      this.getMenu = function () {
        return service.menu;
      }

      return this;
    }
  });
