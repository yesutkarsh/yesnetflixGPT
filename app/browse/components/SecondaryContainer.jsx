import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { banner } from '@/utils/constant'; 
import style from './style.module.css';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const SecondaryContainer = () => {
  const [movies, setMovies] = useState([]);
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);

  useEffect(() => {
    if (nowPlayingMovies) {
      setMovies(nowPlayingMovies);
    }
  }, [nowPlayingMovies]);
  const swiperSettings = {
    slidesPerView: 9, // Default number of slides on larger screens
    spaceBetween: 30, // Default space between slides
    breakpoints: {
      1640: {
        slidesPerView: 9, // Number of slides for screens >= 1640px
        spaceBetween: 30,
      },
      1436: {
        slidesPerView: 5, // Number of slides for screens >= 1436px
        spaceBetween: 30,
      },
      969: {
        slidesPerView: 3, // Number of slides for screens >= 969px
        spaceBetween: 20,
      },
      573: {
        slidesPerView: 3, // Number of slides for screens >= 573px
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2, // Number of slides for screens >= 320px
        spaceBetween: 40, // Adjust spacing for smaller screens
      },
      
      315: {
        slidesPerView: 1, // Number of slides for screens >= 320px
        spaceBetween: 40, // Adjust spacing for smaller screens
      },
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
            <Swiper
            {...swiperSettings}
          spaceBetween={5}
          slidesPerView={7}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
        {movies.map(movie => (
    
          <SwiperSlide className='flex items-center'>
          <div className={style.slide} key={movie.id}>
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
