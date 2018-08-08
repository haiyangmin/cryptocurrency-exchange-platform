angular.module('myApp')
   .controller('ordinaryTradeController',ordinaryTradeController);
   
function ordinaryTradeController($http) {
  var vm = this;
   vm.pageSize = 10;
  vm.sort = function(keyname){
        vm.sortKey = keyname;   //set the sortKey to the param passed
        vm.reverse = !$scope.reverse; //if true make it false and vice versa
    };
    vm.table = true ;
  vm.selectedCountry =  "中国" ;
  vm.selectedCurrency = "人民币" ;
  vm.selectedPayMethod = "全部支付方式" ;
  vm.myData = [
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
},
{
"name": "猪头杀 (5323 | 99%)",
"qty": "0.859656 BTC",
"limit": "1,000-50,000 CNY",
"unitPrice": "42,235.00 CNY",
"paymentMethod": "银行卡，支付宝"
}] ;

vm.changeCursor = function(e){
  let elementToChange =document.getElementById(e.target.id);
  elementToChange.style.cursor = "pointer";
   };
   
vm.get_selected_Data = function (){
  $http({
        url: "#",
        method: "GET"
    })
    .then(function mySuccess(response) {
       vm.myData = response.data.records;
    },
    function myError(response) {
        vm.myData = response.statusText;
    });
   };     
   
   
vm.get_buyBTC_Data = function (){
  $http({
        url: "#",
        method: "GET"
    })
    .then(function mySuccess(response) {
       vm.myData = response.data.records;
    },
    function myError(response) {
        vm.myData = response.statusText;
    });
   };     
   
vm.get_buyETH_Data = function (){
  $http({
        url: "#",
        method: "GET"
    })
    .then(function mySuccess(response) {
       vm.myData = response.data.records;
    },
    function myError(response) {
        vm.myData = response.statusText;
    });
   };     
   
vm.get_buyUSDT_Data = function (){
  $http({
        url: "#",
        method: "GET"
    })
    .then(function mySuccess(response) {
       vm.myData = response.data.records;
    },
    function myError(response) {
        vm.myData = response.statusText;
    });
   };     
 
 vm.get_sellBTC_Data = function (){
  $http({
        url: "#",
        method: "GET"
    })
    .then(function mySuccess(response) {
       vm.myData = response.data.records;
    },
    function myError(response) {
        vm.myData = response.statusText;
    });
   };
   
  vm.get_sellETH_Data = function (){
  $http({
        url: "#",
        method: "GET"
    })
    .then(function mySuccess(response) {
       vm.myData = response.data.records;
    },
    function myError(response) {
        vm.myData = response.statusText;
    });
   };
   
  vm.get_sellUSDT_Data = function (){
  $http({
        url: "#",
        method: "GET"
    })
    .then(function mySuccess(response) {
       vm.myData = response.data.records;
    },
    function myError(response) {
        vm.myData = response.statusText;
    });
   };
   
vm.load= function (){
  $http({
        url: "#",
        method: "GET"
    })
    .then(function mySuccess(response) {
       vm.myData = response.data.records;
    },
    function myError(response) {
        vm.myData = response.statusText;
    });
   };   
 
}