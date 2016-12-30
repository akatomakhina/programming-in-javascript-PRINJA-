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