import express from 'express';
import mongoose from 'mongoose';
import Contact from './models/contacts.models.js';
const app = express();
const port = 3000;

// Milleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


// Database Connection
mongoose.connect(' mongodb://127.0.0.1:27017/contacts-crud')
.then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));



// Routes
app.get('/', async (req, res) => {
  const contacts = await Contact.find()
  res.render('home', {contacts})
});

app.get('/show-contact/:id', async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  res.render('show-contact', {contact})
}); 

app.get('/add-contact', (req, res) => { res.render('add-contact') });
app.post('/add-contact', (req, res) => {
  const contact = await Contact.insertOne({
    
  })
  res.send(req.body)
 });

app.get('/update-contact/:id', (req, res) => { res.render('update-contact')  });
app.post('/update-contact/:id', (req, res) => {  });

app.get('/delete-contact/:id', (req, res) => { });

// Server Connection
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});