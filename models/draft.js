// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Syncs with DB
draft.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = players;
