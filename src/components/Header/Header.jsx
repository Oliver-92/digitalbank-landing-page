import React, { useState } from "react";
import "./Header.css";
import logo_dark from '../../assets/images/logo-dark.svg';
import icon_burger from '../../assets/images/icon-hamburger.svg';
import icon_close from '../../assets/images/icon-close.svg';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" },
  { name: "Careers", href: "#careers" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <a href="#home" className="header__logo" aria-label="Digitalbank Home">
            <img src={logo_dark} alt="Digitalbank" />
          </a>

          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__links">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#request-invite" className="header__cta">Request Invite</a>

          <button
            className="header__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <img
              src={menuOpen ? icon_close : icon_burger}
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <>
          <div className="header__overlay" onClick={closeMenu} aria-hidden="true"></div>
          <div className="header__mobile-menu">
            <nav aria-label="Mobile navigation">
              <ul>
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} onClick={closeMenu}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
