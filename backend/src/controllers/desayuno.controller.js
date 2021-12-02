const desayunoCtrl = {};

const Desayuno = require('../models/Desayuno');

desayunoCtrl.getDesayunos = async (req, res) => {
    const desayunos = await Desayuno.find();
    res.json(desayunos);
};

desayunoCtrl.createDesayuno = async (req, res) => {
    const { direccion, ingredientes, date, cliente } = req.body;
    const newDesayuno = new Desayuno({
        direccion,
        ingredientes,
        date,
        cliente
    });
    await newDesayuno.save();
    res.json('Nuevo Desayuno Agregado');
};

desayunoCtrl.getDesayuno = async (req, res) => {
    const desayuno = await Desayuno.findById(req.params.id);
    res.json(desayuno);
}

desayunoCtrl.deleteDesayuno = async (req, res) => {
    await Desayuno.findByIdAndDelete(req.params.id)
    res.json('Desayuno Eliminado');
}

desayunoCtrl.updateDesayuno = async (req, res) => {
    const { direccion, ingredientes, duration, date, cliente } = req.body;
    await Desayuno.findByIdAndUpdate(req.params.id, {
        direccion,
        ingredientes,
        duration,
        cliente
    });
    res.json('desayuno Actualizado');
}

module.exports = desayunoCtrl;