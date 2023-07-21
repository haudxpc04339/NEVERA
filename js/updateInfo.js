app.controller("infoFormController", function($scope,$http){
    const user = JSON.parse(localStorage.getItem('user'));
    $scope.username = user.username;
    $scope.email = user.email;
    $scope.phone = user.phone;
    let idUser = user.id;
   $http.get(`http://localhost:3000/users/${idUser}`).then(
     function (response) {
         $scope.password = response.data.password;
     })
    $scope.update = function () {
       let user = {
            username: $scope.username,
            email: $scope.email,
            phone: $scope.phone,
            password: $scope.Password
       }
    
    $http.put(`http://localhost:3000/users/${idUser}`, user).then(
        function (response){
          if (response.status == 200) {
              const userData = response.data;
              localStorage.setItem('user', JSON.stringify(userData));
              alert("Update successfully")
          }else {
              alert("Update failed")
          }
    });  
    }           

});