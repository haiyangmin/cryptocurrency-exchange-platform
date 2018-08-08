angular.module('myApp')
.controller('paymentController',['$scope','$interval',paymentController]);

function paymentController($http ,$interval) {
  var vm = this;
   vm.paymentInfo = {payMethod: "银行卡" , name: "陈红", note:" (请实名付款，不用备注任何信息)",bankName:"平安银行 北京花园路支行",bankAccount:6225380092722901 } ;
   vm.paymentInfo1 = { payMethod: "银行卡" ,name: "陈红", note:" (请实名付款，不用备注任何信息)",bankName:"平安银行 北京支行",bankAccount:6225555555555501};
   vm.selectedPaymentInfo = null ;
   vm.paymentTimeLimit = 15 ;
   vm.seller = "Xin Yang";
   vm.buyer = "Tongtan" ;
   vm.amount = 1200 ;
   vm.exchangeRate = 1/45000 ;
   vm.unitPrice = 1/vm.exchangeRate;
   vm.exchangedAmount = (vm.amount * vm.exchangeRate).toPrecision(6) ;
   vm.orderId = "#115318321257147";
   vm.referenceNo = 473570 ;
   vm.securityDeposit = "5000HT";
   vm.today = new Date();
   vm.displayMinutes = 0 ;
   vm.displaySeconds = 0 ;
   vm.displayExpire = "支付时间已经过期" ;
   vm.OrderCancelDisplay = false;
   vm.paymentInfoDisplay = true;
   
   vm.pay = function(){
     if(vm.selectedMethod == undefined ){
     alert("请选择付款方式");
     }
    else  vm.selectedPaymentInfo = vm.selectedMethod ;
   };
   
   
   vm.addMinutes = function(date,minutes){
       return new Date(date.getTime() + minutes*60000);
};

   vm.countDownDate = vm.addMinutes(vm.today, vm.paymentTimeLimit).getTime();
 
 
 vm.countTime = function(){
 var x =  $interval(function () {
 
     // Get todays date and time
    let now = new Date().getTime();
   
    // Find the distance between now an the count down date
    let distance = vm.countDownDate - now;
   
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    vm.displayMinutes  = minutes ;
    vm.displaySeconds = seconds ;
   
    // If the count down is over, write some text
    if (distance < 0) {
         $interval.cancel(x);
        vm.displayMinutes = 0 ;
        vm.displaySeconds = 0 ;
       vm.OrderCancelDisplay = true;
       vm.paymentInfoDisplay = false;
    }
  }, 1000);
 
}
 vm.exchangeToBTC = function(){
   vm.exchangedAmount = vm.amount * vm.exchangeRate ;
 };
 
  vm.exchangeToCash = function(){
   vm.amount = vm.exchangedAmount / vm.exchangeRate ;
 };
 
vm.orderCancel = function(){
     vm.OrderCancelDisplay = true;
     vm.paymentInfoDisplay = false;
};

vm.load = function(){
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
   };
   
}
