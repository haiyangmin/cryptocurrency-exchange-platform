angular.module('myApp')
.controller('pwd_resetController',['$scope',pwd_resetController]);

function pwd_resetController($http) {
  var vm = this;

  vm.strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  vm.mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
  vm.pwdStrength = "";
  vm.passwordStrength = {
                    "width": "80px",
                    "color": "black"
                };

vm.analyze = function (value) {
                    if(vm.strongRegex.test(value)) {
                        vm.passwordStrength["background-color"] = "green";
                        vm.pwdStrength = "强";
                    } else if(vm.mediumRegex.test(value)) {
                        vm.passwordStrength["background-color"] = "orange";
                        vm.pwdStrength = "中";
                    } else {
                        vm.passwordStrength["background-color"] = "red";
                        vm.pwdStrength = "弱";
                       
                    }
                }

 
vm.load = function (){
  $http({
        url: "https://www.w3schools.com/angular/customers.php",
        method: "GET",
 
    })
    .then(function mySuccess(response) {
       vm.myData = response.data.records;
    },
    function myError(response) {
        alert(response.statusText);
    });
   }
    
}
