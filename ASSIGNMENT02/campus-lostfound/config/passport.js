const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = function (passport) {

    // --------------------------------------------
    // LOCAL STRATEGY (Email + Password Login)
    // --------------------------------------------
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
            try {
                const user = await User.findOne({ email: email });

                if (!user) {
                    return done(null, false, { message: "Email not found" });
                }

                const match = await bcrypt.compare(password, user.password);

                if (!match) {
                    return done(null, false, { message: "Incorrect password" });
                }

                return done(null, user);
            } catch (err) {
                return done(err);
            }
        })
    );

    // --------------------------------------------
    // GITHUB STRATEGY (OAuth Login)
    // --------------------------------------------
    passport.use(
        new GitHubStrategy(
            {
                clientID: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                callbackURL: process.env.GITHUB_CALLBACK
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    // GitHub may hide emails → use fallback
                    const email =
                        profile.emails && profile.emails.length > 0
                            ? profile.emails[0].value
                            : `${profile.username}@github.temp`;

                    let user = await User.findOne({ githubId: profile.id });

                    if (!user) {
                        user = await User.create({
                            githubId: profile.id,
                            email: email
                        });
                    }

                    return done(null, user);
                } catch (err) {
                    return done(err, null);
                }
            }
        )
    );

    // --------------------------------------------
    // SESSION HANDLING
    // --------------------------------------------
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
};
