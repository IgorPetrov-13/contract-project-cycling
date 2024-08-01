require("dotenv").config();
const express = require("express");
const app = express(); // Создаем экземпляр приложения
const PORT = process.env.PORT ?? 3000;
const serverConfig = require("./config/serverConfig");

// Импортируем роуты из отдельных файлов
const apiRoute = require("./routes/api.routes");

// Конфигурация
serverConfig(app);

// Маршрутизация
app.use("/api", apiRoute);


// Прослушивания порта
app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
