import { Navigation, A11y, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './simple-slider.scss';

const SlidesMocks = [
  {
    title: 'What Our Customers About Us saying',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis',
    authorName: 'Ahmed Hridoy',
    imgSrc: '/img/media/content-img-6.png'
  },
  {
    title: 'What Our Customers About Us saying',
    text: 'Lorem',
    authorName: 'Ahmed Hridoy',
    imgSrc: 'https://via.placeholder.com/700x400'
  },
  {
    title: '123',
    text: 'Lorem3',
    authorName: 'Tuts',
    imgSrc: 'https://via.placeholder.com/500x400'
  },
];


const SimpleSlider = () => {
  return (
    <Swiper
      modules={[Navigation, A11y, Lazy]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      lazy={true}
      autoHeight={true}
    >
      {
        SlidesMocks.map(({title, text, authorName, imgSrc}, index) => {
          return <SwiperSlide key={index}>
            <div className="slide__item">
              <div className="slide__text">
                <div className="slide__title title-h1">{title}</div>
                <article className="review">
                  <div className="review__text">{text}</div>
                  <div className="review__author">{authorName}</div>
                  <div className="review__rating">
                    {Array(5).fill('').map((_, index) => <span key={index} />)}
                  </div>
                </article>
              </div>
              <div className="slide__img">
                <div className="slide__img-box">
                  <img className="swiper-lazy" data-src={imgSrc} width="446" height="444" alt="author" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        })
      }

    </Swiper>
  )
};

export {SimpleSlider};