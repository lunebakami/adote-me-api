const MedUse = require('../models/MedUse');

class MedUseController {
  async store(req, res) {
    try {
      const medUse = await MedUse.create(req.body);

      return res.json({
        error: false,
        message: 'Uso de Medicamento criada com sucesso!',
        data: medUse,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao criar uso de medicamento!',
        data: error,
      });
    }
  }

  async index(req, res) {
    const medUses = await MedUse.findAll();

    return res.json({
      error: false,
      message: 'Doações de Medicamentos retornadas com sucesso!',
      data: medUses,
    });
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const medUse = await MedUse.findByPk(id);

      medUse.update(req.body);

      await medUse.save();

      return res.json({
        error: false,
        message: 'Uso de Medicamento editada com sucesso!',
        data: medUse,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao editar uso de medicamento!',
        data: error,
      });
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;

      const medUse = await MedUse.findByPk(id);

      await medUse.destroy();

      return res.json({
        error: false,
        message: 'Uso de Medicamento deletada com sucesso!',
        data: medUse,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao deletar uso de medicamento!',
        data: error,
      });
    }
  }
}

module.exports = new MedUseController();
