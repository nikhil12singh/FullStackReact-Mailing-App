const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
mongoose.connect(keys.mongoURI);
const app = express();
app.use(cookieSession(
{
	maxAge: 30*24*60*60*1000,
	keys: [keys.cookieKey]
})
);

app.use(passport.initialize());
app.use(passport.session());
require('./models/User');
require('./Service/passport');

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
