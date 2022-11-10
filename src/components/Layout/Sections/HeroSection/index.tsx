import React from 'react'
import { ProgressList } from '../../../ProgressList';
import { ArrowRight } from '../../../Icons';

import './hero-section.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <img src="/img/media/decor-img-1.png" className="decor" width="618" height="418" alt="decor" loading="lazy" />
        <div className="hero-section__header text-center">
          <h1 className="">Organic Fruit & Vegetables</h1>
          <div className="hero-section__text">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
          </div>
          <a href="#" className="arrow-link text-center">Order Now
            <span className="arrow-link__icon"><ArrowRight width={30} height={18} /></span>
          </a>
        </div>
        <div className="hero-section__body">
          <div className="hero-section__img">
            <img src="/img/media/content-img-1.png" width="862" height="465" alt="vegetables" loading="lazy" />
          </div>
          <ProgressList />
        </div>
      </div>
    </section >
  )
};

export { HeroSection };