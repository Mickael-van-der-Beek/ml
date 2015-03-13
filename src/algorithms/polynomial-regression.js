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

		systemMatrix.push(eigenValues[0]);

		// console.log('designMatrix_1=', designMatrix);
		// console.log('eigenValues_1=', eigenValues);

		var maxi;
		var k;
		var i;
		var p;
		var j;

		for (k = 0; k < order; k++) {
			maxi = k;

			for (i = k; i < order; i++) {
				if (Math.abs(systemMatrix[i][k]) > Math.abs(systemMatrix[maxi][k])) {
					maxi = i;
				}
			}

			if (systemMatrix[maxi][k] === 0) {
				break;
			}

			// console.log('designMatrix_1=', systemMatrix);
			// console.log('maxi=', maxi);

			p = systemMatrix[maxi];
			systemMatrix[maxi] = systemMatrix[k];
			systemMatrix[k] = p;

			// console.log('designMatrix_2=', systemMatrix);
			// console.log('maxi=', maxi);

			for (i = k + 1; i <= order; i++) {
				for (j = k + 1; j <= order + 1; j++) {
					// console.log('\n\norder=' + order);
					// console.log('i=' + i);
					// console.log('k=' + k);
					// console.log('j=' + j);
					// console.log('systemMatrix[i][j]=' + systemMatrix[i - 1][j - 1]);
					// console.log('systemMatrix[k][j]=' + systemMatrix[k][j - 1]);
					// console.log('systemMatrix[i][k]=' + systemMatrix[i - 1][k]);
					// console.log('systemMatrix[k][k]=' + systemMatrix[k][k]);
					// console.log(systemMatrix);
					systemMatrix[i][j - 1] = systemMatrix[i - 1][j - 1] -
						systemMatrix[k][j - 1] * (
							systemMatrix[i - 1][k] / systemMatrix[k][k]
						);
				}

				systemMatrix[i][k] = 0;
			}
		}

		// console.log('designMatrix_2=', systemMatrix);
		// console.log('eigenValues_1=', eigenValues);

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
