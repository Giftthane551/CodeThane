import React, { useState } from 'react';
import'./Login.css'
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., API call)
        console.log('Email:', email);
        console.log('Password:', password);
        // Implement authentication logic or API call here
    };

    return (
        <div className='LogContainer'>
        <div className="login-form-container">
            <h2 className='SignUpName'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                <p>Please Click the Link Below For Signning Up</p>
                <a className="navItem"><Link to="/signup" className="navLink">SignUp Now!</Link></a>
            </form>
         </div>
        </div>
    );
}

export default Login;
