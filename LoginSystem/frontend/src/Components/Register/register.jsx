import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const RegisterPage = () => {
    const handleRegister = (e) => {
        e.preventDefault();
    };

    return (
        <div className='register-wrapper'>
            <form className='form-box register' onSubmit={handleRegister}>
                <div className="register-input">
                    <h2>Register</h2>
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm password" required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />I agree to Terms and Conditions</label>
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
