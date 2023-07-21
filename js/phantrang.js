app.controller("myctrl", async function ($scope, $http) {
    $scope.products = [];
    await $http.get("./js/Prods2.js").then( function (response) {
        $scope.products = response.data;
      });

    $scope.prop = "name";
    $scope.sortBy = function (prop) {
      $scope.prop = prop;
    }
    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.products.length / 8);

    $scope.first = function () {
      $scope.begin = 0;
    }
    $scope.prev = function () {
      if ($scope.begin > 0) {
        $scope.begin -= 8;
      }
    }
    $scope.next = function () {
      if ($scope.begin < ($scope.pageCount - 1) * 8) {
        $scope.begin += 8;
      }
    }
    $scope.last = function () {
      $scope.begin = ($scope.pageCount - 1) * 8;
    }
  });
