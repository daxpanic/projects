import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { AUTH_BASE_URL } from '../../config';
import { setSession } from '../../auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

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
                setSession(token, email);
            }

            setIsError(false);
            setMessage('Login successful');

            navigate('/dashboard');
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
