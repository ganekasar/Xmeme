const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts.js');

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Xmeme API");
});

<<<<<<< HEAD
const CONNECTION_URL = 'mongodb+srv://ganesh:Ganesh123@cluster0.lvorf.mongodb.net/project?retryWrites=true&w=majority';
=======
const CONNECTION_URL = 'mongodb://localhost/project';
>>>>>>> 68378095760110d2b49a187fbd70764deef0a431
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);