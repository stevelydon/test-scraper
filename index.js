import express from 'express';
import dotenv from 'dotenv';
import scrapeRouter from './routes/scrapeRouter.js';
dotenv.config();

const API_VERSION_URL = "/" + process.env.API_VERSION;

const app = express();
app.use(API_VERSION_URL + "/", scrapeRouter);
app.listen(process.env.EXPRESS_PORT, ()=>{
	console.log("Express server started, Port:"+process.env.EXPRESS_PORT);
});
