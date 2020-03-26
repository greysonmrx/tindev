const Dev = require("../models/Dev.js");

class DislikeController {
  async store(req, res) {
    try {
      const { devId } = req.params;
      const { user } = req.headers;

      const loggedDev = await Dev.findById(user);
      const targetDev = await Dev.findById(devId);

      if (!targetDev) {
        return res.status(400).json({
          message: "Dev não encontrado"
        });
      }

      loggedDev.dislikes.push(targetDev._id);

      await loggedDev.save();

      return res.status(200).json(loggedDev);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new DislikeController();
