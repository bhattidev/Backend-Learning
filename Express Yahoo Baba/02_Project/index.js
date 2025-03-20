import express from 'express';
const app = express();
const port = 3000;  // port number

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
}); 

app.get('/', (req, res) => {
  res.send('Home Page');
}); 

app.get('/form', (req, res) => {
res.render('form', { message: '' });
}); 

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const message = `Hello ${name}! Your form has been submitted.`;
  res.render('form', { message: message });
});

