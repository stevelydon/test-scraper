const scraper = require('./scraper.js');
const datastore = require('./datastore.js');
require('dotenv').config();

function testDataStore(){
	scraper.scrapeHackerNews().then((posts)=>{;
		datastore.storePosts(posts);
	}).then(()=>{
		const testQuery = datastore.getAllPosts();
		console.log(testQuery);
	}		
	).catch((err)=>{
		console.log(err.message);
	});
}

testDataStore();
