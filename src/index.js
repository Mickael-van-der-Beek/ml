var LinearRegression = require('./algorithms/linear-regression');

module.exports = (function () {
	'use strict';

	return {
		linearRegression: LinearRegression.calculate.bind(LinearRegression)
	};
})();
