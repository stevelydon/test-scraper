
function home(req,res,next){
	res.send("HOME");
}

function json(req,res,next){
	res.send("JSON");
}

function view(req,res,next){
	res.send("VIEW");
}

export default {
	home,
	json,
	view
}

