"use strict";

var app = angular.module("MushroomManiaApp", ['ngRoute']);

app.config(function($routeProvider){
 	$routeProvider.
 	when('/poisonous', {
 		templateUrl: 'partials/poisonous.html',
 		controller: 'MushroomCtrl'
 	}).
 	when('/non-poisonous', {
 		templateUrl: 'partials/non-poisonous.html',
 		controller: 'MushroomCtrl' //in config, you can tell it what html to use and what controller to use, the controller will take over the html
 	}).
 	otherwise('/'); //if the one listed isn't there, do the first one anyway
 });