import React from 'react'
import './download-section.scss';

export const DownloadSection = () => {
  return (
    <section className="download-section">
      <div className="container">
        <div className="download-section__inner">
          <div className="download-section__desc">
            <a href="#" className="button button--light" download >Download App</a>
            <h2 className="title-h1">Simple Way To Order Your Organic Fruit </h2>
            <p className="download-section__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...</p>
          </div>
          <div className="download-section__img">
            <a href="#" download>
              <img src="/img/media/phone-1.png" width="222" height="482" alt="phone" loading="lazy" />
              <img src="/img/media/phone-2.png" width="222" height="482" alt="phone" loading="lazy" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
};