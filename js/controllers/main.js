
angular.module('myApp')
.controller('myAppController',myAppController);
function myAppController($http) {
  var vm = this;  
  vm.user = "逍遥王";
  vm.table = true;
  vm.token = "ddd";
  vm.loggedIn = true;
  vm.loggedOut = false;

  vm.USDTtradingPair = ["BTC / USDT","BCH / USDT","ETH / USDT","ETC / USDT","LTC / USDT","EOS / USDT","ADA / USDT","XRP / USDT","OMG / USDT","IOTA / USDT","STEEM / USDT","DASH / USDT","ZEC / USDT","HB10 / USDT"];
  vm.BTCtradingPair = ["BCH / BTC","ETH / BTC","LTC / BTC","ETC / BTC","EOS / BTC","ADA / BTC","XRP / BTC","IOTA / BTC","OMG / BTC","DASH / BTC","STEEM / BTC","ZEC / BTC","XMR / BTC"];
  vm.ETHtradingPair = ["EOS / ETH","ADA / ETH","OMG / ETH","XMR / ETH","STEEM / ETH","IOTA / ETH"];
  vm.HTtradingPair = ["EOS / HT","ETC / HT","XRP / HT","BCH / HT","LTC / HT","DASH / HT"];
  vm.tradingPair = [];
  vm.tradingPair.push(vm.USDTtradingPair);
 
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

  vm.changeTradingPair = function (e){
  if(e.target.id == "USDT"){
   vm.tradingPair.pop();
  vm.tradingPair.push(vm.USDTtradingPair);
  }
  if(e.target.id == "BTC"){
   vm.tradingPair.pop();
  vm.tradingPair.push(vm.BTCtradingPair);
  }
   if(e.target.id == "ETH"){
    vm.tradingPair.pop();
  vm.tradingPair.push(vm.ETHtradingPair);
  }
   if(e.target.id == "HT"){
    vm.tradingPair.pop();
  vm.tradingPair.push(vm.HTtradingPair);
  }
   if(e.target.id == "自选"){
  vm.tradingPair = [];
  }
 }


}