const User = require('../models/User');

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json({
        error: false,
        message: 'Usuário criado com sucesso!',
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao criar usuário!',
        data: error,
      });
    }
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.json({
      error: false,
      message: 'Usuários retornados com sucesso!',
      data: users,
    });
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const user = await User.findByPk(id);

      user.update(req.body);

      await user.save();

      return res.json({
        error: false,
        message: 'Usuário editado com sucesso!',
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao editar usuário!',
        data: error,
      });
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;

      const user = await User.findByPk(id);

      await user.destroy();

      return res.json({
        error: false,
        message: 'Usuário deletado com sucesso!',
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: 'Erro ao deletar usuário!',
        data: error,
      });
    }
  }
}

module.exports = new UserController();
