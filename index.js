const myInformation = require('./information.js');
myInformation()

var cowsay = require("cowsay");


console.log(cowsay.say({
	text : myInformation(),
	e : "oO",
	T : "U "
}));
