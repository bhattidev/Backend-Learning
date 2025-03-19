import express from 'express';
const app = express();  


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.use(express.json())


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/about', (req, res) => {   
    res.send(req.body.name);
});
    

