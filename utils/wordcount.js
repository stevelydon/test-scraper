
function wordcount(text){
	return (text.match(/\b\S+\b/g) || []).length;
}

module.exports = wordcount;
