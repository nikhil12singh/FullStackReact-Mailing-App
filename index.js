const express = require('express')
const app = express()

app.get('/', (req,res) => {
	res.send({bye: 'buddy'});
});

app.listen(process.env.port || 5000);