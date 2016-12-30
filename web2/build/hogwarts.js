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