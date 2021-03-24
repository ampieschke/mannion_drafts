const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.genericPW,
  database: "draft",
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
  searchPlayer();
});

const searchPlayer = () => {
  inquirer
    .prompt({
      name: "player",
      type: "input",
      message: "What player would you like to search for?",
    })
    .then((answer) => {
      console.log(answer.player);
      connection.query(
        "SELECT * FROM players WHERE ?",
        { player_name: answer.player },
        (err, res) => {
          if (res[0]) {
            console.log(`Found Player: ${res[0].player_name}`);
          } else {
            console.error(`No results for ${answer.player}`);
          }
        }
      );
    });
};
