const authController = {
  login(req, res) {
    try {
      res.json('Endpoint /login - WIP');
    } catch (error) {
      console.log(error);

      res.json(error);
    }
  },
};

module.exports = authController;
