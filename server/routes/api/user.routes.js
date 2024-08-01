const userRoute = require("express").Router();
const { Road } = require("../../db/models");



userRoute.get("/:id", async (req, res) => {
  //Берем id юзера и выводим все его маршруты в личном кабинете
  const { id } = req.params;
  try {
    const userRoads = await Road.findAll({ where: { userId: id } });
    if (userRoads) {
      res.status(200).json({ message: "success", userRoads });
    } else {
      res.status(400).json({ message: "Нет такого маршрута" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = userRoute;
