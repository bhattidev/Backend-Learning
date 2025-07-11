import express from 'express';
const app = express();
const port = 3000;

// Get Route
app.get('/', (req,res)=>{
    res.send('Hello from Express!')
})

app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Post
app.post('/contact', (req,res)=>{
res.send('You sent a POST request to /contact');
});

// Start the Server
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});