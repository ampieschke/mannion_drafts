module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/setup", (req, res) => {
    res.render("setup");
  });
  app.get("/search", (req, res) => {
    res.render("search");
  });
};
