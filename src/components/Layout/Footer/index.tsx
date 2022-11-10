import React from 'react'
import './footer.scss';

import { SocList } from '../../SocList';

const FooterNavMocks = [
  {
    title: 'Navigation',
    links: ['About us', 'Service', 'Menu']
  },
  {
    title: 'Resources',
    links: ['Reviews', 'Blog', 'Update News']
  }
];

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
            {
              FooterNavMocks.map(({ title, links }, index) => {
                return (
                  <div className="footer__item" key={index}>
                    <div className="footer__title">{title}</div>
                    <ul className="footer__nav-list">
                      {
                        links.map((link, index) => {
                          return <li className="footer__nav-item" key={`link_${index}`}><a href="#" className="footer__nav-link">{link}</a></li>
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }

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