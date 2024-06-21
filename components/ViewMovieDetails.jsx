import React, { useState } from 'react';
import style from "./movieDetail.module.css";
import { banner } from '@/utils/constant';

export default function ViewMovieDetails({ title, description, likes, ratings, poster, release, close }) {
  const [readMore, setReadMore] = useState(100);

  const handleToggleReadMore = () => {
    setReadMore(prevReadMore => (prevReadMore === 100 ? description.length+100 : 100));
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
    <div className={style.MovieDetailCard}>
      <div className={style.Nav}>
        <i onClick={handleClose} className="ri-close-large-fill"></i>
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
    </div>
  );
}
