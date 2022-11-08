import React from 'react'

import './progress-list.scss';

const ProgressListMocks = [
  {
    icon: '/img/icon-svg/user.svg',
    text: '30K',
    label: 'User Order',
    width: 32,
    height: 32,
  },
  {
    icon: '/img/icon-svg/star.svg',
    text: '20K',
    label: 'Reviews(4.8)',
    width: 32,
    height: 30,
  },
  {
    icon: '/img/icon-svg/harvest.svg',
    text: '300',
    label: 'Items',
    width: 29,
    height: 29,
  }
];

export const ProgressList = () => {
  return (
    <ul className="progress-list">
      {ProgressListMocks.map(({ icon, text, label, width, height }, index) => {
        return (
          <li className="progress-list__item" key={index}>
            <div className="progress-list__icon">
              <img src={icon} width={width} height={height} alt={label} />
            </div>
            <div className="progress-list__text">
              <div className="progress-list__count">{text}</div>
              <div className="progress-list__label">{label}</div>
            </div>
          </li>
        )
      })}
    </ul>
  )
};