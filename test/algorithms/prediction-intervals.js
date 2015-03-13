var assert = require('assert');

var ml = require('../coverage/instrument/src/index');
var PredictionIntervals = ml.PredictionIntervals;

module.exports = function () {
	'use strict';

	it('Confidence Interval', function () {
		var confidenceLevel = 0.95;
		var points = [
			{
				y: 50
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 80
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 80
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 50
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 50
			}, {
				y: 80
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 50
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 110
			}, {
				y: 110
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 110
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 50
			}, {
				y: 110
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 50
			}, {
				y: 80
			}, {
				y: 50
			}, {
				y: 110
			}
		];

		var confidenceInterval = PredictionIntervals.getConfidenceInterval(points, confidenceLevel);

		var countInRange = points.reduce(function (count, point) {
			if (confidenceInterval.lowerBound >= point.y) {
				count += 1;
			}
			else if (confidenceInterval.upperBound <= point.y) {
				count += 1;
			}

			return count;
		}, 0);

		assert.strictEqual(countInRange / (points.length / 100), 70);
	});

};
