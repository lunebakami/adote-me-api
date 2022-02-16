const RationDonation = require('../models/RationDonation');

class RationDonationController {
  async store(req, res) {
    try {
      const donation = await RationDonation.create(req.body);

      return res.json({
        error: false,
        message: 'Doação de Ração criada com sucesso!',
        data: donation,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao criar doação de ração!',
        data: error,
      });
    }
  }

  async index(req, res) {
    const donations = await RationDonation.findAll();

    return res.json({
      error: false,
      message: 'Doações de Rações retornadas com sucesso!',
      data: donations,
    });
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const donation = await RationDonation.findByPk(id);

      donation.update(req.body);

      await donation.save();

      return res.json({
        error: false,
        message: 'Doação de Ração editada com sucesso!',
        data: donation,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao editar doação de ração!',
        data: error,
      });
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;

      const donation = await RationDonation.findByPk(id);

      await donation.destroy();

      return res.json({
        error: false,
        message: 'Doação de Ração deletada com sucesso!',
        data: donation,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao deletar doação de ração!',
        data: error,
      });
    }
  }
}

module.exports = new RationDonationController();
