const axios = require("axios");
const Dev = require("../models/Dev.js");

class DevController {
  async store(req, res) {
    try {
      const { username } = req.body;

      const userExists = await Dev.findOne({ user: username });

      if (userExists) {
        return res.status(200).json(userExists);
      }

      const githubResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );

      const { name, bio, avatar_url: avatar } = githubResponse.data;

      const dev = await Dev.create({
        name,
        user: username,
        bio,
        avatar
      });

      return res.status(200).json(dev);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new DevController();
