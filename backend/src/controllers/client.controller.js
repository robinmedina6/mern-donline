const clientCtrl = {};

const Client = require('../models/Client');

clientCtrl.getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

clientCtrl.createClient = async (req, res) => {
    try {
        const { username } = req.body;

        const newClient = new Client({ username });
        await newClient.save();
        res.json('Cliente creado');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

clientCtrl.deleteClient = async (req, res) => {
    const { id } = req.params;
    await Client.findByIdAndDelete(id);
    res.json('Cliente Borrado');
}

module.exports = clientCtrl;