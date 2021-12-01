module.exports = (req, res, next) => {
  req.session.isAdmin = true; // TODO: Delete this line when the /login logic is implemented

  if (req.session.isAdmin) next();
  else { // TODO: Here let do the request but respond only with data according to the current user
    res.statusCode = 401;
    res.send('You are not admin!');
  }
};
