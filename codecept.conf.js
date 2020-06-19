exports.config = {
	tests: "./*/*_test.js",
	output: './reports',
	helpers: {
		REST: {
			endpoint: "https://reqres.in",
			onRequest: () => {
				//request.headers.auth = "123";
			}
		}
	},
	bootstrap: null,
	mocha: {
		"reporterOptions": {
		"reportDir": "./reports",
		"overwrite": "false",
		"timestamp": "mm-dd-yyyy-HHMMss",
		"inline": "true",
		"cdn": "true",
		}
	},
	name: "Dockerized Rest API automation testing",
};