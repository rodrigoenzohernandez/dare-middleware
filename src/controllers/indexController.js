const indexController = {
  getMessage(_req, res) {
    try {
      res.json('Welcome to dare asessment');
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  },
};

module.exports = indexController;
