const { Router } = require('express');
const router = Router();

const { getDesayunos, createDesayuno, getDesayuno, deleteDesayuno, updateDesayuno } = require('../controllers/desayuno.controller');

router.route('/')
    .get(getDesayunos)
    .post(createDesayuno);

router.route('/:id')
    .get(getDesayuno)
    .delete(deleteDesayuno)
    .put(updateDesayuno);

module.exports = router;


