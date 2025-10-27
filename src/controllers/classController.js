const Class = require('../models/Class');

// OBTENER TODAS las clases
exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.findAll();
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener las clases',
            error: error.message 
        });
    }
};

// OBTENER UNA clase por ID
exports.getClassById = async (req, res) => {
    try {
        const classItem = await Class.findByPk(req.params.id);
        if (classItem) {
            res.status(200).json(classItem);
        } else {
            res.status(404).json({ message: 'Clase no encontrada' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener la clase',
            error: error.message 
        });
    }
};

// CREAR una nueva clase
exports.createClass = async (req, res) => {
    try {
        const newClass = await Class.create(req.body);
        res.status(201).json(newClass);
    } catch (error) {
        res.status(400).json({ 
            message: 'Error al crear la clase',
            error: error.message 
        });
    }
};

// ACTUALIZAR una clase por ID
exports.updateClass = async (req, res) => {
    try {
        const classItem = await Class.findByPk(req.params.id);
        if (classItem) {
            await classItem.update(req.body);
            res.status(200).json(classItem);
        } else {
            res.status(404).json({ message: 'Clase no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ 
            message: 'Error al actualizar la clase',
            error: error.message 
        });
    }
};

// ELIMINAR una clase por ID
exports.deleteClass = async (req, res) => {
    try {
        const classItem = await Class.findByPk(req.params.id);
        if (classItem) {
            await classItem.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Clase no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ 
            message: 'Error al eliminar la clase',
            error: error.message 
        });
    }
};