const scraper = require('../utils/scraper.js');
const datastore = require('../utils/datastore.js');

function home(req,res,next){
	res.send("HOME");
}

async function json(req,res,next){
	const scrapedPosts = await scraper.scrapeHackerNews();
	datastore.storePosts(scrapedPosts);

	const allLastPosts = await datastore.getLastPosts();
	const lastPostsGT5 = await datastore.getLastPostsGT5();
	const lastPostsEqualOrLT5 = await datastore.getLastPostsEqualOrLT5();

	res.setHeader('Content-Type','application/json');
	const fullResponse = {allLastPosts,lastPostsGT5, lastPostsEqualOrLT5};
	res.send(JSON.stringify(fullResponse));
}

function view(req,res,next){
	res.send("VIEW");
}

module.exports = {
	home,
	json,
	view
}

