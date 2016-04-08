'use strict';

/**
 * @ngdoc function
 * @name tipsytipperApp.controller:TipCalcCtrl
 * @description
 * # TipCalcCtrl
 * Controller of the tipsytipperApp
 */
angular.module('tipsytipperApp')
  .controller('TipCalcCtrl', function () {
    var vm = this;

    vm.gratuity = 0;

    vm.getGratuity = function (value, gratuity) {
      return (value * gratuity).toPrecision() || 0;
    };

    vm.getSubtotal = function (total, tip) {
      return (Number(total) + Number(tip)) || 0;
    };
  });
