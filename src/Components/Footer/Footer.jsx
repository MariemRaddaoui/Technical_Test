import React from 'react';
import { ReactComponent as FacebookIcon } from '../../Assets/Footer/footer_facebook.svg';
import { ReactComponent as TwitterIcon } from '../../Assets/Footer/footer_twitter.svg';
import { ReactComponent as InstagramIcon } from '../../Assets/Footer/footer_instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../Assets/Footer/footer_youtube.svg';
import { ReactComponent as LinkedinIcon } from '../../Assets/Footer/footer_linkedin.svg';
import {ReactComponent as Fintech} from "../../Assets/Footer/fintech-of-the-year.svg";
import {ReactComponent as Palmares} from "../../Assets/Footer/fintech100.svg"
import future50 from '../../Assets/Footer/future50.png';
import regionparis from '../../Assets/Footer/regionparis.png';
import './Footer.css'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Acheel</h2>
          <p className="footer-description">Enfin une assurance qui répond vraiment à vos besoins ! On simplifie, on innove... rien que pour vous.</p>
          <div className="footer-awards">
          <img src={future50} alt="Insurtech Insights" />
            <img src={regionparis} alt="Paris Region" />
            <Palmares/>
           <Fintech/>
          </div>
          <p className="footer-disclaimer">En tant que compagnie d’assurance agréée par l’Autorité de Contrôle Prudentiel et de Résolution (ACPR), et dans une démarche de transparence, nous rendons public notre <a href="#">Rapport sur la Solvabilité et la Situation Financière (Exercice 2023)</a></p>
          <p className='footer-disclaimer links'><a>Politique de confidentialité </a>| <a>Conditions générales </a>| <a>Mentions légales</a></p>
        </div>
        <div className="footer-right">
          <h3>LIENS</h3>
          <ul>
            <li><a href="#">Aide</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Nous rejoindre</a></li>
            <li><a href="#">Gestion des cookies</a></li>
            <li><a href="#">Devenir partenaire</a></li>
            <li><a href="#">Contactez-nous</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-socials">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YoutubeIcon />
          <LinkedinIcon />
        </div>
        <p>©2024 All right reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
