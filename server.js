const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use(bodyParser.json())

// DB Config
const db_url = process.env.MONGODB_URL || require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db_url, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', cors(), require('./routes/api/items'));

// Listen on Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));