const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors")
const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = 'mongodb+srv://tony:tony123@calculator-vvuzd.mongodb.net/test?retryWrites=true';

mongoose.connect(mongoURI, {useNewUrlParser: true })
        .then(() => console.log('Successfully connected to MongoDB.'))
        .catch(err => console.log(err)); 
        
const PORT = process.env.PORT || 5000;


if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
  console.log('Serving React App...');
};

app.use('/users', require('./routes/users'));

app.listen(PORT, () => console.log("Server started on port " + PORT));
