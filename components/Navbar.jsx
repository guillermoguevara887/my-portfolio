// src/components/Navbar.jsx

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)

    }
    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-logo">Guillermo Guevara</div>

            <div className='hamburger' onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'}
            </div>


            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>

        </nav>
    );
};

export default Navbar;