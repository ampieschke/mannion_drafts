module.exports = (app) => {
  app.get("/api/:players?", (req, res) => {
    if (req.params.players) {
      Player.findOne({
        where: {
          routeName: req.params.players,
        },
      }).then((result) => res.json(result));
    }
    res.json({ success: true });
  });
};
