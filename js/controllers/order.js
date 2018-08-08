angular.module('myApp')
.controller('orderController',['$scope',orderController]);

function orderController($http) {
  var vm = this;
   vm.bid = "0.10 CNY";
   vm.limit = "10-1,126 CNY";
   vm.paymentMethod = "	支付宝微信银行卡";
   vm.paymentTime = "30分钟" ;
   vm.transactionTimes = 81 ;
   vm.positiveComments = 28 ;
   vm.negetiveComments =  1 ;
   vm.seller ="Xin Yang";
   vm.amount = 0 ;
   vm.exchangedAmount = 0 ;
   vm.exchangeRate = 0.00043 ;

 
 vm.exchangeToBTC = function(){
   vm.exchangedAmount = vm.amount * vm.exchangeRate ;
 }
 
  vm.exchangeToCash = function(){
   vm.amount = vm.exchangedAmount / vm.exchangeRate ;
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
