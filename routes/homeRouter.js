const homeRouter = require('express').Router();
const homeController = require('../controllers/homeController.js');

homeRouter.get("/",homeController.home);

module.exports = homeRouter;

