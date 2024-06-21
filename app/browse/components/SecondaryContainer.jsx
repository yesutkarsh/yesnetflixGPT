import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// MovieDeatil Component
import ViewMovieDetails from '@/components/ViewMovieDetails';

// style css for styling
import style from './style.module.css';

// Swiper JS 
import { banner, swiperSettings } from '@/utils/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import base styles of Swiper

const SecondaryContainer = () => {
  const [movies, setMovies] = useState([]);
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);


  // Toggeling The MovieDetail Card
  const [viewDetails, setViewDetails] = useState(false)
  // Storing Data To show in MovieDetail Card
  const [movieData, setMovieData]= useState(null)

  const CloseMovieDetailCard = ()=>{
    setViewDetails(false)
  }

  // Toggeling MovieDeatil Card & Data of Clicked Movie
  const viewMovieDetails = (movie)=>{
    setViewDetails(true)
    setMovieData(movie)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }


  useEffect(() => {
    if (nowPlayingMovies) {
      setMovies(nowPlayingMovies);
    }
  }, [nowPlayingMovies]);



  return (
    <>
    <div className={style.sliderContainer}>
      <Swiper {...swiperSettings}>
        {movies.map(movie => (
          <SwiperSlide onClick={()=>{viewMovieDetails(movie)}} key={movie.id}>
            <div className={style.slide}>
              <img className={style.banner} src={`${banner}${movie.poster_path}`} alt={movie.original_title} />
              <span className={style.movieName}>{movie.original_title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {viewDetails? <ViewMovieDetails
      title= {movieData?.original_title}
      description={movieData?.overview}
      likes={movieData?.vote_count}
      ratings={movieData?.vote_average}
      poster={movieData?.backdrop_path}
      release={movieData?.release_date}
      close={CloseMovieDetailCard}
      /> : null}
    </div>
        </>
  );
};

export default SecondaryContainer;
