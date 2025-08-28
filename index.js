const express = require('express');
const scrapeRouter = require('./routes/scrapeRouter.js');
const homeRouter = require('./routes/homeRouter.js');
require('dotenv').config();

const API_VERSION_URL = "/" + process.env.API_VERSION;

const app = express();
app.set('view engine','ejs');
app.use(API_VERSION_URL + "/", scrapeRouter);
app.use("/", homeRouter);

const server = app.listen(process.env.EXPRESS_PORT, ()=>{
	console.log("Express server started, Port:"+process.env.EXPRESS_PORT);
});

app.closeServer = () => {
	server.close();	
}

module.exports = app;
