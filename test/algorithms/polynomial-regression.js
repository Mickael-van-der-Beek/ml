var assert = require('assert');

var ml = require('../coverage/instrument/src/index');
// var ml = require('../../src/index');
var PolynomialRegression = ml.PolynomialRegression;

module.exports = function () {
	'use strict';

	it('Regression Line', function () {
		var points = [
			{
				x: 80,
				y: 6.47
			},
			{
				x: 40,
				y: 6.24
			},
			{
				x: -40,
				y: 5.72
			},
			{
				x: -120,
				y: 5.09
			},
			{
				x: -200,
				y: 4.30
			},
			{
				x: -280,
				y: 3.33
			}
		];

		var regressionLine = PolynomialRegression.getRegressionLine(points, 2);

		assert.strictEqual(regressionLine[0], 6.013);
		assert.strictEqual(regressionLine[1], 6.242e-7);
		assert.strictEqual(regressionLine[2], -1.113e-5);
		assert.strictEqual(
			regressionLine[0] + (regressionLine[1] * 70) + (regressionLine[1] * Math.pow(70, 2)),
			6.408
		);
	});

};
