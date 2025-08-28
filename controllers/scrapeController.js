const scraper = require('../utils/scraper.js');
const datastore = require('../utils/datastore.js');

async function json(req,res,next){
	const data = await getScrapeData();
	res.setHeader('Content-Type','application/json');
	res.send(JSON.stringify(data));
}

async function view(req,res,next){
	const postData = await getScrapeData();
	res.render('../views/data', {postData});
}

async function getScrapeData(){
	let data = {};
	try{
		const scrapedPosts = await scraper.scrapeHackerNews();
		datastore.storePosts(scrapedPosts);
		const allLastPosts = await datastore.getLastPosts();
		const lastPostsGT5 = await datastore.getLastPostsGT5();
		const lastPostsEqualOrLT5 = await datastore.getLastPostsEqualOrLT5();	
		data = {allLastPosts,lastPostsGT5, lastPostsEqualOrLT5};
	}catch(err){
		console.log(err.message);
	}
	return data;
}

module.exports = {
	json,
	view
}

