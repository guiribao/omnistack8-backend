const express = require('express');
const devController = require('./controllers/devController');
const likeController = require('./controllers/likeController');
const dislikeController = require('./controllers/dislikeController');

const routes = express.Router();

routes.get('/devs', devController.index);
routes.post('/devs', devController.store);

routes.post('/devs/:devId/like', likeController.store);
routes.post('/devs/:devId/dislike', dislikeController.store);

module.exports = routes;