module.exports = (function () {
	'use strict';

	function Average () {}

	Average.prototype.getAverage = function (points) {
		var len = points.length;
		var sum = 0;

		while (len--) {
			sum += points[len].y;
		}

		return sum / points.length;
	};

	return new Average();
})();
