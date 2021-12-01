module.exports = (req, res, next) => {
  req.session.user = 'temporalUser'; // TODO: Delete this line when the /login logic is implemented

  if (req.session.user) next();
  else {
    res.statusCode = 401;
    res.send('Unauthorized');
  }
};
