// const express = require("express");
// // const exphbs = require("express-handlebars");
// const mysql = require("mysql");

// const app = express();

// app.use(express.static("public"));

// const PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// // app.set("view engine", "handlebars");

// const routes = require("./controllers/draft_controller.js");

// app.use(routes);

// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
// });