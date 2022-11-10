import React from 'react'
import './soc-list.scss';

import { FacebookIcon, TwitterIcon, InstagramIcon } from '../Icons';

const SocListMocks = [
  {
    Icon: FacebookIcon,
    url: '#'
  },
  {
    Icon: TwitterIcon,
    url: '#'
  },
  {
    Icon: InstagramIcon,
    url: '#'
  }
];

const SocList = () => {
  return (
    <ul className="soc-list">
      {
        SocListMocks.map(({ Icon, url }, index) => {
          return (
            <li className="soc-list__item" key={index}>
              <a href={url} className="soc-list__link"><Icon width={24} height={24} /></a>
            </li>
          )
        })
      }
    </ul>
  )
};

export { SocList };