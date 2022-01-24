function setUser(req, res, next) {
	if (req.session?.currentUser) {
		res.locals.currentUser = req.session?.currentUser;
		res.locals.isConnected = true;
	} else {
		res.locals.currentUser = null;
		res.locals.isConnected = false;
	}
	next();
}

module.exports = setUser;
