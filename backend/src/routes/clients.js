const { Router } = require('express');
const router = Router();

const { getClients,createClient, deleteClient } = require('../controllers/client.controller');

router.route('/')
    .get(getClients)
    .post(createClient);

router.route('/:id')
    .delete(deleteClient);

module.exports = router;
