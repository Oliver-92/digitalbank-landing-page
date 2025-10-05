import React from 'react';
import './Footer.css';
import logoLight from '../../assets/images/logo-light.svg';
import iconFacebook from '../../assets/images/icon-facebook.svg';
import iconYoutube from '../../assets/images/icon-youtube.svg';
import iconTwitter from '../../assets/images/icon-twitter.svg';
import iconPinterest from '../../assets/images/icon-pinterest.svg';
import iconInstagram from '../../assets/images/icon-instagram.svg';

const socialLinks = [
  { id: 1, icon: iconFacebook, alt: 'Facebook', href: '#facebook' },
  { id: 2, icon: iconYoutube, alt: 'YouTube', href: '#youtube' },
  { id: 3, icon: iconTwitter, alt: 'Twitter', href: '#twitter' },
  { id: 4, icon: iconPinterest, alt: 'Pinterest', href: '#pinterest' },
  { id: 5, icon: iconInstagram, alt: 'Instagram', href: '#instagram' }
];

const footerLinks = {
  column1: [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' }
  ],
  column2: [
    { name: 'Careers', href: '#careers' },
    { name: 'Support', href: '#support' },
    { name: 'Privacy Policy', href: '#privacy' }
  ]
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" aria-label="Digitalbank Home">
            <img src={logoLight} alt="Digitalbank" />
          </a>
          <div className="footer__social">
            {socialLinks.map(social => (
              <a
                key={social.id}
                href={social.href}
                className="footer__social-link"
                aria-label={social.alt}
              >
                <img src={social.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__links">
            {footerLinks.column1.map(link => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <ul className="footer__links">
            {footerLinks.column2.map(link => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__cta">
          <a href="#request-invite" className="footer__button">Request Invite</a>
          <p className="footer__copyright">© Digitalbank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
