const express = require('express');
const api = express.Router();
const reservaController = require ('../controllers/reservaController');

api.post('/reserva', reservaController.createReserva);
api.get('/reservas', reservaController.getReservas);
api.get('/reserva/search/:id', reservaController.getSpecificReservas);
api.put('/reserva/update/:id', reservaController.updateReserva);
api.delete('/reserva/delete/:id', reservaController.deleteSpecificReserva);

module.exports = api;