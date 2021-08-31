const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

//put cookie in some information;
//user is user from record (existingUser i user)
//Pokretanje objekta done()
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//pretvorili korisnicki id u usera / Pronadje taj id i onda je sve to u user-u
//izvrsenoo uspjesno - (done object) i user iz objekta je komplet user od id-a
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => done(null, user));
});

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        },
        async(accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });

            if (existingUser) {
                //pronalazak ako ga ima i vracanje uspjesnoo
                return done(null, existingUser);
            } else {
                //kreiranje
                const user = await new User({ googleId: profile.id }).save();
                done(null, user);
            }
        }
    )
);