
function home(req,res,next){
	res.send("HOME");
}

function json(req,res,next){
	res.send("JSON");
}

function view(req,res,next){
	res.send("VIEW");
}

module.exports = {
	home,
	json,
	view
}

