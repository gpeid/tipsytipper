'use strict';

/**
 * @ngdoc overview
 * @name tipsytipperApp
 * @description
 * # tipsytipperApp
 *
 * Main module of the application.
 */
angular
  .module('tipsytipperApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tipcalc', {
        templateUrl: 'views/tipcalc.html',
        controller: 'TipCalcCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
