const scrapeController = require('../controllers/scrapeController.js');
const express = require('express');
const scrapeRouter = express.Router();

scrapeRouter.get("/json", scrapeController.json);
scrapeRouter.get("/view", scrapeController.view);

module.exports = scrapeRouter;
