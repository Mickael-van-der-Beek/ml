var assert = require('assert');

// var ml = require('../coverage/instrument/src/index');
var ml = require('../../src/index');
var LinearRegression = ml.LinearRegression;

module.exports = function () {
	'use strict';

	it('Regression Line by Least Squared', function () {
		var points = [
			{
				x: 1,
				y: 2
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 5
			}
		];

		var regressionLine = LinearRegression.getRegressionLine(points, 'least-squared');

		assert.strictEqual(regressionLine.b0, 2.2);
		assert.strictEqual(regressionLine.b1, 0.6);
	});

	it('Regression Line by Gradient Descent', function () {
		var points = [
			{
				x: 1,
				y: 2
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 5
			}
		];

		var regressionLine = LinearRegression.getRegressionLine(points, 'gradient-descent', 0.029);

		assert.strictEqual(regressionLine.b0, 2.2);
		assert.strictEqual(regressionLine.b1, 0.6);
	});

	it('R Squared', function () {
		var points = [
			{
				x: 1,
				y: 2
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 5
			}
		];

		var rSquared = LinearRegression.getRSquared(points);

		assert.strictEqual(rSquared, 0.5999999999999998);
	});

	it('Standard Error of the Estimate', function () {
		var points = [
			{
				x: 1,
				y: 2
			},
			{
				x: 2,
				y: 4
			},
			{
				x: 3,
				y: 5
			},
			{
				x: 4,
				y: 4
			},
			{
				x: 5,
				y: 5
			}
		];

		var rSquared = LinearRegression.getStdErrorEst(points);

		assert.strictEqual(rSquared, 0.8944271909999159);
	});

};
