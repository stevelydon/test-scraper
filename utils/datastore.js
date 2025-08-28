const {DatabaseSync} = require('node:sqlite'); 
const db = new DatabaseSync(':memory:');

db.exec(`
CREATE TABLE posts(
		request_id INTEGER,
		request_timestamp TEXT,
		rank INTEGER,
		title TEXT,
		points INTEGER,
		comment_count INTEGER,
		title_word_count INTEGER
	) STRICT 
`);

const insertPost = db.prepare('INSERT INTO posts(request_id,request_timestamp,rank,title, points, comment_count, title_word_count) VALUES(?,?,?,?,?,?,?)');
const queryGetAll = db.prepare('SELECT * FROM posts ORDER BY request_id DESC,rank');
let requestID = 0;
function storePosts(postData){
	try{
		const requestTime = Date.now();
		requestID++;
		postData.forEach((post)=>{
			insertPost.run(requestID,requestTime,post['rank'],post['title'],
			post['points'],post['commentCount'],post['titleWordCount']);
		});
	}catch(err){
		console.log(err);
	}
}

function getAllPosts(){
	return queryGetAll.all();	
}

module.exports = {
	storePosts,
	getAllPosts
}
