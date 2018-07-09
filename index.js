const express = require('express');
const app = express();
require('./service/passport');

/*
app.get('/', (req,res) => {
	res.send({bye: 'buddy'});
});
*/

// 802514765834-0umqvlfbci87s8aumngers4v94lck7l2.apps.googleusercontent.com
// KGAcS2VUJ-awqRs-Hj0KjzAu
require('./routes/authRoutes')(app);
const PORT = process.env.port;
app.listen(PORT || 5000);