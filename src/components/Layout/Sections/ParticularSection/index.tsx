import React from 'react';
import { ArrowRight } from '../../../Icons';
import './particular-section.scss';

export const ParticularSection = () => {
  return (
    <section className="particular-section">
      <div className="container">
        <div className="particular-section__inner">
          <div className="particular-section__preview-img">
            <div className="preview-img-box">
              <div className="preview-img-box__item">
                <img src="/img/media/content-img-2.png" width="250" height="184" alt="content img 2" loading="lazy" />
              </div>
              <div className="preview-img-box__item">
                <img src="/img/media/content-img-3.png" width="200" height="133" alt="content img 3" loading="lazy" />
              </div>
              <div className="preview-img-box__item">
                <img src="/img/media/content-img-4.png" width="184" height="157" alt="content img 4" loading="lazy" />
              </div>
              <div className="preview-img-box__item">
                <img src="/img/media/content-img-5.png" width="269" height="213" alt="content img 5" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="particular-section__text">
            <h2 className="title-h1">Explor Our Special Items</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...</p>
            <a href="#" className="arrow-link text-center">Explor Now
              <span className="arrow-link__icon"><ArrowRight width={30} height={18} /></span>
            </a>
          </div>
          <img src="/img/media/decor-img-1.png" className="decor" width="413" height="397" alt="decor" loading="lazy" />
        </div>
      </div>
    </section>
  )
};