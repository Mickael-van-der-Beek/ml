var assert = require('assert');
var ml = require('../coverage/instrument/src/index');

module.exports = function () {
	'use strict';

	it('Simple', function () {
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

		var regressionLine = ml.linearRegression(points);

		assert.strictEqual(regressionLine.b0, 2.2);
		assert.strictEqual(regressionLine.b1, 0.6);
	});

};
