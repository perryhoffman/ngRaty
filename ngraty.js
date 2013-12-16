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
      var rating  = $scope.ngModel;
      var raty    = {
        score: parseFloat(rating, 10),
        click: function(stars, evt){
          evt.stopPropagation();
          if(!stars) stars = 0;
          if(!$scope.$$phase) {
            $scope.$apply(function(){
              $scope.ngModel = parseFloat(stars);
            });
          } else {
            $scope.ngModel = parseFloat(stars);
          }
        },
        mouseover: function(stars, evt) {
          if(!$scope.mouseOver) return;
          $scope.mouseOver({stars: stars, e: evt});
          $scope.$apply(); // TODO add safe apply
        },
        mouseout: function(stars, evt) {
          if(!$scope.mouseOut) return;
          $scope.mouseOut({stars: stars, e: evt});
          $scope.$apply();
        }
      };
      var options = angular.extend(raty, $scope.ngRaty || {});
      $element.raty(options);

      // Set view to score if model changes
      $scope.$watch('ngModel', function(newValue, oldValue){
        $element.raty('score', $scope.ngModel);
      });
    }
  }
}]);