app.controller("changePassFormController", function($scope,$http){
    const user = JSON.parse(localStorage.getItem('user'));
    $scope.username = user.username;
    $scope.email = user.email;
    $scope.phone = user.phone;
    $scope.password = "";
    $scope.newPassword = "";
    $scope.confirmNewPassword = "";
    let idUser = user.id;
   
    $scope.change = function () {
        
       let user = {
            username: $scope.username,
            email: $scope.email,
            phone: $scope.phone,
            password: $scope.newPassword
       }
       $http.get(`http://localhost:3000/users/${idUser}`, user).then(
            function (response) {
                if ($scope.password != response.data.password) {
                      alert("incorrect password");
                }else{
                    $http.put(`http://localhost:3000/users/${idUser}`, user).then(
                        function (response){
                          if (response.status == 200) {
                              const userData = response.data;
                              localStorage.setItem('user', JSON.stringify(userData));
                              alert("Change password successfully")
                          }else {
                              alert("Password change failed")
                          }
                        })
                }
            }
        )
       $scope.submitted = true;
       if ($scope.newPassword != $scope.confirmNewPassword){
           alert("Password and confirm Password are not the same.Please try again later.")
           return;
       }
      
    }
})