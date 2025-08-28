const request = require("supertest");
const app = require('./index.js');

describe('Test GET /json',()=>{
	test("should return json with exprected keys",async ()=>{
		const expectedKeys = [
			"allLastPosts",
			"lastPostsGT5",
			"lastPostsEqualOrLT5"
		];
		const res = await request(app)
			.get("/v1/json")
			.expect("Content-Type", /json/)
			.expect(200);
		expect(Object.keys(res.body)).toEqual(expect.arrayContaining(expectedKeys));
	});
	test("should filter greater than 5 correctly", async ()=>{
		const res = await request(app).get("/v1/json");
		res.body.lastPostsGT5.forEach((post)=>{
			expect(post.title_word_count).toBeGreaterThan(5);
		});

	});
	test("should filter less than or equal to 5 correctly", async ()=>{
		const res = await request(app).get("/v1/json");
		res.body.lastPostsEqualOrLT5.forEach((post)=>{
			expect(post.title_word_count).toBeLessThanOrEqual(5);
		});

	});
	
	afterAll(async ()=>{
		//get around jest open handle error
		await new Promise((resolve) => setTimeout(()=> resolve(),500));
		app.closeServer();
	});
});
