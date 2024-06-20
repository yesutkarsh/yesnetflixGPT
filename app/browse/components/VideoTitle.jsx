import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from "./style.module.css"
import ViewMovieDetails from '@/components/ViewMovieDetails'
export default function VideoTitle() {

    const [data, setData] = useState({})


      const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)

        // Toggeling The MovieDetail Card
       const [viewDetails, setViewDetails] = useState(false)


       const showMovieDetails =  ()=>{
        setViewDetails(true)
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
       }

       const CloseMovieDetailCard = ()=>{
        setViewDetails(false)
       }
      
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

{/* {console.log(data)} */}
    <div className='flex gap-7'>
      <button onClick={showMovieDetails} className={style.knowMore}>
    <i class="ri-bookmark-fill"></i>
       Know More
       </button>

       <button className={style.knowMore}>
       <i class="ri-thumb-up-fill"></i>
       {data[0]?.vote_count}
       </button>
{

viewDetails?

       <ViewMovieDetails
       title= {data[0]?.original_title}
       description={data[0]?.overview}
       likes={data[0]?.vote_count}
       ratings={data[0]?.vote_average}
       poster={data[0]?.backdrop_path}
       release={data[0]?.release_date}
       close={CloseMovieDetailCard}
       /> 
:null
      }
       </div>
    </div>
  )
}
