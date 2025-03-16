import express from 'express';
const app = express();  
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.json({ name: 'John Doe', age: 25 });
}); 

app.get('/about', (req, res) => {
    res.redirect('/user');
});
app.get('/user', (req, res) => {
    res.send('User page');
});

