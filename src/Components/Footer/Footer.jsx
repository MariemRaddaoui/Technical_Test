import React from 'react';
import { ReactComponent as FacebookIcon } from '../../Assets/Footer/footer_facebook.svg';
import { ReactComponent as TwitterIcon } from '../../Assets/Footer/footer_twitter.svg';
import { ReactComponent as InstagramIcon } from '../../Assets/Footer/footer_instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../Assets/Footer/footer_youtube.svg';
import { ReactComponent as LinkedinIcon } from '../../Assets/Footer/footer_linkedin.svg';
import { ReactComponent as Fintech } from "../../Assets/Footer/fintech-of-the-year.svg";
import { ReactComponent as Palmares } from "../../Assets/Footer/fintech100.svg";
import future50 from '../../Assets/Footer/future50.png';
import regionparis from '../../Assets/Footer/regionparis.png';
import translation from "../../utils/i18next"
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>{translation('footer.title')}</h2>
          <p className="footer-description">{translation('footer.description')}</p>
          <div className="footer-awards">
            <img src={future50} alt="Insurtech Insights" />
            <img src={regionparis} alt="Paris Region" />
            <Palmares />
            <Fintech />
          </div>
          <p className="footer-disclaimer" dangerouslySetInnerHTML={{ __html: translation('footer.disclaimer') }}></p>
          <p className="footer-disclaimer links" dangerouslySetInnerHTML={{ __html: translation('footer.links') }}></p>
        </div>
        <div className="footer-right">
          <h3>{translation('footer.linksHeader')}</h3>
          <ul>
            <li><a href="#">{translation('footer.help')}</a></li>
            <li><a href="#">{translation('footer.blog')}</a></li>
            <li><a href="#">{translation('footer.joinUs')}</a></li>
            <li><a href="#">{translation('footer.cookieManagement')}</a></li>
            <li><a href="#">{translation('footer.partner')}</a></li>
            <li><a href="#">{translation('footer.contactUs')}</a></li>
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
        <p>{translation('footer.rightsReserved')}</p>
      </div>
    </footer>
  );
}

export default Footer;
