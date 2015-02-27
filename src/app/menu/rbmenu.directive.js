/**
 * Created by rafael on 25/02/15.
 */
angular.module('fisio.menu')
  .directive('rbMenu', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      templateUrl: 'app/menu/rbmenu.html'
    }
  });
