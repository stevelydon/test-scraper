const cheerio = require('cheerio');
const wordCount = require('./wordCount.js');

async function scrapeHackerNews(){
	const posts = [];
	
	const parsedHeadlines = [];
	const parsedSublines = [];

	try{
		const $ = await cheerio.fromURL("https://news.ycombinator.com/");

		//change to split extracts, found bug in previous method
		//sometimes missing points and/or comments. The subline html changes drastically
		$('.submission').each( function(index,element){

			parsedHeadlines.push($(element).extract({
				title: '.titleline > a',
			}));	
	
		});
		$('.submission +').each( function(index,element){
			parsedSublines.push($(element).extract({
				points:'.score',
				commentCount:'.subline > a:last-child',
			}));
		});


		for(let i = 0;i<30;i++){
			let parsedPost = {};
			//taking advantage of parseInt knocking off the rest of string after number
			let points = parseInt(parsedSublines[i].points);
			let commentCount = parseInt(parsedSublines[i].commentCount);
			//sometimes points and comments are missing from HackerNews posts
			if(isNaN(points)){points = 0}
			if(isNaN(commentCount)){commentCount = 0}
			parsedPost["rank"] = i+1;
			parsedPost["title"] = parsedHeadlines[i].title;
			parsedPost["points"] = points;
			parsedPost["commentCount"] = commentCount;
			parsedPost["titleWordCount"] = wordCount(parsedHeadlines[i].title);
			posts.push(parsedPost);
		}
	}catch(err){
		console.log(err.message);
	}

	return posts;
}

module.exports = {
	scrapeHackerNews
}
