const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });


  app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    

    if (email === req.body.email && password === req.body.password) {
        return res.json({ message: 'Login successful' });
    } else {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
});

