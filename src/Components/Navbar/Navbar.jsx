import { React, useState } from 'react';
import { ReactComponent as Logo } from "../../Assets/logo-acheel-blue.svg";
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const submenuItems = [
        { title: 'Assurance Habitation', description: 'Locataire ou propriétaire' },
        { title: 'Assurance Auto', description: 'Pour vos véhicules et ses conducteurs' },
        { title: 'Assurance PNO', description: 'Propriétaire non occupant' },
        { title: 'Assurance Santé', description: 'Pour vous, votre conjoint et toute la famille' },
        { title: 'Assurance Animaux', description: 'Pour votre chien ou votre chat' },
        { title: 'Assurance Emprunteur', description: 'Changez et économisez jusqu"à 20 000$' },
        { title: 'Alarme & Télésurveillance', description: 'Pour protéger votre foyer des intrusions' },
    ];

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

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
                    <li><a className="clicked-link">Accueil</a></li>
                    <li 
                        className="dropdown"
                        onMouseEnter={() => setDropdownVisible(true)}
                        onMouseLeave={() => setDropdownVisible(false)}
                    >
                        <a className="not-clicked-link" style={{ color: isDropdownVisible ? 'rgb(30 150 252 )' : 'inherit' }}>Produits</a>
                        {isDropdownVisible && (
                            <div 
                                className="dropdown-content"
                                onMouseEnter={() => setDropdownVisible(true)}
                                onMouseLeave={() => setDropdownVisible(false)}
                            >
                                {submenuItems.map((item, index) => (
                                    <button key={index}>
                                        <div className="dropdown-title">{item.title}</div>
                                        <div className="dropdown-description">{item.description}</div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </li>
                    <li><a className="not-clicked-link">Blog</a></li>
                    <li><a className="not-clicked-link">Aide</a></li>
                </ul>
                <div className="navbar-button">
                    <button>MON COMPTE</button>
                </div>
            </nav>

            <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
                <div className=" sidebar-header close-icon" onClick={toggleSidebar}>
                    <FaTimes />
                </div>
                <ul className="sidebar-links">
                    <li><a className="clicked-link">| Accueil</a></li>
                    <li className="dropdown">
                        <a className="not-clicked-link">Produits</a>
                        <div className="dropdown-content">
                            {submenuItems.map((item, index) => (
                                <button key={index}>
                                    <div className="dropdown-title">{item.title}</div>
                                </button>
                            ))}
                        </div>
                    </li>
                    <li><a className="not-clicked-link">Blog</a></li>
                    <li><a className="not-clicked-link">Aide</a></li>
                </ul>
                <div className="sidebar-footer">
                    <p>Copyright © 2024 Acheel. Tous droits réservés.</p>
                </div>
            </div>
        </>
    );
}

export default Navbar;
