import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='login-wrapper'>
            <form className='form-box login' onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className='login-input'>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                    />
                </div>
                <label><input type="checkbox" />Remember me</label>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don’t have an account? <Link to="/register">Register</Link></p>
                </div>
                <div className="fp-link">
                    <p>Forgot your password? <Link to="/forgot-password">Reset password</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;