import React from 'react'
import { SimpleSlider } from '../../../Swiper';
import './slider-section.scss';

const SliderSection = () => {
  return (
    <section className="slider-section">
      <div className="container">
        <SimpleSlider />
      </div>
    </section>
  )
};

export { SliderSection };