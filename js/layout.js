var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "layout/home.html"
        })
        .when("/about", {
            templateUrl: "main/about.html"
        })
        .when("/contact", {
            templateUrl: "main/contact.html"
        })
        .when("/shop", {
        templateUrl: "main/shop.html"
        })
        .when("/blog", {
            templateUrl: "main/blog.html"
        })
        .when("/detailproduct", {
            templateUrl: "main/detailproduct.html"
        })
        .otherwise({
            redirectTo: "/home"
        })
});
app.run(function ($rootScope){
    $rootScope.$on('routeChangeStart', function(){
        $rootScope.loading = true;
    });
    $rootScope.$on('routeChangeSucces',function(){
        $rootScope.loading = false;
    });
    $rootScope.$on('routeChangeError', function(){
        $rootScope.loading = false;
        alert("Lỗi, không tải được template");
    });
});
