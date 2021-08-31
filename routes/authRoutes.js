const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
        })
    );

    //after a login and finished route auth/google goes to this
    app.get('/auth/google/callback', passport.authenticate('google'));

    //Trebalo bi da bude empty object kad se izvrsi, kao i provera current_user da bude prazna
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    //req represents incooming request, res represents the outgoing response
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
    //ovdje je odgovor poslat dolazeci request -> user (u dolazecem requestu user)
};