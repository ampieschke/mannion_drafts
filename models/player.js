// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

const Player = sequelize.define(
  "player",
  {
    player_name: Sequelize.STRING,
    nfl_team: Sequelize.STRING,
    position: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

// Syncs with DB
Player.sync();

module.exports = Player;
