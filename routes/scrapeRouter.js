import scrapeController from '../controllers/scrapeController.js';
import express from 'express';
const scrapeRouter = express.Router();

scrapeRouter.get("/",scrapeController.home);
scrapeRouter.get("/json", scrapeController.json);
scrapeRouter.get("/view", scrapeController.view);

export default scrapeRouter;
