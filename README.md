
# 🛒 Proyecto de Carrito de Compras con Node.js, Express y Handlebars

Este proyecto es una aplicación web construida con Node.js y Express, que incluye funcionalidades como gestión de carritos de compras, conexión con MongoDB, renderizado con Handlebars.

---

## 🚀 Tecnologías y Librerías Usadas

- **Node.js**
- **Express**
- **MongoDB (con Mongoose)**
- **Handlebars / Express-Handlebars**
- **Multer** – para carga de archivos
- **Socket.IO** – comunicación en tiempo real
- **SweetAlert2** – notificaciones y alertas
- **Dotenv** – manejo de variables de entorno
- **Nodemon** – reinicio automático en desarrollo

---

## 📦 Instalación del Proyecto

1. **Clona el repositorio:**

```bash
git clone https://github.com/oscaresteban2/entrega-final/tree/main
cd el-repositorio
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Crea un archivo `.env`** en la raíz del proyecto con las variables necesarias:

```env
PORT=8080
mongodb+srv://oscar:1234@cluster0.cscud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

4. **Inicia el servidor en modo desarrollo:**

```bash
npm run dev
```

> Este comando utiliza **Nodemon** para reiniciar el servidor automáticamente ante cambios.

---

## 📁 Scripts disponibles

- `npm run dev`: Inicia el servidor con Nodemon
- `npm start`: Inicia el servidor en producción

---

## ⚠️ Notas importantes

- Asegúrate de tener MongoDB corriendo localmente o usa un URI de MongoDB Atlas.
- Revisa que el archivo `.env` contenga todos los valores requeridos.

---

## 🧪 Librerías instaladas

```json
"dependencies": {
  "dotenv": "^16.5.0",
  "express": "^4.18.2",
  "express-handlebars": "^8.0.3",
  "handlebars": "^4.7.8",
  "mongoose": "^8.14.2",
  "mongoose-paginate-v2": "^1.9.0",
  "multer": "^1.4.5-lts.1",
  "nodemon": "^3.0.1",
  "socket.io": "^4.8.1",
  "sweetalert2": "^11.22.2"
}
```

---

## ✨ Créditos

Desarrollado por **Oscar Peñuela**
