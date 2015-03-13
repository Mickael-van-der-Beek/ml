var Variance = require('./variance');

module.exports = (function () {
	'use strict';

	function StdDeviation () {}

	StdDeviation.prototype.getStdDeviation = function (points) {
		var variance = Variance.getVariance(points);

		var stdDeviation = Math.sqrt(variance);

		return stdDeviation;
	};

	return new StdDeviation();
})();
