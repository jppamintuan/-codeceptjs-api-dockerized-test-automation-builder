const expect = require('chai').expect;
const {I} = inject();

var auth_data = require('../data/auth.json');

Feature('Authentication tests');

Scenario('Verify successful login', async () => {
	const res = await I.sendPostRequest(auth_data.Login.url, auth_data.Login.successful.credentials);
	expect(res.status).to.eql(auth_data.Login.successful.status);
	expect(res.data.token).to.eql(auth_data.Login.successful.token);
});

Scenario('Verify unsuccessful login', async () => {
	const res = await I.sendPostRequest(auth_data.Login.url, auth_data.Login.unsuccessful.credentials);
	expect(res.status).to.eql(auth_data.Login.unsuccessful.status);
	expect(res.data.error).to.eql(auth_data.Login.unsuccessful.error);
});

Scenario('Verify successful registration', async () => {
	const res = await I.sendPostRequest(auth_data.Registration.url, auth_data.Registration.successful.credentials);
	expect(res.status).to.eql(auth_data.Registration.successful.status);
	expect(res.data.id).to.eql(auth_data.Registration.successful.id);
	expect(res.data.token).to.eql(auth_data.Registration.successful.token);
});

Scenario('Verify unsuccessful registration', async () => {
	const res = await I.sendPostRequest(auth_data.Registration.url, auth_data.Registration.unsuccessful.credentials);
	expect(res.status).to.eql(auth_data.Registration.unsuccessful.status);
	expect(res.data.error).to.eql(auth_data.Registration.unsuccessful.error);
});