"use client"
import React, { useEffect } from 'react'
import MainContainer from './components/MainContainer'
import SecondaryContainer from './components/SecondaryContainer'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '@/utils/storeSlice/movieSlice'
import { options } from '@/utils/constant'

export default function BrowsePage() {


  const dispatch = useDispatch()
  const getNowPlayingMovies = async ()=>{
    const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const json = await data.json()
    let movies = json.results
    dispatch(addNowPlayingMovies(movies))
  }
  useEffect(()=>{getNowPlayingMovies()



  },[])

  return (
    



    <>
    <MainContainer/>
    <div className='-mt-[200px]'>
    <SecondaryContainer/>

    </div>
    
    
    </>
  )
}
