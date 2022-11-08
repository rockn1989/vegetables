import React, { useState } from "react"
import "./header.scss";
import { MenuIcon } from "../Icons";

interface BurgerIconProps {
  onMobileClick: React.MouseEventHandler<HTMLButtonElement>
};

const BurgerIcon = ({ onMobileClick }: BurgerIconProps) => {
  return (
    <button type="button" className="round-button hidden-md" onClick={onMobileClick}>
      <MenuIcon width={20} height={20} />
    </button>
  )
}

export const Header = () => {

  const [active, setActive] = useState(false);

  const onMobileMenuClickHandler = () => setActive((active) => !active);

  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__inner">
          <div className="main-nav-wrapper">
            <nav className={active ? 'main-nav active' : 'main-nav'}>
              <ul className="main-nav__list">
                <li className="main-nav__item"><a href="#" className="main-nav__link">About Us</a></li>
                <li className="main-nav__item"><a href="#" className="main-nav__link">Service</a></li>
                <li className="main-nav__item"><a href="#" className="main-nav__link">Menu</a></li>
                <li className="main-nav__item"><a href="#" className="main-nav__link">Contact</a></li>
              </ul>
            </nav>
            <BurgerIcon onMobileClick={onMobileMenuClickHandler} />
          </div>

          <div className="logo">
            <a href="/" className="logo">
              <img src="/img/logo.svg" width="56" height="56" alt="Organic Fruit & Vegetables" />
            </a>
          </div>

          <div className="toolbar">
            <div className="toolbar__buttons">
              <a href="#" className="round-button">
                <img src="/img/icon-svg/search.svg" width="18" height="18" alt="search" />
              </a>

              <a href="#" className="round-button" role="button">
                <img src="/img/icon-svg/buy.svg" width="18" height="18" alt="basket" />
                <i className="basket__status"></i>
              </a>
            </div>
            <a href="#" className="button visible-md" role="button">Register Now</a>
          </div>
        </div>
      </div>
    </header>
  )
};