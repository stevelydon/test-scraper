const scraper = require('./scraper.js');
describe('test setup',()=>{
	let scrapedData;
	const expectedKeys = [
		"rank",
		"title",
		"points",
		"commentCount",
		"titleWordCount"
	];

	beforeEach(async()=>{
		scrapedData = await scraper.scrapeHackerNews();
	});

	test('scraper returns expected javascript object', async ()=>{
		expect(Object.keys(scrapedData[0])).toEqual(expect.arrayContaining(expectedKeys));
	});
});
