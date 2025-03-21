import express from 'express';
const app = express();
const port = 3000;

// Milleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Routes
app.get('/', (req, res) => { res.render('home') });
app.get('/show-contact', (req, res) => {res.render('show-contact')});  
app.get('/add-contact', (req, res) => { res.render('add-contact') });
app.post('/show-contact', (req, res) => {  res.render('show-contact') });
app.get('/update-contact', (req, res) => { res.render('update-contact')  });
app.post('/update-content', (req, res) => { res.render('update-content') });
app.get('/delete-contact', (req, res) => { res.render('delete-contact') });