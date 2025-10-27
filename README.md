# 🍳 RecipeMaster Backend — Mobile API Project

API RESTful desarrollada con **Node.js**, **Express**, **Sequelize** y **SQLite** para gestionar el sistema de recetas del proyecto **RecipeMaster**.

---

## 🚀 Características Principales

- Operaciones **CRUD completas** para todas las entidades  
- Base de datos **SQLite** con **Sequelize ORM**  
- Estructura **modular** con controladores y rutas  
- Soporte para **Docker** y **Docker Compose**  
- **Interfaz web incluida** para gestión visual del sistema

---

## 🎨 INTERFAZ WEB INCLUIDA

### Características de la Interfaz

📱 **Diseño responsive y moderno**  
➕ **Crear productos** con formulario validado  
👀 **Ver productos** en formato de tarjetas  
✏️ **Editar productos** en tiempo real  
🗑️ **Eliminar productos** con confirmación  
🔄 **Actualización automática** de la lista  

**URL de la Interfaz:**  
👉 [http://localhost:3000](http://localhost:3000)

### Funcionalidades Implementadas

- **CREATE ➕** Crear nuevos productos  
- **READ 👀** Listar todos los productos en formato amigable  
- **UPDATE ✏️** Editar productos existentes  
- **DELETE 🗑️** Eliminar productos con confirmación  

### Capturas de la Interfaz

```
🍳 RecipeMaster API Tester
├── 📦 Gestión de Productos
│   ├── 🔄 Actualizar Lista
│   ├── ➕ Crear Producto
│   └── Lista de productos en tarjetas
│       ├── ✏️ Botón Editar
│       └── 🗑️ Botón Eliminar
```

---

## 🔄 ACTUALIZAR DOCKER

Para incluir los últimos cambios en Docker:

```bash
# Reconstruir y ejecutar con los nuevos cambios
docker-compose down
docker-compose up --build

# O para limpiar completamente
docker-compose down -v
docker-compose up --build
```

---

## 📊 ESTRUCTURA ACTUALIZADA DEL PROYECTO

```
mobile-api-project/
├── src/
│   ├── app.js                 # Servidor principal + archivos estáticos
│   ├── public/                # Interfaz web
│   │   └── index.html         # Frontend completo con CRUD
│   ├── database/
│   │   └── connection.js      # Configuración Sequelize
│   ├── models/                # 5 modelos de datos
│   ├── controllers/           # 5 controladores CRUD
│   └── routes/                # 5 rutas de API
├── Dockerfile                 # Configuración de contenedor
├── docker-compose.yml         # Orquestación Docker
└── README.md                  # Documentación completa
```

---

## 🎯 USO DE LA INTERFAZ WEB

### Iniciar servidor:

```bash
npm start
# o con Docker
docker-compose up --build
```

### Abrir navegador:
👉 [http://localhost:3000](http://localhost:3000)

### Probar funcionalidades:

- Click **"➕ Crear Producto"** para agregar nuevos items  
- Click **"✏️ Editar"** en cualquier producto para modificarlo  
- Click **"🗑️ Eliminar"** para borrar productos  
- Click **"🔄 Actualizar Lista"** para refrescar la vista  

---

## 🛠️ Tecnologías

- **Node.js + Express.js**  
- **SQLite + Sequelize**  
- **Docker / Docker Compose**  
- **Nodemon** (modo desarrollo)  

---

## ⚙️ Instalación y Ejecución

### Requisitos
- Node.js 18+  
- npm  
- (Opcional) Docker Desktop  

### Ejecución

```bash
npm install
npm run dev
```

O con Docker:

```bash
docker-compose up --build
```

---

## 🔌 Endpoints Principales — Products

| Método | Endpoint              | Descripción         |
|--------|-----------------------|---------------------|
| GET    | /api/products         | Listar productos    |
| GET    | /api/products/:id     | Obtener producto    |
| POST   | /api/products         | Crear producto      |
| PUT    | /api/products/:id     | Actualizar producto |
| DELETE | /api/products/:id     | Eliminar producto   |

---

## 👥 Autoría

**Estudiante:** Oscar Fernando Tovar Prieto  
**Profesor:** Gonzalo Ricardo Novoa Fernández  
**Institución:** Fundación Universitaria Los Libertadores  
**Asignatura:** Computación en la Nube  
**Fecha:** Octubre 2025  

**Repositorio:** [github.com/ozt07/mobile-api-project](https://github.com/ozt07/mobile-api-project)

---

🧡 *Desarrollado con Node.js, Express y una interfaz web integrada para RecipeMaster.*
