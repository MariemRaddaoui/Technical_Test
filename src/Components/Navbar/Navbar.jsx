import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Logo } from "../../Assets/logo-acheel-blue.svg";
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from "react-router-dom";
import Flag from 'react-world-flags';
import './Navbar.css';
import translation from "../../utils/i18next";

function Navbar() {
    const changeLanguage = (value) => {
        localStorage.setItem('lang', value);
        window.location.reload();
    };

    const getFlag = () => {
        switch (localStorage.getItem("lang")) {
            case 'fr':
                return 'FR';
            case 'en':
                return 'GB';
            default:
                return 'FR';
        }
    };

    const [isLangDropdownVisible, setLangDropdownVisible] = useState(false);
    const [isProductsDropdownVisible, setProductsDropdownVisible] = useState(false);
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const langDropdownRef = useRef(null);
    const productsDropdownRef = useRef(null);

    const submenuItems = [
        { title: translation('productItems.housingInsurance'), description: translation('productDescriptions.housingInsurance') },
        { title: translation('productItems.carInsurance'), description: translation('productDescriptions.carInsurance') },
        { title: translation('productItems.pnoInsurance'), description: translation('productDescriptions.pnoInsurance') },
        { title: translation('productItems.healthInsurance'), description: translation('productDescriptions.healthInsurance') },
        { title: translation('productItems.petInsurance'), description: translation('productDescriptions.petInsurance') },
        { title: translation('productItems.loanInsurance'), description: translation('productDescriptions.loanInsurance') },
        { title: translation('productItems.alarmMonitoring'), description: translation('productDescriptions.alarmMonitoring') },
    ];

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const handleLangDropdownToggle = () => {
        setLangDropdownVisible(!isLangDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
            setLangDropdownVisible(false);
        }
        if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
            setProductsDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-menu-icon" onClick={toggleSidebar}>
                    <FaBars />
                </div>
                <div className="navbar-logo">
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>
                
                <ul className="navbar-links">
                    <li><a className="clicked-link">{translation('home')}</a></li>
                    <li 
                        className="dropdown"
                        onMouseEnter={() => setProductsDropdownVisible(true)}
                        onMouseLeave={() => setProductsDropdownVisible(false)}
                        ref={productsDropdownRef}
                    >
                        <a className="not-clicked-link" style={{ color: isProductsDropdownVisible ? 'rgb(30, 150, 252)' : 'inherit' }}>{translation('products')}</a>
                        {isProductsDropdownVisible && (
                            <div className="dropdown-content">
                                {submenuItems.map((item, index) => (
                                    <button key={index}>
                                        <div className="dropdown-title">{item.title}</div>
                                        <div className="dropdown-description">{item.description}</div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </li>
                    <li><a className="not-clicked-link">{translation('blog')}</a></li>
                    <li><a className="not-clicked-link">{translation('help')}</a></li>
                </ul>
                
                <div className='nav-right'>
                    <div ref={langDropdownRef}>
                        <button className='dropdown-toggle' onClick={handleLangDropdownToggle}>
                            <Flag code={getFlag()} height="15" />
                        </button>
                        {isLangDropdownVisible && (
                            <div className='dropdown-menu'>
                                <div className='dropdown-item' onClick={() => changeLanguage('fr')}>
                                    <Flag code={'FR'} height="15" /> &nbsp; &nbsp; Français
                                </div>
                                <div className='dropdown-item' onClick={() => changeLanguage('en')}>
                                    <Flag code={'GB'} height="15" /> &nbsp; &nbsp; English
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="navbar-button">
                        <button>{translation('account')}</button>
                    </div>
                </div>
            </nav>

            <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
                <div className="sidebar-header close-icon" onClick={toggleSidebar}>
                    <FaTimes />
                </div>
                <ul className="sidebar-links">
                    <li><a className="clicked-link">| {translation('home')}</a></li>
                    <li className="dropdown">
                        <a className="not-clicked-link">{translation('products')}</a>
                        <div className="dropdown-content">
                            {submenuItems.map((item, index) => (
                                <button key={index}>
                                    <div className="dropdown-title">{item.title}</div>
                                </button>
                            ))}
                        </div>
                    </li>
                    <li><a className="not-clicked-link">{translation('blog')}</a></li>
                    <li><a className="not-clicked-link">{translation('help')}</a></li>
                </ul>
                <div className="sidebar-footer">
                    <p>{translation('copyrights')}</p>
                </div>
            </div>
        </>
    );
}

export default Navbar;
