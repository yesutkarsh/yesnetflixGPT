import React, { useState } from 'react'
import style from "./movieDetail.module.css"
import { banner } from '@/utils/constant'
export default function ViewMovieDetails({title,description,likes,ratings,poster,release, close}) {


  const [readMore , setReadMore ] = useState(100)
  return (

    <div className={style.MovieDetailCard}>
      <div className={style.Nav}>
      <i onClick={()=>{
        close()
      }} class="ri-close-large-fill"></i>
      </div>
        <div className={style.banner}>
            <img src={banner+poster} alt="" />
        </div>
        <div className={style.Title}>
          {title}
        </div>

        <div className={style.minorDetails}>
        <div> Release Date "{release}" </div>
        <div>en</div>
        <div><i class="ri-thumb-up-fill"></i> {likes}</div>
        <div className='text-yellow-300'><i class="ri-star-half-s-line"></i> {ratings}</div>

        </div>
        <div className={style.Description}>
          
        {description.slice(0,readMore)}
        <br/>

        { readMore == 100?

          <span onClick={()=>{setReadMore(description.length)}} className='text-blue-500 cursor-pointer'>
        Read More
        </span>
        :   <span onClick={()=>{setReadMore(100)}} className='text-blue-500 cursor-pointer '>
        Read Less
        </span>
          
        }

        </div>
        
        </div>
  )
}
