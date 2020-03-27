const Dev = require("../models/Dev.js");

class LikeController {
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

      if (targetDev.likes.includes(loggedDev._id)) {
        const loggedSocket = req.connectedUsers[user];
        const targetSocket = req.connectedUsers[devId];

        if (loggedSocket) {
          req.io.to(loggedSocket).emit("match", targetDev);
        }

        if (targetSocket) {
          req.io.to(targetSocket).emit("match", loggedDev);
        }
      }

      loggedDev.likes.push(targetDev._id);

      await loggedDev.save();

      return res.status(200).json(loggedDev);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new LikeController();
