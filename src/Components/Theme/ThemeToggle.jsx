import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import './ThemeToggle.css';
import translation from '../../utils/i18next';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <span className={`toggle-text ${theme === 'light' ? 'active' : ''}`}>{translation('light')}</span>
      <div className={`toggle-switch ${theme === 'light' ? 'light' : 'dark'}`}>
        <div className="toggle-ball"></div>
      </div>
      <span className={`toggle-text ${theme === 'dark' ? 'active' : ''}`}>{translation('dark')}</span>
    </div>
  );
};

export default ThemeToggle;
