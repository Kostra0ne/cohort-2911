module.exports = function protectRoute(req, res, next) {
    if (req.session.currentUser) next(); // if user is logged in ... pass the ball
    else res.redirect("/auth/signin"); // else block and redirect to sigin page

}