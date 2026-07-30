import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const AUTH_BASE_URL = 'http://127.0.0.1:8000/api/v1';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post(`${AUTH_BASE_URL}/login`, {
                email,
                password,
            });

            const token = response.data?.access_token;
            if (token) {
                localStorage.setItem('authToken', token);
            }

            setIsError(false);
            setMessage('Login successful');
        } catch (error) {
            setIsError(true);
            setMessage(
                error.response?.data?.detail ||
                error.response?.data?.message ||
                'Login failed'
            );
        }
    };

    return (
        <div className='login-wrapper'>
            <form className='form-box login' onSubmit={handleLogin}>
                <h2>Login</h2>
                {message && (
                    <p className={`form-message ${isError ? 'error' : 'success'}`}>
                        {message}
                    </p>
                )}
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
