import React from 'react'
import { AdvantagesList } from '../../../AdvantagesList';

import './best-section.scss';

export const BestSection = () => {
  return (
    <section className="best-section">
      <div className="container">
        <div className="best-section__inner">
          <div className="best-section__text">
            <h2 className="title-h1">Why We Are The Best?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
            <AdvantagesList />

            <div className="best-section__arrow-down">
              <img src="/img/icon-svg/arrow-down.svg" alt="arrow down" loading="lazy" />
            </div>
          </div>
          <div className="best-section__img">
            <div className="img-group">
              <img src="/img/icon-svg/round.svg" width="420" height="420" alt="round" loading="lazy" className="img-group__round" />
              <img src="/img/icon-svg/cross-1.svg" width="38" height="420" alt="cross-1" loading="lazy" className="img-group__cross-first" />
              <img src="/img/icon-svg/cross-1.svg" width="38" height="420" alt="cross-1" loading="lazy" className="img-group__cross-second" />
              <img src="/img/icon-svg/line.svg" width="600" height="600" alt="line" loading="lazy" className="img-group__line" />
              <img src="/img/media/content-img-7.png" width="371" height="531411" alt="best" loading="lazy" className="img-group__content-img" />
            </div>
          </div>
          <img src="/img/media/decor-img-2.png" width="944" height="531" className="decor" alt="decor" loading="lazy" />
        </div>
      </div>
    </section>
  )
};