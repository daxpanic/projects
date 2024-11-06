import React from 'react';
import { Link } from 'react-router-dom';
import './forgotpassword.css'

const ForgotPassword = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='fp-wrapper'>
            <form className='form-box fp' onSubmit={handleSubmit}>
                <div className='fp-input'>
                    <h2>Recover Password</h2>
                    <input type="email" name="email" placeholder="Enter your email" required />
                </div>
                <button type="submit">Submit</button>
                <div className="login-link">
                    <p>Remembered your password? <Link to="/login">Login</Link></p>
                </div>
            </form>

        </div>
    );
};

export default ForgotPassword;