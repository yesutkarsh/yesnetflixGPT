import React, { useEffect, useState } from 'react';
import style from "./movieDetail.module.css";
import { banner } from '@/utils/constant';
import { motion } from 'framer-motion';
import Loader from '@/loader/Loader';

export default function ViewMovieDetails({ title, description, likes, ratings, poster, release, close }) {
  const [readMore, setReadMore] = useState(100);
  const [animate, setAnimate ] = useState(true)

  const handleToggleReadMore = () => {
    setReadMore(prevReadMore => (prevReadMore === 100 ? description.length + 100 : 100));
  };

  const handleClose = () => {
    close();
  };

  const escapeHtml = (text) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  };

  const escapedDescription = escapeHtml(description);
  return (
    <>

    <motion.div 
      initial={{ opacity: 0, top: "70%" }} 
      animate={{ opacity: 1, top: "50%" }} 
      exit={{ opacity: 0, top: "70%" }} 
      className={style.MovieDetailCard}
    >
      <div onClick={handleClose} className={style.Nav}>
        <i  className="ri-close-large-fill"></i>
      </div>
      <div className={style.banner}>
        <img src={`${banner}${poster}`} alt={`${title} poster`} />
      </div>
      <div className={style.Title}>
        {title}
      </div>
      <div className={style.minorDetails}>
        <div>Release Date: "{release}"</div>
        <div>Language: en</div>
        <div><i className="ri-thumb-up-fill"></i> {likes}</div>
        <div className='text-yellow-300'><i className="ri-star-half-s-line"></i> {ratings}</div>
      </div>
      <div className={style.Description}>
        {escapedDescription.slice(0, readMore)}
        <br />
        <span onClick={handleToggleReadMore} className='text-blue-500 cursor-pointer'>
          {readMore === 100 ? 'Read More' : 'Read Less'}
        </span>
      </div>
      <Loader/>

    </motion.div>
    </>


  );
}
