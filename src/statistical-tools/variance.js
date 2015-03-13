var Average = require('./average');

module.exports = (function () {
	'use strict';

	function Variance () {}

	Variance.prototype.getVariance = function (points) {
		var avg = Average.getAverage(points);
		var len = points.length;
		var sum = 0;

		while (len--) {
			sum += Math.pow(avg - points[len].y, 2);
		}

		return sum / points.length;
	};

	return new Variance();
})();
