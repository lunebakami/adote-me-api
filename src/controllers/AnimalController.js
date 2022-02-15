const Animal = require('../models/Animal');

class AnimalController {
  async store(req, res) {
    try {
      const animal = await Animal.create(req.body);

      return res.json({
        error: false,
        message: 'Animal criado com sucesso!',
        data: animal,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao criar animal!',
        data: error,
      });
    }
  }

  async index(req, res) {
    const animals = await Animal.findAll();

    return res.json({
      error: false,
      message: 'Animais retornados com sucesso!',
      data: animals,
    });
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const animal = await Animal.findByPk(id);

      animal.update(req.body);

      await animal.save();

      return res.json({
        error: false,
        message: 'Animal editado com sucesso!',
        data: animal,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao editar animal!',
        data: error,
      });
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;

      const animal = await Animal.findByPk(id);

      await animal.destroy();

      return res.json({
        error: false,
        message: 'Animal deletado com sucesso!',
        data: animal,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao deletar animal!',
        data: error,
      });
    }
  }
}

module.exports = new AnimalController();
