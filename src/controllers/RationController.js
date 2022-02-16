const Ration = require('../models/Ration');

class RationController {
  async store(req, res) {
    try {
      const ration = await Ration.create(req.body);

      return res.json({
        error: false,
        message: 'Ração criada com sucesso!',
        data: ration,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao criar ração!',
        data: error,
      });
    }
  }

  async index(req, res) {
    const rations = await Ration.findAll();

    return res.json({
      error: false,
      message: 'Rações retornadas com sucesso!',
      data: rations,
    });
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const ration = await Ration.findByPk(id);

      ration.update(req.body);

      await ration.save();

      return res.json({
        error: false,
        message: 'Ração editada com sucesso!',
        data: ration,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao editar ração!',
        data: error,
      });
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;

      const ration = await Ration.findByPk(id);

      await ration.destroy();

      return res.json({
        error: false,
        message: 'Ração deletada com sucesso!',
        data: ration,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao deletar ração!',
        data: error,
      });
    }
  }
}

module.exports = new RationController();
