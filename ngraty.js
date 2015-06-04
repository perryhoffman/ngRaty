angular.module('ngRaty', [])
.directive('ngRaty',[ function () {
  return{
    restrict: "A",
    scope: {
      ngRaty: '=',
      ngModel: '=',
      mouseOver: '&',
      mouseOut: '&'
    },
    link: function ($scope, $element, $attrs) {
      var element = $($element);
      function safeApply(fn) {
        var phase = $scope.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
          if(fn && (typeof(fn) === 'function')) {
            fn();
          }
        } else {
          $scope.$apply(fn);
        }
      };

      var rating  = $scope.ngModel;
      var raty    = {
        score: parseFloat(rating, 10),
        click: function(stars, evt){
          evt.stopPropagation();
          if(!stars) stars = 0;
          safeApply(function(){
            $scope.ngModel = parseFloat(stars);
          });
        },
        mouseover: function(stars, evt) {
          if(!$scope.mouseOver) return;
          safeApply(function(){
            $scope.mouseOver({stars: stars, e: evt});
          });
        },
        mouseout: function(stars, evt) {
          if(!$scope.mouseOut) return;
          safeApply(function(){
            $scope.mouseOut({stars: stars, e: evt});
          });
        }
      };
      var options = angular.extend(raty, $scope.ngRaty || {});
      element.raty(options);

      // Set view to score if model changes
      $scope.$watch('ngModel', function(newValue, oldValue){
        element.raty('score', $scope.ngModel);
      });

      function destroy(){
        element.raty('destroy');
      }
      element.bind('$destroy', destroy);
    }
  }
}]);