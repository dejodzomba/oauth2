const express = require('express');
const mongoose = require('mongoose');
const CookieSession = require('cookie-session'); //give us acces to cookie
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
//, {useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true

const app = express();

//enabling cookies
app.use(
    CookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);

//Essentially telling Passport to use cookies to manage our authentication
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; //get values from process.env.port and default values 5000
app.listen(PORT);