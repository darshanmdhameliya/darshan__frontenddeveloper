import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard'); // Redirect to dashboard after successful login
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit} className="form">
                <p id="heading">Login</p>
                <div className="field">
                    <input
                        autoComplete="off"
                        placeholder="Username"
                        className="input-field"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="field">
                    <input
                        placeholder="Password"
                        className="input-field"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="btn   ">
                    <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <NavLink to={'/SignUp'}>

                        <button className="button2">Sign Up</button>
                    </NavLink>
                </div>
                <button className="button3">Forgot Password</button>
            </form>

        </div >
    );
};

export default Login;

