const Player = require("../models/player.js");
const { Op } = require("sequelize");

module.exports = (app) => {
  app.post("/api/search", (req, res) => {
    Player.findAll({
      where: {
        player_name: {
          [Op.like]: "%" + req.body.name + "%",
        },
      },
    }).then((results) => res.json(results));
  });

  app.get("/api/search", (req, res) => {
    Player.findAll().then((results) => res.json(results));
  });
};
