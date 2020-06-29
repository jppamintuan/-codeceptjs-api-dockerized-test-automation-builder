exports.config = {
	tests: "./*/*_test.js",
	output: './reports',
	helpers: {
		REST: {
			endpoint: "https://reqres.in",
		}
	},
	bootstrap: null,
	mocha: {
		"reporterOptions": {
		"enableCharts": "true",
		"reportDir": "./reports",
		"overwrite": "false",
		"timestamp": "mm-dd-yyyy-HHMMss",
		"inline": "true",
		"cdn": "true",
		}
	},
	name: "Dockerized Rest API automation testing",
};