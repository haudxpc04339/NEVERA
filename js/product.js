// const app = angular.module("myApp", []);
app.controller("list",function ($scope, $http){
    $http.get("http://localhost:3000/products").then(function (res){
        $scope.products = res.data;
    });
});