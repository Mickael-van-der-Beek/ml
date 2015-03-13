module.exports = (function () {
	'use strict';

	function PredictionIntervals () {}

	PredictionIntervals.prototype.getRegressionLine = function (points, order) {
		order += 1;

		var designMatrix = this.getDesignMatrix(points, order);
		var eigenValues = this.getEigenValues(points, order);

		console.log(designMatrix);
		console.log(eigenValues);
	};

	PredictionIntervals.prototype.getDesignMatrix = function (points, order) {
		var matrix = [];

		for (var i = 0; i < order; i++) {
			matrix[i] = [];

			for (var k = 0; k < order; k++) {
				matrix[i][k] = this.getXNthPowerSum(points, k + i);
			}
		}

		return matrix;
	};

	PredictionIntervals.prototype.getXNthPowerSum = function (points, power) {
		return points.reduce(function (sum, point) {
			return sum + Math.pow(point.x, power);
		}, 0);
	};

	PredictionIntervals.prototype.getEigenValues = function (points, order) {
		var eigenValues = [[]];

		for (var i = 0; i < order; i++) {
			eigenValues[0][i] = this.getXNthPowerSumY(points, i);
		}

		return eigenValues;
	};

	PredictionIntervals.prototype.getXNthPowerSumY = function (points, power) {
		return points.reduce(function (sum, point) {
			return sum + (point.y * Math.pow(point.x, power));
		}, 0);
	};

	return new PredictionIntervals();
})();
