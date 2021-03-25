//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

//Create instance of Express App
const app = express();

//Set the PORT of the application
const PORT = process.env.PORT || 8000;

//Serve staticcontent for the app from the 'public' directory
app.use(express.static("public"));

//Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import routes and give the server access
require("./router/htmlroutes.js")(app);
require("./router/apiRoutes.js")(app);

//Start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
