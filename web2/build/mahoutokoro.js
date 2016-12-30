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