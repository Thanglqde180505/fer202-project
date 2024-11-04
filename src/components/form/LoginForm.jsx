import React, { useState } from 'react';
import { assets } from '../../assets/assest';
import '../../assets/styles/components/form/LoginForm.css';

const LoginForm = ({ onSuccessLogin, onClose }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (credentials.username === 'admin' && credentials.password === '123') {
            const userData = {
                username: credentials.username,
                passWord: credentials.password,
                avatar: [assets.avatar]
            };
            onSuccessLogin(userData);
            alert('Đăng nhập thành công!');
            onClose();
        } else {
            alert('Thông tin đăng nhập không chính xác!');
        }
    };

    return (
        <div className="login-overlay">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>UserName</label>
                        <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>PassWord</label>
                        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    </div>
                    <button className='btn-login' type="submit">Login</button>
                    <button className='btn'  type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
