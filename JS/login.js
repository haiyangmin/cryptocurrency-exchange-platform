angular.module('myApp', [])
.controller('loginController',loginController);
function loginController() {
  var vm = this; 
   vm.myInput = document.getElementById("pwd");
   vm.letter = document.getElementById("letter");
   vm.capital = document.getElementById("capital");
   vm.number = document.getElementById("number");
   vm.length = document.getElementById("length");
   vm.showme = false;

vm.showMessage = function(){
    vm.showme = true;
}

vm.hideMessage = function(){
    vm.showme = false;;
}

vm.validate = function(){
// Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(vm.myInput.value.match(lowerCaseLetters)) {  
    vm.letter.classList.remove("invalid");
    vm.letter.classList.add("valid");
  } else {
    vm.letter.classList.remove("valid");
    vm.letter.classList.add("invalid");
  }
  
  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(vm.myInput.value.match(upperCaseLetters)) {  
    vm.capital .classList.remove("invalid");
    vm.capital .classList.add("valid");
  } else {
    vm.capital .classList.remove("valid");
    vm.capital .classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if(vm.myInput.value.match(numbers)) {  
    vm.number.classList.remove("invalid");
    vm.number.classList.add("valid");
  } else {
    vm.number.classList.remove("valid");
    vm.number.classList.add("invalid");
  }
  
  // Validate length
  if(vm.myInput.value.length >= 8) {
    vm.length.classList.remove("invalid");
    vm.length.classList.add("valid");
  } else {
    vm.length.classList.remove("valid");
    vm.length.classList.add("invalid");
  }
}

 
}