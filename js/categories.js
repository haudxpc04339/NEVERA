app.controller("listCategories",function ($scope, $http){
    $http.get("http://localhost:3000/categories").then(function (res){
        $scope.categories = res.data;
    });
});