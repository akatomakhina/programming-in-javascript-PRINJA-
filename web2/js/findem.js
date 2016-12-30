(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let Quidditch = require('./quidditch.js')

class Bulgaria extends Quidditch {
  	constructor(id, country, type, name, workouts) {
  		super(id, country, type, name);
  		this.workouts = workouts;
  	}
}


class Durmstrang extends Bulgaria {
	constructor(id, country, type, name, workouts, age, feint){
		super(id, country, type, name, workouts);
		this.age = age;
		this.feint = feint;
		this.command = "Durmstrang";
	}
};


module.exports = {
	Bulgaria: Bulgaria,
	Durmstrang: Durmstrang
}
},{"./quidditch.js":5}],2:[function(require,module,exports){
let Quidditch = require('./quidditch.js')

class Hogwarts extends Quidditch {
  	constructor(id, country, type, name, school, faculty){
  		super(id, country, type, name);
    	this.school = school;
    	this.faculty = faculty;
  	}
}


class Slytherin extends Hogwarts {
	constructor(id, country, type, name, school, faculty, height){
		super(id, country, type, name, school, faculty);
		this.height = height;
		this.command = "Slytherin";
	}
};


class Gryffindor extends Hogwarts {
	constructor(id, country, type, name, school, faculty, broom){
		super(id, country, type, name, school, faculty);
		this.broom = broom;
		this.command = "Gryffindor";
	}
};

module.exports = {
	Hogwarts: Hogwarts,
	Slytherin: Slytherin,
	Gryffindor: Gryffindor
}
},{"./quidditch.js":5}],3:[function(require,module,exports){
let Quidditch = require('./quidditch.js')

class Japan extends Quidditch{
  	constructor(id, country, type, name, region, stock, trainer) {
  		super(id, country, type, name);
  		this.region = region;
    	this.stock = stock;
    	this.trainer = trainer;
  	}
}


class Mahoutokoro extends Japan {
	constructor(id, country, type, name, region, stock, trainer, weight, gender){
		super(id, country, type, name, region, stock, trainer);
		this.weight = weight;
		this.gender = gender;
		this.command = "Mahoutokoro";
	}
};


module.exports = {
	Japan: Japan,
	Mahoutokoro: Mahoutokoro
}
},{"./quidditch.js":5}],4:[function(require,module,exports){
"use strict"

var Quidditch = require('./quidditch.js'),
	Hogwarts = require('./hogwarts.js'),
	Durmstrang = require('./durmstrang.js'),
	Mahoutokoro = require('./mahoutokoro.js');


let quidditch_id = 0; //кнопка для добавления в аквариум
let championshipS = []; //создаем для доступа в фабрику


var myapp = angular.module("myapp", []);

		myapp.factory('championshipFactory', function () {

		       	return {
		            add: function (obj) {
		               championshipS.push(obj);
		               $('#addF'+obj.id.toString()).hide();
		            },
		           	remove: function (obj) {
		               var index = championshipS.indexOf(obj);
									 championshipS.splice(index, 1);
									 $('#addF'+obj.id.toString()).show();
		            }
		        }
		});


	 myapp.controller("SlytherinController",["$scope", "championshipFactory", function($scope, championshipFactory) {
					 $scope.addSlytherin = function(answerForm){
						 
							 let slytherin = new Hogwarts.Slytherin(quidditch_id, $scope.countrySlytherin, $scope.typeSlytherin,
								  $scope.nameSlytherin, $scope.schoolSlytherin, $scope.facultySlytherin,
									$scope.heightSlytherin);
							 $scope.slytherinS.push(slytherin);
							 quidditch_id++;
					 
				 	};
					 $scope.removeSlytherin = function (slytherin){
						 var index = $scope.slytherinS.indexOf(slytherin);
						 $scope.slytherinS.splice(index, 1);
						 championshipFactory.remove(slytherin);
					 };
					 $scope.editSlytherin = function (slytherin){
						 var index = $scope.slytherinS.indexOf(slytherin);
						 $scope.countrySlytherin = $scope.slytherinS[index].country;
						 $scope.typeSlytherin = $scope.slytherinS[index].type;
						 $scope.nameSlytherin = $scope.slytherinS[index].name;
						 $scope.schoolSlytherin = $scope.slytherinS[index].school;
						 $scope.facultySlytherin = $scope.slytherinS[index].faculty;
						 $scope.heightSlytherin = $scope.slytherinS[index].height;
						 $scope.removeSlytherin(slytherin);
					};
					$scope.addSlytherinToF = function(slytherin){
						championshipFactory.add(slytherin);
					};
         }]);


	 myapp.controller("GryffindorController",["$scope", "championshipFactory", function($scope, championshipFactory) {
					 $scope.addGryffindor = function(answerForm){
							 let gryffindor = new Hogwarts.Gryffindor(quidditch_id, $scope.countryGryffindor, $scope.typeGryffindor,
								  $scope.nameGryffindor, $scope.schoolGryffindor, $scope.facultyGryffindor,
								 $scope.broomGryffindor);
							 $scope.gryffindorS.push(gryffindor);
							 quidditch_id++;
				 	};
					 $scope.removeGryffindor = function (gryffindor){
						 var index = $scope.gryffindorS.indexOf(gryffindor);
						 $scope.gryffindorS.splice(index, 1);
						 championshipFactory.remove(gryffindor);
					 };
					 $scope.editGryffindor = function (gryffindor){
						 var index = $scope.gryffindorS.indexOf(gryffindor);
						 $scope.countryGryffindor = $scope.gryffindorS[index].country;
						 $scope.typeGryffindor = $scope.gryffindorS[index].type;
						 $scope.nameGryffindor = $scope.gryffindorS[index].name;
						 $scope.schoolGryffindor = $scope.gryffindorS[index].school;
						 $scope.facultyGryffindor = $scope.gryffindorS[index].faculty;
						 $scope.broomGryffindor = $scope.gryffindorS[index].broom;
						 $scope.removeGryffindor(gryffindor);
					};
					$scope.addGryffindorToF = function(gryffindor){
						championshipFactory.add(gryffindor);
					};
         }]);


	  myapp.controller("DurmstrangController",["$scope", "championshipFactory", function($scope, championshipFactory) {
					 $scope.addDurmstrang = function(answerForm){
							 let durmstrang = new Durmstrang.Durmstrang(quidditch_id, $scope.countryDurmstrang, $scope.typeDurmstrang,
								  $scope.nameDurmstrang, $scope.workoutsDurmstrang, $scope.ageDurmstrang,
									$scope.feintDurmstrang);
							 $scope.durmstrangS.push(durmstrang);
							 quidditch_id++;
				 	};
					 $scope.removeDurmstrang = function (durmstrang){
						 var index = $scope.durmstrangS.indexOf(durmstrang);
						 $scope.durmstrangS.splice(index, 1);
						 championshipFactory.remove(durmstrang);
					 };
					 $scope.editDurmstrang = function (durmstrang){
						 var index = $scope.durmstrangS.indexOf(durmstrang);
						 $scope.countryDurmstrang = $scope.durmstrangS[index].country;
						 $scope.typeDurmstrang = $scope.durmstrangS[index].type;
						 $scope.nameDurmstrang = $scope.durmstrangS[index].name;
						 $scope.workoutsDurmstrang = $scope.durmstrangS[index].workouts;
						 $scope.ageDurmstrang = $scope.durmstrangS[index].age;
						 $scope.feintDurmstrang = $scope.durmstrangS[index].feint;
						 $scope.removeDurmstrang(durmstrang);
					};
					$scope.addDurmstrangToF = function(durmstrang){
						championshipFactory.add(durmstrang);
					};
         }]);



	  myapp.controller("MahoutokoroController",["$scope", "championshipFactory", function($scope, championshipFactory) {
					 $scope.addMahoutokoro = function(answerForm){
							 let mahoutokoro = new Mahoutokoro.Mahoutokoro(quidditch_id, $scope.countryMahoutokoro, $scope.typeMahoutokoro,
								  $scope.nameMahoutokoro, $scope.regionMahoutokoro, $scope.stockMahoutokoro,
									$scope.trainerMahoutokoro, $scope.weightMahoutokoro, $scope.genderMahoutokoro);
							 $scope.mahoutokoroS.push(mahoutokoro);
							 quidditch_id++;

				 	};
					 $scope.removeMahoutokoro = function (mahoutokoro){
						 var index = $scope.mahoutokoroS.indexOf(mahoutokoro);
						 $scope.mahoutokoroS.splice(index, 1);
						 championshipFactory.remove(mahoutokoro);
					 };
					 $scope.editMahoutokoro = function (mahoutokoro){
						 var index = $scope.mahoutokoroS.indexOf(mahoutokoro);
						 $scope.countryMahoutokoro = $scope.mahoutokoroS[index].country;
						 $scope.typeMahoutokoro = $scope.mahoutokoroS[index].type;
						 $scope.nameMahoutokoro = $scope.mahoutokoroS[index].name;
						 $scope.regionMahoutokoro = $scope.mahoutokoroS[index].region;
						 $scope.stockMahoutokoro = $scope.mahoutokoroS[index].stock;
						 $scope.trainerMahoutokoro = $scope.mahoutokoroS[index].trainer;
						 $scope.weightMahoutokoro = $scope.mahoutokoroS[index].weight;
						 $scope.genderMahoutokoro = $scope.mahoutokoroS[index].gender;
						 $scope.removeMahoutokoro(mahoutokoro);
					};
					$scope.addMahoutokoroToF = function(mahoutokoro){
						championshipFactory.add(mahoutokoro);
					};
         }]);


	  	myapp.controller('championshipController', ['$scope', 'championshipFactory', function($scope, championshipFactory){
			$scope.championship = championshipS;
			$scope.removeFromCh = function (obj) {
				championshipFactory.remove(obj);
			}
		 }])


},{"./durmstrang.js":1,"./hogwarts.js":2,"./mahoutokoro.js":3,"./quidditch.js":5}],5:[function(require,module,exports){
module.exports = class Quidditch {
  	constructor(id, country, type, name) {
    	this.id = id;
    	this.country = country;
    	this.type = type;
    	this.name = name;
  	}
}
},{}]},{},[4]);
