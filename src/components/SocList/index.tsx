import React from 'react'
import './soc-list.scss';

import { FacebookIcon, TwitterIcon, InstagramIcon } from '../Icons';

export const SocList = () => {
  return (
    <ul className="soc-list">
      <li className="soc-list__item">
        <a href="#" className="soc-list__link"><FacebookIcon width={24} height={24} /></a>
      </li>
      <li className="soc-list__item">
        <a href="#" className="soc-list__link"><TwitterIcon width={24} height={24} /></a>
      </li>
      <li className="soc-list__item">
        <a href="#" className="soc-list__link"><InstagramIcon width={24} height={24} /></a>
      </li>
    </ul>
  )
};