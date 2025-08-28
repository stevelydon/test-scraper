const scraper = require('./scraper.js');
const datastore = require('./datastore.js');

describe('datastore test',()=>{
	let posts;

	beforeEach(async()=>{
		posts = await scraper.scrapeHackerNews();
		datastore.storePosts(posts);
	});

	test('check posts are stored and returned as 30 items',()=>{
		const testQuery = datastore.getAllPosts();
		expect(testQuery.length).toBe(30);
	});

	test('check last posts are retrieved', ()=>{
		const testQuery = datastore.getLastPosts();
		expect(testQuery.length).toBe(30);
	});

	test('check filters are working', ()=>{
		const testQueryGT5 = datastore.getLastPostsGT5();
		const testQueryEqualOrLT5 = datastore.getLastPostsEqualOrLT5();
		
		expect(testQueryGT5.length + testQueryEqualOrLT5.length).toBe(30);

	});

});
