module.exports = (function () {
	'use strict';

	function LinearRegression () {}

	LinearRegression.prototype.getRegressionLine = function (points) {
		var averagePoint = this.getAveragePoint(points);

		var len = points.length;
		var xDistancesSquared = 0;
		var xyDistances = 0;
		var xDistance = 0;
		var yDistance = 0;

		while (len--) {
			xDistance = points[len].x - averagePoint.x;
			yDistance = points[len].y - averagePoint.y;

			xDistancesSquared += Math.pow(xDistance, 2);
			xyDistances += xDistance * yDistance;
		}

		var regressionLine = {};

		regressionLine.b1 = xyDistances / xDistancesSquared;
		regressionLine.b0 = averagePoint.y - (regressionLine.b1 * averagePoint.x);

		return regressionLine;
	};

	LinearRegression.prototype.getAveragePoint = function (points) {
		var averagePoint = {
			x: 0,
			y: 0
		};

		var len = points.length;

		while (len--) {
			averagePoint.x += points[len].x;
			averagePoint.y += points[len].y;
		}

		averagePoint.x = averagePoint.x / points.length;
		averagePoint.y = averagePoint.y / points.length;

		return averagePoint;
	};

	LinearRegression.prototype.getRSquared = function (points) {
		var regressionLine = this.getRegressionLine(points);
		var averagePoint = this.getAveragePoint(points);

		var len = points.length;
		var estDistancesSquared = 0;
		var estDistance = 0;
		var yDistancesSquared = 0;
		var yDistance = 0;

		while (len--) {
			estDistance = (regressionLine.b0 + regressionLine.b1 * points[len].x) - averagePoint.y;
			yDistance = points[len].y - averagePoint.y;

			yDistancesSquared += Math.pow(yDistance, 2);
			estDistancesSquared += Math.pow(estDistance, 2);
		}

		var rSquared = estDistancesSquared / yDistancesSquared;

		return rSquared;
	};

	LinearRegression.prototype.getStdErrorEst = function (points) {
		var regressionLine = this.getRegressionLine(points);

		var len = points.length;
		var estDistancesSquared = 0;
		var estDistance = 0;

		while (len--) {
			estDistance = (regressionLine.b0 + regressionLine.b1 * points[len].x) - points[len].y;

			estDistancesSquared += Math.pow(estDistance, 2);
		}

		var stdErrorEst = Math.sqrt(estDistancesSquared / (points.length - 2));

		return stdErrorEst;
	};

	return new LinearRegression();
})();
