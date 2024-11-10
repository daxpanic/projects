const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

const accounts = [
    { email: "darko@gmail.com", password: "password1" },
    { email: "milan@gmail.com", password: "password2" },
    { email: "ana@gmail.com", password: "password3" },
    { email: "kurac@gmail.com", password: "password4" },
    { email: "admin@gmail.com", password: "secret" }
];

app.use(express.json());
app.use(cors());
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].email === email) {
            console.log("Correct email");
            if (accounts[i].password === password) {
                console.log("Correct password")
                return res.status(200).json({ message: 'Success loging in' });
            }
        }
    }

    return res.status(401).json({ message: 'Error loging in' });

});
