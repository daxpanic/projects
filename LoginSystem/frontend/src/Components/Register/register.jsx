import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import { AUTH_BASE_URL } from '../../config';

const RegisterPage = () => {
    const [displayed_name, setDisplayedName] = useState('');
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage('');

        if (password !== confirmPassword) {
            setIsError(true);
            setMessage('Passwords do not match');
            return;
        }

        try {
            await axios.post(`${AUTH_BASE_URL}/register`, {
                email,
                password,
                full_name: full_name,
                displayed_name: displayed_name,
            });

            setIsError(false);
            setMessage('Registration successful');

            setTimeout(() => {
                navigate('/login');
            }, 1500);
        } catch (error) {
            setIsError(true);
            setMessage(
                error.response?.data?.detail ||
                error.response?.data?.message ||
                'Registration failed'
            );
        }
    };

    return (
        <div className='register-wrapper'>
            <form className='form-box register' onSubmit={handleRegister}>
                <div className="register-input">
                    <h2>Register</h2>
                    {message && (
                        <p className={`form-message ${isError ? 'error' : 'success'}`}>
                            {message}
                        </p>
                    )}
                    <input
                        type="text"
                        placeholder="Full name"
                        required
                        value={full_name}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Displayed name"
                        required
                        value={displayed_name}
                        onChange={(e) => setDisplayedName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" required />I agree to Terms and Conditions</label>
                </div>
                <button type="submit">Register</button>
                <div className="login-link">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
