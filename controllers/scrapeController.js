const scraper = require('../utils/scraper.js');
const datastore = require('../utils/datastore.js');

function home(req,res,next){
	res.send("HOME");
}

async function json(req,res,next){
	const scrapedPosts = await scraper.scrapeHackerNews();
	datastore.storePosts(scrapedPosts);
	const allLastPosts = await datastore.getLastPosts();
	res.setHeader('Content-Type','application/json');
	res.send(JSON.stringify(allLastPosts));
}

function view(req,res,next){
	res.send("VIEW");
}

module.exports = {
	home,
	json,
	view
}

