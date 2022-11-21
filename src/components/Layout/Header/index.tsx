import React, { useState } from "react"
import "./header.scss";
import { MenuIcon } from "../../Icons";

const HeaderNavMocks = ['About Us', 'Service', 'Menu', 'Contact'];

interface BurgerIconProps {
  onClick: () => void
};

const BurgerIcon = ({ onClick }: BurgerIconProps) => {
  return (
    <button type="button" className="round-button hidden-md" onClick={onClick}>
      <MenuIcon width={20} height={20} />
    </button>
  )
}

const Header = () => {

  const [active, setActive] = useState(false);

  const onMobileMenuClickHandler = () => setActive((active) => !active);

  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__inner">
          <div className="main-nav-wrapper">
            <nav className={active ? 'main-nav active' : 'main-nav'}>
              <ul className="main-nav__list">
                {
                  HeaderNavMocks.map((link, index) => {
                    return <li className="main-nav__item" key={index}><a href="#" className="main-nav__link">{link}</a></li>
                  })
                }
              </ul>
            </nav>
            <BurgerIcon onClick={onMobileMenuClickHandler} />
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

export { Header };