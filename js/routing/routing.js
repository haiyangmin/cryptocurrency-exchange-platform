angular.module('myApp', ["ngRoute"])
   .config(['$routeProvider',routing]);
   
   function routing($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/BTC_buy.html',
        controller: 'ordinaryTransactionController'
      })
      .when('/ETH_buy', {
        templateUrl: '/ETH_buy.html',
        controller: 'ordinaryTransactionController'
     })
      .when('/USDT_buy', {
        templateUrl: '/USDT_buy.html',
        controller: 'ordinaryTransactionController'
     })
      .when('/BTC_sell', {
        templateUrl: '/BTC_sell.html',
        controller: 'ordinaryTransactionController'
     })
      .when('ETH_sell', {
        templateUrl: '/ETH_sell.html',
        controller: 'ordinaryTransactionController'
     })
      .when('USDT_sell', {
        templateUrl: '/USDT_sell.html',
        controller: 'ordinaryTransactionController'
     });   

  }