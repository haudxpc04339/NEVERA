
app.controller("registerFormController",function ($scope,$http) {
       $scope.username = "",
       $scope.email = "",
       $scope.phone = "",
       $scope.password = "",
       $scope.confirmPassword = "",
   
    $scope.register = function () {
        let user =  {
            username: $scope.username,
            email: $scope.email,
            phone: $scope.phone,
            password: $scope.password,
       }
       $scope.submitted = true;
        if ($scope.password != $scope.confirmPassword){
            alert("Password and confirm Password are not the same.Please try again later.")
            return;
        }
        if ($scope.username == "" || $scope.phone == "" || $scope.email == ""){
          alert("Please enter full information ");
          return;
       }
       $http.post('http://localhost:3000/users', user).then(
        function (response){
            if (response.status == 201) {
                alert("Successful account registration")
            }else {
                alert("Account registration failed")
            }
        }
       )
    };
});

