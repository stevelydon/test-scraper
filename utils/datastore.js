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

const insertPost = db.prepare('INSERT INTO posts(request_id,request_timestamp,rank,title, points, comment_count, title_word_count) VALUES(?,?,?,?,?,?,?);');
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

const queryGetAll = db.prepare('SELECT * FROM posts ORDER BY request_id DESC,rank;');
function getAllPosts(){
	return queryGetAll.all();	
}

const queryGetLast = db.prepare('SELECT * FROM posts WHERE request_id = ? ORDER BY rank;');
function getLastPosts(){
	return queryGetLast.all(requestID);
}

const queryGetLastGreaterThan = db.prepare('SELECT * FROM posts WHERE request_id = ? AND title_word_count > ? ORDER BY comment_count');
function getLastPostsGT5(){
	return queryGetLastGreaterThan.all(requestID,5);
}

const queryGetLastEqualOrLT = db.prepare('SELECT * FROM posts WHERE request_id = ? AND title_word_count <= ? ORDER BY points;');
function getLastPostsEqualOrLT5(){
	return queryGetLastEqualOrLT.all(requestID,5);
}

module.exports = {
	storePosts,
	getAllPosts,
	getLastPosts,
	getLastPostsGT5,
	getLastPostsEqualOrLT5
}
