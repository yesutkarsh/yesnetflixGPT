import React, { useEffect, useState } from 'react';
import { options } from '@/utils/constant';
import style from "./MoviCard.module.css"
export default function MovieCard({ id, title }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        if(id){

            const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/images', options);
            const response = await data.json();
            console.log(response)
            if (response && response.posters && response.posters.length > 0) {
                setImage('https://image.tmdb.org/t/p/original/' + response.posters[0].file_path);
            }
        }
        } catch (error) {
            console.error('Error fetching image:', error);
      }
    };

    getImage();
  }, [id]);

  return (
    <div className={style.movieCard}>
        

      {image ?  <img src={image} alt={`Movie poster for ${id}`} /> : null}
       
    </div>
  );
}
