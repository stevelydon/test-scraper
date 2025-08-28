const scraper = require('./scraper.js');
const datastore = require('./datastore.js');

describe('datastore test',()=>{
	let posts;

	beforeEach(async()=>{
		posts = await scraper.scrapeHackerNews();
	});

	test('check posts are stored and returned as 30 items',()=>{
		datastore.storePosts(posts);
		const testQuery = datastore.getAllPosts();
		expect(testQuery.length).toBe(30);
	});
});
