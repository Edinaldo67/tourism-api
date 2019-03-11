const express = require('express');
const routes = express.Router();

const TourismController = require('./controllers/TourismController');

routes.get('/tourism', TourismController.index);
routes.get('/tourism/:id', TourismController.show);
routes.post('/tourism', TourismController.store);
routes.put('/tourism/:id', TourismController.update);
routes.delete('/tourism/:id', TourismController.destroy);

module.exports = routes;