const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3001;
const usersFile = path.join(__dirname, 'users.json');

app.use(cors());
app.use(express.json());

async function readUsers() {
    try {
        const data = await fs.readFile(usersFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(usersFile, '[]', 'utf-8');
            return [];
        }
        throw error;
    }
}

async function writeUsers(users) {
    await fs.writeFile(usersFile, JSON.stringify(users, null, 2), 'utf-8');
}

app.get('/login', async (req, res) => {
    const { email, password } = req.query;

    if (!email || !password) {
        return res.status(400).json({ 
            message: 'Email and password are required' 
        });
    }

    try {
        const users = await readUsers();

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            return res.status(401).json({ 
                message: 'Invalid email or password' 
            });
        }

        return res.json({
            message: 'Login successful',
            user: {
                username: user.username,
                email: user.email
            },
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ 
            message: 'Server error during login' 
        });
    }
});


app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ 
            message: 'Username, email, and password are required' 
        });
    }

    try {
        const users = await readUsers();

        const existingUser = users.find(
            (user) => user.email === email
        );

        if (existingUser) {
            return res.status(409).json({ 
                message: 'Email is already registered' 
            });
        }

        users.push({
            username,
            email,
            password
        });

        await writeUsers(users);

        return res.status(201).json({ 
            message: 'Registration successful' 
        });

    } catch (error) {
        console.error('Register error:', error);
        return res.status(500).json({ 
            message: 'Server error during registration' 
        });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
