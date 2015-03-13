var StdDeviation = require('../statistical-tools/std-deviation');
var Average = require('../statistical-tools/average');

module.exports = (function () {
	'use strict';

	function PredictionIntervals () {}

	PredictionIntervals.prototype.getConfidenceInterval = function (points, confidenceLevel) {
		var confidenceInterval = {};

		var stdDeviation = StdDeviation.getStdDeviation(points);
		var avg = Average.getAverage(points);

		var confidenceCoefficient = Math.pow(
			this.getCumulativeDistribution(
				this.getCumulativeDistribution(1 - confidenceLevel)
			),
			-1
		);

		var interval = confidenceCoefficient * (stdDeviation / Math.sqrt(points.length));

		confidenceInterval.lowerBound = avg - interval;
		confidenceInterval.upperBound = avg + interval;

		return confidenceInterval;
	};

	PredictionIntervals.prototype.getCumulativeDistribution = function (alpha) {
		var cumulativeDistribution = 1 - (alpha / 2);

		return cumulativeDistribution;
	};

	return new PredictionIntervals();
})();
