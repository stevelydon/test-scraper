const request = require("supertest");
const app = require('./index.js');

describe('Test GET /json',()=>{
	test("should return json with 30 items",async ()=>{
		const res = await request(app)
			.get("/v1/json")
			.expect("Content-Type", /json/)
			.expect(200);

		expect(res.body.length).toBe(30);
	});
	afterAll(async ()=>{
		//get around jest open handle error
		await new Promise((resolve) => setTimeout(()=> resolve(),500));
		app.closeServer();
	});
});
