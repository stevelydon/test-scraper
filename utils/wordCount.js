
function wordCount(text){
	return (text.match(/\b\S+\b/g) || []).length;
}

module.exports = wordCount;
