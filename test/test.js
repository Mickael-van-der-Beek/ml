describe('Testing the ML.js library:', function () {
	'use strict';

	describe('Algorithms:', function () {

		describe('Linear Regression', function () {
			require('./algorithms/linear-regression')();
		});

		describe('Prediction Intervals', function () {
			require('./algorithms/prediction-intervals')();
		});

	});

});
