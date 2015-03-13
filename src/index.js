var PolynomialRegression = require('./algorithms/polynomial-regression');
var PredictionIntervals = require('./algorithms/prediction-intervals');
var LinearRegression = require('./algorithms/linear-regression');

var StdDeviation = require('./statistical-tools/std-deviation');
var Variance = require('./statistical-tools/variance');
var Average = require('./statistical-tools/average');

module.exports = (function () {
	'use strict';

	return {
		/**
		 * Algorithms
		 */

		PolynomialRegression: PolynomialRegression,
		PredictionIntervals: PredictionIntervals,
		LinearRegression: LinearRegression,

		/**
		 * Statistical Tools
		 */

		StdDeviation: StdDeviation,
		Variance: Variance,
		Average: Average
	};
})();
