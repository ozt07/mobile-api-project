const express = require('express');
const cors = require('cors');
const sequelize = require('./database/connection');

// Importar modelos
const Product = require('./models/Product');
const User = require('./models/User');
const Class = require('./models/Class');
const Agenda = require('./models/Agenda');
const Billing = require('./models/Billing');

// Importar rutas
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const classRoutes = require('./routes/classRoutes');
const agendaRoutes = require('./routes/agendaRoutes');
const billingRoutes = require('./routes/billingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/agendas', agendaRoutes);
app.use('/api/billings', billingRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ 
        message: 'API RESTful funcionando correctamente',
        endpoints: {
            products: '/api/products',
            users: '/api/users',
            classes: '/api/classes',
            agendas: '/api/agendas',
            billings: '/api/billings'
        }
    });
});

// Función para iniciar el servidor
async function startServer() {
    try {
        await sequelize.sync({ force: false });
        console.log('Base de datos sincronizada correctamente.');
        console.log('Tablas creadas: Products, Users, Classes, Agendas, Billings');
        
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
            console.log('Endpoints disponibles:');
            console.log('- GET /api/products');
            console.log('- GET /api/users');
            console.log('- GET /api/classes');
            console.log('- GET /api/agendas');
            console.log('- GET /api/billings');
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

startServer();