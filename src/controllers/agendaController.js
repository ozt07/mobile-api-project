const Agenda = require('../models/Agenda');

// OBTENER TODAS las agendas
exports.getAllAgendas = async (req, res) => {
    try {
        const agendas = await Agenda.findAll();
        res.status(200).json(agendas);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener las agendas',
            error: error.message 
        });
    }
};

// OBTENER UNA agenda por ID
exports.getAgendaById = async (req, res) => {
    try {
        const agenda = await Agenda.findByPk(req.params.id);
        if (agenda) {
            res.status(200).json(agenda);
        } else {
            res.status(404).json({ message: 'Agenda no encontrada' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener la agenda',
            error: error.message 
        });
    }
};

// CREAR una nueva agenda
exports.createAgenda = async (req, res) => {
    try {
        const newAgenda = await Agenda.create(req.body);
        res.status(201).json(newAgenda);
    } catch (error) {
        res.status(400).json({ 
            message: 'Error al crear la agenda',
            error: error.message 
        });
    }
};

// ACTUALIZAR una agenda por ID
exports.updateAgenda = async (req, res) => {
    try {
        const agenda = await Agenda.findByPk(req.params.id);
        if (agenda) {
            await agenda.update(req.body);
            res.status(200).json(agenda);
        } else {
            res.status(404).json({ message: 'Agenda no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ 
            message: 'Error al actualizar la agenda',
            error: error.message 
        });
    }
};

// ELIMINAR una agenda por ID
exports.deleteAgenda = async (req, res) => {
    try {
        const agenda = await Agenda.findByPk(req.params.id);
        if (agenda) {
            await agenda.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Agenda no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ 
            message: 'Error al eliminar la agenda',
            error: error.message 
        });
    }
};