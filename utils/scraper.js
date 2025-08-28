const cheerio = require('cheerio');
const wordCount = require('./wordCount.js');

async function scrapeHackerNews(){
	const parsedPosts = [];
	
	try{
		const $ = await cheerio.fromURL("https://news.ycombinator.com/");
		const posts = $.extract({
			ranks:['.rank'],
			titles:['.titleline > a'],
			points:['.score'],
			commentCounts:['.subline > a:last-child']
		});

		for(let i = 0;i<30;i++){
			let parsedPost = {};
			//taking advantage of parseInt knocking off the rest of string after number
			let points = parseInt(posts.points[i]);
			let commentCount = parseInt(posts.commentCounts[i]);
			//sometimes points and comments are missing from HackerNews posts
			if(isNaN(points)){points = 0}
			if(isNaN(commentCount)){commentCount = 0}
			parsedPost["rank"] = i+1;
			parsedPost["title"] = posts.titles[i];
			parsedPost["points"] = points;
			parsedPost["commentCount"] = commentCount;
			parsedPost["titleWordCount"] = wordCount(posts.titles[i]);
			parsedPosts.push(parsedPost);
		}
	}catch(err){
		console.log(err.message);
	}

	return parsedPosts;
}

module.exports = {
	scrapeHackerNews
}
