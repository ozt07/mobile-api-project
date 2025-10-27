const Billing = require('../models/Billing');

// OBTENER TODAS las facturas
exports.getAllBillings = async (req, res) => {
    try {
        const billings = await Billing.findAll();
        res.status(200).json(billings);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener las facturas',
            error: error.message 
        });
    }
};

// OBTENER UNA factura por ID
exports.getBillingById = async (req, res) => {
    try {
        const billing = await Billing.findByPk(req.params.id);
        if (billing) {
            res.status(200).json(billing);
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener la factura',
            error: error.message 
        });
    }
};

// CREAR una nueva factura
exports.createBilling = async (req, res) => {
    try {
        const newBilling = await Billing.create(req.body);
        res.status(201).json(newBilling);
    } catch (error) {
        res.status(400).json({ 
            message: 'Error al crear la factura',
            error: error.message 
        });
    }
};

// ACTUALIZAR una factura por ID
exports.updateBilling = async (req, res) => {
    try {
        const billing = await Billing.findByPk(req.params.id);
        if (billing) {
            await billing.update(req.body);
            res.status(200).json(billing);
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ 
            message: 'Error al actualizar la factura',
            error: error.message 
        });
    }
};

// ELIMINAR una factura por ID
exports.deleteBilling = async (req, res) => {
    try {
        const billing = await Billing.findByPk(req.params.id);
        if (billing) {
            await billing.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ 
            message: 'Error al eliminar la factura',
            error: error.message 
        });
    }
};