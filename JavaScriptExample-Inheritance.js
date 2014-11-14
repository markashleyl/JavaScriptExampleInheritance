$(document).ready(function() {
	//Defining car test
	var carTest = function() {};
	carTest.prototype = (function() {
		var me = {}, privateVariable = 57;
		me.someMethod = function() {
			return privateVariable;
		};
		me.publicVariable = "test drive";
		me.anotherMethod = function() {
			return this.publicVariable;
		};
		return me;
	}) ();

//Defining second car test
	var secondTest = function() {
		var me = {}, privateVariable = 57;
		me.someMethod = function() {
			return privateVariable;
		};
		me.publicVariable = "test drive";
		me.anotherMethod = function() {
			return this.publicVariable;
		};
		return me;
	};

//Proving that both techniqes are functionally identical
	var resultCarTest = new carTest(),
		resultSecondTest = new secondTest();

		console.log (
			resultCarTest.someMethod(), // prints 57
			resultCarTest.publicVariable // prints "test drive"
			);
		console.log (
			resultSecondTest.someMethod(),
			resultSecondTest.publicVariable
			);

//Performance benchmark start
	var stop, start, loopCount = 1000000;
	//Running carTest
	start = (new Date()).getTime();
	for (var i = loopCount; i > 0; i-) {
		new carTest();
	} 
	stop = (new Date()).getTime();
	console.log('Car testing took: '+Math.round (((stop/1000) - (start/1000))* 1000) + 'minutes.');
	//Running secondTest
	start = (new Date()).getTime();
	for (var i = loopCount; i > 0; i-) {
		new secondTest();
	} 
	stop = (new Date()).getTime();
	console.log('Second car testing took: '+Math.round (((stop/1000) - (start/1000))* 1000) + 'minutes.');
});
