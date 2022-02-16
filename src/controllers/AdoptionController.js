const Adoption = require('../models/Adoption');

class AdoptionController {
  async store(req, res) {
    try {
      const adoption = await Adoption.create(req.body);

      return res.json({
        error: false,
        message: 'Adoção criada com sucesso!',
        data: adoption,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao criar adoção!',
        data: error,
      });
    }
  }

  async index(req, res) {
    const adoptions = await Adoption.findAll();

    return res.json({
      error: false,
      message: 'Adoções retornadas com sucesso!',
      data: adoptions,
    });
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const adoption = await Adoption.findByPk(id);

      adoption.update(req.body);

      await adoption.save();

      return res.json({
        error: false,
        message: 'Adoção editada com sucesso!',
        data: adoption,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao editar adoção!',
        data: error,
      });
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;

      const adoption = await Adoption.findByPk(id);

      await adoption.destroy();

      return res.json({
        error: false,
        message: 'Adoção deletada com sucesso!',
        data: adoption,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao deletar adoção!',
        data: error,
      });
    }
  }
}

module.exports = new AdoptionController();
