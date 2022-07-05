const Employee = require('../employee.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {
	it('Should thow an error if no "firstName", "lastName", "department" arg', () => {
		const cases = [
			{ firstName: 'Gosia', lastName: 'Nowak' },
			{ firstName: 'Szymon', department: 'IT' },
			{ firstName: 'maria', lastName: 'ziolek' },
		];
		for (let employees of cases) {
			const emp = new Employee(employees);
			emp.validate(err => {
				expect(err.errors).to.exist;
			});
		}
	});
	it('should throw an error if "firstName" is not a string', () => {
		const cases = [{}, []];
		for (let firstName of cases) {
			const emp = new Employee(firstName);
			emp.validate(err => {
				expect(err.errors).to.exist;
			});
		}
	});

	it('should throw an error if "lastName" is not a string', () => {
		const cases = [{}, []];
		for (let lastName of cases) {
			const emp = new Employee(lastName);
			emp.validate(err => {
				expect(err.errors).to.exist;
			});
		}
	});

	it('should throw an error if "department" is not a string', () => {
		const cases = [{}, []];
		for (let department of cases) {
			const emp = new Employee(department);
			emp.validate(err => {
				expect(err.errors).to.exist;
			});
		}
	});

	it('should not throw an error if all data is okay', () => {
		const emp = new Employee({
			firstName: 'Gosia',
			lastName: 'Ziolek',
			department: 'Marketing',
		});
		emp.validate(err => {
			expect(err).to.not.exist;
		});
	});

	after(() => {
		mongoose.models = {};
	});
});
