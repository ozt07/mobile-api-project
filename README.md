# 🍳 RecipeMaster Backend — Mobile API Project

API RESTful desarrollada con **Node.js**, **Express**, **Sequelize** y **SQLite** para gestionar el sistema de recetas del proyecto **RecipeMaster**.

---

## 🚀 Características Principales

- Operaciones **CRUD completas** para todas las entidades  
- Base de datos **SQLite** con **Sequelize ORM**  
- Estructura **modular** con controladores y rutas  
- Soporte para **Docker** y **Docker Compose**  

---

## 🗂️ Estructura del Proyecto

```
mobile-api-project/
├── src/
│   ├── app.js
│   ├── database/connection.js
│   ├── models/
│   ├── controllers/
│   └── routes/
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

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

🧡 *Desarrollado con Node.js y buenas prácticas REST.*
