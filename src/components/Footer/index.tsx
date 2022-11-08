import React from 'react'
import './footer.scss';

import { SocList } from '../SocList';

export const Footer = () => {
  return (
    <footer className='page-footer'>
      <div className="container">
        <div className="footer__inner">
          <div className="footer__info">
            <div className="logo">
              <a href="/" className="logo">
                <img src="/img/logo.svg" width="56" height="56" alt="Organic Fruit & Vegetables" />
              </a>
            </div>
            <div className="footer__text">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...</p>
            </div>
          </div>

          <div className='footer__nav'>
            <div className="footer__item">
              <div className="footer__title">Navigation</div>
              <ul className="footer__nav-list">
                <li className="footer__nav-item"><a href="#" className="footer__nav-link">About us</a></li>
                <li className="footer__nav-item"><a href="#" className="footer__nav-link">Service</a></li>
                <li className="footer__nav-item"><a href="#" className="footer__nav-link">Menu</a></li>
              </ul>
            </div>

            <div className="footer__item">
              <div className="footer__title">Resources</div>
              <ul className="footer__nav-list">
                <li className="footer__nav-item"><a href="#" className="footer__nav-link">Reviews</a></li>
                <li className="footer__nav-item"><a href="#" className="footer__nav-link">Blog</a></li>
                <li className="footer__nav-item"><a href="#" className="footer__nav-link">Update News</a></li>
              </ul>
            </div>

            <div className="footer__item">
              <div className="footer__title">Contact Us</div>
              <div className="footer__contacts">
                <a href="mailto:oyasim@email.com">Email: oyasim@email.com</a>
              </div>
              <SocList />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}