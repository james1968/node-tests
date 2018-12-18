const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(33, 11);
	
	expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
	utils.asyncAdd(45, 59, (sum) => {
		expect(sum).toBe(104).toBeA('number');
		done();
	});

});

it('should square a number', () => {
	var res = utils.square(9);

	expect(res).toBe(81).toBeA('number')
	
	// if (res !== 81) {
	// 	throw new Error(`Expected 44, but got ${res}`)
	// }
});

it('should async square a number', (done) => {
	utils.asyncSquare(4, (square) => {
		expect(square).toBe(16).toBeA('number');
		done();
	});

	
});

it('should include first and last names', () => {
	var user = {
		age: '26',
		location: 'here'
	}

	var res = utils.setName(user, 'James Baker');
	expect(res).toInclude({
		firstName: 'James',
		lastName: 'Baker'
	})
});