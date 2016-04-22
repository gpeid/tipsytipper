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
      if (value) {
        return (value * gratuity).toPrecision() || 0;
      } else {
        return 0;
      }
    };

    vm.getSubtotal = function (total, tip) {
      return (Number(total) + Number(tip)) || 0;
    };

    vm.activeGratuity = function(newGratuity){
      console.log('new gratuity: ' + newGratuity);
      console.log('vm gratuity: ' + vm.gratuity);
      if (newGratuity == vm.gratuity) {
        return true;
      }
    };



  });
