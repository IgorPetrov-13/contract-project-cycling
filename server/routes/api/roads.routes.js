const roadsRoute = require('express').Router();
const { Road } = require('../../db/models');
const verifyAccessToken = require('../../middleware/verifyAccessToken');

roadsRoute.get('/', async (req, res) => {
  try {
    const roads = await Road.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ message: 'success', roads });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

roadsRoute.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const road = await Road.findOne({ where: { id } });
    res.status(200).json({ message: 'success', road });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

roadsRoute.post('/', verifyAccessToken, async (req, res) => {
  const { title, description, mapLink, length, city, userId } = req.body;
  try {
    if (title && description && mapLink && length && city && userId) {
      const newRoad = Road.create({
        title,
        description,
        city,
        length,
        mapLink,
        userId,
      });
      res.status(201).json({ message: 'success', newRoad });
    } else {
      res.status(400).json({ message: 'write correct information' });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

roadsRoute.delete('/:roadId', verifyAccessToken, async (req, res) => {
  const { roadId } = req.params;
  try {
    const deletedRoad = Road.destroy({ where: { id: roadId } });
    if (deletedRoad === 0) {
      return res.status(404).json({ message: 'Road not found' });
    } else {
      res.status(200).json({ message: 'success' });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

roadsRoute.put('/:roadId', verifyAccessToken, async (req, res) => {
  const { roadId } = req.params;
  try {
    const road = await Road.findOne({ where: { id: roadId } });
    if (!road) {
      return res.status(404).json({ message: 'Road not found' });
    } else {
      const updateRoad = await Road.update(req.body, { where: { id: roadId } });
      res.status(200).json({ message: 'success', updateRoad });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = roadsRoute;
