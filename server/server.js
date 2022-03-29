const express =require('express');
const apiRouter =require('./routes');
const path = require('path');

const app =express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//points end user to our client
app.use(express.static('./client'));

// puts our api inside of an "/api" path --
app.use('/api', apiRouter);

app.get('*', (req, res) => res.sendFile(path.join(_dirname, '../client/index.html')));

app.listen(3000, () => console.log("Server Running on http://localhost:3000/"));