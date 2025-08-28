require('dotenv').config();

function home(req,res,next){
	res.render('../views/home',{apiVersion:process.env.API_VERSION});
}

module.exports = {home};
