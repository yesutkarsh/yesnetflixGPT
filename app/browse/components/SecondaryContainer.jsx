import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { banner } from '@/utils/constant';
import style from './style.module.css';
import 'swiper/css'; // Import base styles of Swiper
import 'swiper/css/navigation'; // Import Swiper navigation styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination'; // Import Swiper pagination styles
import SwiperCore, { Navigation, Pagination } from 'swiper'; // Import Swiper core modules

SwiperCore.use([Navigation, Pagination]); // Initialize Swiper modules

const SecondaryContainer = () => {
  const [movies, setMovies] = useState([]);
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);

  useEffect(() => {
    if (nowPlayingMovies) {
      setMovies(nowPlayingMovies);
    }
  }, [nowPlayingMovies]);

  const swiperSettings = {
    slidesPerView: 7, // Default number of slides on larger screens
    spaceBetween: 5, // Default space between slides
    breakpoints: {
      1640: { slidesPerView: 9, spaceBetween: 30 },
      1436: { slidesPerView: 5, spaceBetween: 30 },
      969: { slidesPerView: 3, spaceBetween: 20 },
      573: { slidesPerView: 3, spaceBetween: 20 },
      320: { slidesPerView: 2, spaceBetween: 40 },
      315: { slidesPerView: 1, spaceBetween: 40 },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  return (
    <div className={style.sliderContainer}>
      <Swiper {...swiperSettings}>
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <div className={style.slide}>
              <img className={style.banner} src={`${banner}${movie.poster_path}`} alt={movie.original_title} />
              <span className={style.movieName}>{movie.original_title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SecondaryContainer;
