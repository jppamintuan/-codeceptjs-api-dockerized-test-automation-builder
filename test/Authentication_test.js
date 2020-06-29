const expect = require('chai').expect;
const {I} = inject();

Feature('Authentication tests');

let valid_login_creds = {
	email: 'eve.holt@reqres.in',
	password: 'cityslicka'							  
}
Scenario('Verify successful login', async () => {
	const res = await I.sendPostRequest('/api/login', valid_login_creds);
	expect(res.status).to.eql(200);
	expect(res.data.token).to.eql("QpwL5tke4Pnpja7X4");
});

let invalid_login_creds = {
	email: 'peter@klaven'						  
}
Scenario('Verify unsuccessful login', async () => {
	const res = await I.sendPostRequest('/api/login', invalid_login_creds);
	expect(res.status).to.eql(400);
	expect(res.data.error).to.eql("Missing password");
});

let valid_registration_creds = {
	email: 'eve.holt@reqres.in',
	password: 'pistol'						  
}
Scenario('Verify successful registration', async () => {
	const res = await I.sendPostRequest('/api/register', valid_registration_creds);
	expect(res.status).to.eql(200);
	expect(res.data.id).to.eql(4);
	expect(res.data.token).to.eql("QpwL5tke4Pnpja7X4");
});

let invalid_registration_creds = {
	"email": "sydney@fife"						  
}
Scenario('Verify unsuccessful registration', async () => {
	const res = await I.sendPostRequest('/api/register', invalid_registration_creds);
	expect(res.status).to.eql(400);
	expect(res.data.error).to.eql("Missing password");
});