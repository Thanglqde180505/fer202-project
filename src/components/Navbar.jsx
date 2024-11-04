import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assest';
import '../assets/styles/Navbar.css';
import { ShopService } from '../service/ShopService';
import LoginForm from './form/LoginForm';

const Navbar = () => {
    const { showSearch, setShowSearch } = useContext(ShopService);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); 
    const checkSearchVisible = () => {
        setShowSearch(prev => !prev);
    };

    const toggleLoginForm = () => {
        setShowLoginForm(prev => !prev);
    };


    const handleSuccessLogin = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
        setShowLoginForm(false); 
    };

    return (
        <div className='nav-bar d-flex align-items-center justify-content-between'>
            <Link to="/" onClick={() => setShowLoginForm(false)}>
                <img className='logo-shop' src={assets.logo} alt="this is logo" />
            </Link>
            <div className="optional d-flex align-items-center gap-3">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    Home
                </NavLink>
                <NavLink to="/collection" className={({ isActive }) => isActive ? 'active' : ''}>
                    Collection
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                    About
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                    Contact
                </NavLink>
            </div>
            <div className="utilities d-flex align-items-center gap-5 ">
                <i className="fa-solid fa-magnifying-glass" onClick={checkSearchVisible}></i>
                <i className="fa-solid fa-cart-shopping"></i>
                {isLoggedIn && user ? (
                    <img
                        className='user-avatar rounded-circle'
                        src={user.avatar}
                        alt="User Avatar"
                        style={{ width: '50px', height: '50px' }}
                    />
                ) : (
                    <i className="fa-solid fa-user" onClick={toggleLoginForm}></i>
                )}
            </div>
            {showLoginForm && <LoginForm onSuccessLogin={handleSuccessLogin} onClose={toggleLoginForm} />}
        </div>
    );
}

export default Navbar;
