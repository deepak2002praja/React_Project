import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="Navbar">
            <div className="logo">🕸️Firstweb</div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/" onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setMenuOpen(false);
                    }}>Home</Link>
                </li>
                <li>
                    <Link to="/AboutPage" onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setMenuOpen(false);
                    }}>About</Link>
                </li>
                <li>
                    <Link to="/Services" onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setMenuOpen(false);
                    }}>Services</Link>
                </li>
                <li>
                    <Link to="/Careers" onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setMenuOpen(false);
                    }}>Careers</Link>
                </li>
                <li>
                    <Link to="/Contact" onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setMenuOpen(false);
                    }}>Contact</Link>
                </li>
                <li>
                    <Link to="/signup" onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setMenuOpen(false);
                    }}>signup/Login</Link>
                </li>
                <li>
                    <Link to="/admin" onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setMenuOpen(false);
                    }}>Admin</Link>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;
