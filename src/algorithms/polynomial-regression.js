module.exports = (function () {
	'use strict';

	function PredictionIntervals () {}

	PredictionIntervals.prototype.getRegressionLine = function (points, order) {
		order += 1;

		var designMatrix = this.getDesignMatrix(points, order);
		var eigenValues = this.getEigenValues(points, order);

		var systemMatrix = designMatrix.map(function (row, index) {
			row.push(eigenValues[0][index]);
			return row;
		});

		var i = 0;
		var j = 0;
		var pivot;
		var div;
		var mult;
		var k;
		var p;
		var u;
		var l;

		while (i < order && j < order + 1) {
			pivot = i;

			for (k = i + 1; k < order; k++) {
				if (Math.abs(systemMatrix[k][j]) > Math.abs(systemMatrix[pivot][j])) {
					pivot = k;
				}
			}

			if (systemMatrix[pivot][j] === 0) {
				break;
			}

			p = systemMatrix[pivot];
			systemMatrix[pivot] = systemMatrix[i];
			systemMatrix[i] = p;

			div = systemMatrix[i][j];

			for (k = 0; k < order + 1; k++) {
				systemMatrix[i][k] = systemMatrix[i][k] / div;
			}

			for (u = i + 1; u < order; u++) {
				mult = systemMatrix[u][j];

				for (l = 0; l < order + 1; l++) {
					systemMatrix[u][l] -= mult * systemMatrix[i][l];
				}
			}

			i += 1;
			j += 1;
		}

		return systemMatrix;
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
