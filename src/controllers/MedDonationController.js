const MedDonation = require('../models/MedDonation');

class MedDonationController {
  async store(req, res) {
    try {
      const donation = await MedDonation.create(req.body);

      return res.json({
        error: false,
        message: 'Doação de Medicamento criada com sucesso!',
        data: donation,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao criar doação de medicamento!',
        data: error,
      });
    }
  }

  async index(req, res) {
    const donations = await MedDonation.findAll();

    return res.json({
      error: false,
      message: 'Doações de Medicamentos retornadas com sucesso!',
      data: donations,
    });
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const donation = await MedDonation.findByPk(id);

      donation.update(req.body);

      await donation.save();

      return res.json({
        error: false,
        message: 'Doação de Medicamento editada com sucesso!',
        data: donation,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao editar doação de medicamento!',
        data: error,
      });
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;

      const donation = await MedDonation.findByPk(id);

      await donation.destroy();

      return res.json({
        error: false,
        message: 'Doação de Medicamento deletada com sucesso!',
        data: donation,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao deletar doação de medicamento!',
        data: error,
      });
    }
  }
}

module.exports = new MedDonationController();
