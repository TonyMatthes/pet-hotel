//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const petsRouter = require('./routes/pets.router');
const ownersRouter = require('./routes/owners.router')
//globals
const PORT = process.env.PORT || 5000;

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//-- routers
app.use('/pets', petsRouter);
app.use('/owners', ownersRouter);

//spins

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});