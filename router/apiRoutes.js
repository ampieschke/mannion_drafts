const Player = require("../models/player.js");

module.exports = (app) => {
  app.get("/api/search/:player", (req, res) => {
    Player.findAll({
      where: {
        player_name: req.params.name,
      },
    }).then((results) => res.json(results));
  });
};
