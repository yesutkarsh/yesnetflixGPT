import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from "./style.module.css"
export default function VideoTitle() {

    const [data, setData] = useState({})


      const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)

      
useEffect(()=>{
  if(nowPlayingMovies){
    setData(nowPlayingMovies)
  }


},[nowPlayingMovies])

      


      
    






  return (
    <div className={style.Movietitle}>
    <div className={style.title}>
{data[0]?.original_title}
    </div>
    <div className={style.description}>
      {data[0]?.overview}
    </div>

{console.log(data)}
    <div className='flex gap-7'>
      <button className={style.knowMore}>
    <i class="ri-bookmark-fill"></i>
       Know More
       </button>

       <button className={style.knowMore}>
       <i class="ri-thumb-up-fill"></i>
       {data[0]?.vote_count}
       </button>


       </div>
    </div>
  )
}
