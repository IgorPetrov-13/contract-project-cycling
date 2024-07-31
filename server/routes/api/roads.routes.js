const roadsRoute = require("express").Router();
const { Road } = require("../../db/models");

roadsRoute.get("/", async (req, res) => {
  try {
    const roads = await Road.findAll({ order: [["id", "ASC"]] });
    res.status(200).json({ message: "success", roads });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

roadsRoute.get("/:roadId", async (req, res) => {
  const { roadId } = req.params;
  try {
    const road = await Road.findOne({ where: { id: roadId } });
    if (road) {
      res.status(200).json({ message: "success", task });
    } else {
      res.status(400).json({ message: "Нет такого маршрута" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

roadsRoute.post("/", async (req, res) => {
  const { title, description, map, length, city, userId } = req.body;
  try {
    if (title && description && map && length && city && userId) {
      const newRoad = Road.create({
        title,
        description,
        map,
        length,
        city,
        userId,
      });
      res.status(201).json({ message: "success", newRoad });
    } else {
      res.status(400).json({ message: "write correct information" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

roadsRoute.delete("/:roadId", async (req, res) => {
  const { roadId } = req.params;
  try {
    const deletedRoad = Road.destroy({ where: { id: roadId } });
    if (deletedRoad === 0) {
      return res.status(404).json({ message: "Task not found" });
    } else {
      res.status(200).json({ message: "success" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

roadsRoute.put("/:roadId", async (req, res) => {
  const { roadId } = req.params;
  try {
    const road = await Road.findOne({ where: { id: roadId } });
    if (!road) {
      return res.status(404).json({ message: "Task not found" });
    } else {
      const updateRoad = await Road.update(req.body, { where: { id: roadId } });
      res.status(200).json({ message: "success", updateRoad });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = roadsRoute;
