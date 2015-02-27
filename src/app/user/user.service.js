/**
 * Created by rafael on 25/02/15.
 */
'use strict';

angular.module('user')
  .service('UserService', function () {
    var self = this;

    var _usuario;

    self.getUsuario = function() {
      return _usuario;
    }

    self.setUsuario = function (usuario) {
      _usuario = usuario;
    }
  });
