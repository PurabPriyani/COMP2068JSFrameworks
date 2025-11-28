module.exports = function (req, res, next) {
    if (!req.isAuthenticated()) {
        req.flash("error", "Please login first.");
        return res.redirect("/auth/login");
    }
    next();
};
