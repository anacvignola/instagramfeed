const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://instarocket:instarocket@cluster0-m7g7o.mongodb.net/instarocket?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'risezed')));

app.use(require('./routes'));

app.listen(3333);