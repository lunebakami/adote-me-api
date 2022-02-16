const Vacination = require('../models/Vacination');

class VacinationController {
  async store(req, res) {
    try {
      const vacination = await Vacination.create(req.body);

      return res.json({
        error: false,
        message: 'Vacinação criada com sucesso!',
        data: vacination,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao criar vacinação!',
        data: error,
      });
    }
  }

  async index(req, res) {
    const vacinations = await Vacination.findAll();

    return res.json({
      error: false,
      message: 'Vacinações retornadas com sucesso!',
      data: vacinations,
    });
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const vacination = await Vacination.findByPk(id);

      vacination.update(req.body);

      await vacination.save();

      return res.json({
        error: false,
        message: 'Vacinação editada com sucesso!',
        data: vacination,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao editar vacinação!',
        data: error,
      });
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;

      const vacination = await Vacination.findByPk(id);

      await vacination.destroy();

      return res.json({
        error: false,
        message: 'Vacinação deletada com sucesso!',
        data: vacination,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao deletar vacinação!',
        data: error,
      });
    }
  }
}

module.exports = new VacinationController();
