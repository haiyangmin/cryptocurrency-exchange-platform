angular.module('myApp')
.factory('Countries',countries)
.controller('registerController',['$scope', 'Countries',registerController]);

function registerController($http , Countries) {
  var vm = this;
  vm.selectedRegister = "手机号码";
  vm.displayCode = true;
  vm.showPhone = true;
  vm.showEmail = false;
  vm.showWaring = true;
  vm.emailRequired = false;
  vm.phoneRequired = true;
  vm.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  vm.strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  vm.mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
  vm.pwdStrength = "";
  vm.passwordStrength = {
                    "width": "80px",
                    "color": "black"
                };

  vm.countries = Countries;

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

vm.changeCode = function (e){
document.getElementById("dialCode").value = document.getElementById("countries").value;
}

vm.phoneRegister = function (){
vm.selectedRegister = "手机号码";
vm.displayCode = true;
vm.showPhone = true;
vm.showEmail = false;
vm.emailRequired = false;
vm.phoneRequired = true;
document.getElementById('phoneRegister').style.color = "blue";
document.getElementById('emailRegister').style.color = "black";
vm.showWarning = false;
}

vm.emailRegister = function (){
vm.selectedRegister = "邮箱";
vm.displayCode = false;
vm.showPhone = false;
vm.showEmail = true;
vm.showWarning = true;
vm.emailRequired = true;
vm.phoneRequired = false;
document.getElementById('emailRegister').style.color = "blue";
document.getElementById('phoneRegister').style.color = "black";
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
