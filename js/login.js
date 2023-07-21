
app.controller("loginFormController",function ($scope, $rootScope, $http) {
   $rootScope.user = null;
   $scope.email = '',
   $scope.password = ''
   
   $scope.login = function () {
    $http.get('http://localhost:3000/users').then(
        function (response) {
            const user = response.data;
            const checkUser = user.find(function (item) {
                return item.email == $scope.email && item.password == $scope.password;
            });
            if (checkUser) {
                localStorage.setItem('user', JSON.stringify(checkUser));
                alert('Login successfully');
                $rootScope.user = checkUser;
               
            }else{
             alert('Login failed');
            }
        }
    )
   }  
   $rootScope.logout = function(){
    alert("Logout successfully");
    $rootScope.user = null;
    return;
} 
});