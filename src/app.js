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

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/products', productRoutes);

// Función para iniciar el servidor
async function startServer() {
    try {
        await sequelize.sync({ force: false });
        console.log('Base de datos sincronizada correctamente.');
        
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

startServer();