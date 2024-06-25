"use client"
import React, { useRef, useState } from "react";
import style from "./searchBar.module.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { options } from "@/utils/constant";
import MovieCard from "./components/MovieCard";
import ViewMovieDetails from "../ViewMovieDetails";
import Loader from "@/loader/Loader";
export default function SearchBar() {

  {console.log(process.env.apikey)}
  
  const [recomendedMovies, setRecomendedMovies] = useState([{original_title:"Hello"}])
  const [viewDeatils, setDetails] = useState(false)
  const [warning, setWarning] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  // Query form user
  const searchQuery = useRef(null)

  // Defining Gemini Model
  const genAI = new GoogleGenerativeAI(
    process.env.NEXT_PUBLIC_GEMINI_KEY || process.env.apikey
  )  
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// TMDB Calll
const searchMovie = async(movie)=>{
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options)
  const json = await data.json()
  return json.results;

}

  // Gemini Call
  const handleSubmit = async()=>{
    setIsLoading(true)
    const prompt = searchQuery.current.value+"only give name of 2 Movies, comma seperated like the example ahed. Example: 1920, 1920 london, bhootiya ghar"
    try{
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const movieArray = text.split(",")
      
      if(movieArray[1]){
        console.log(movieArray[1])
        setWarning(movieArray[0]+movieArray[1]+movieArray[2])

      }


      const promiseArray = movieArray.map(movie=>searchMovie(movie))
      const tmdbResult = await Promise.all(promiseArray)
      setRecomendedMovies(tmdbResult)
      setIsLoading(false)
    }catch(error){
console.log(error)
    }
  }






// const showDetailes = ()=>{
//   setDetails(true)
// }




  return (
    <div className={style.SearchCopmonent}>
      <div className={style.Search}>
        <form onSubmit={(e)=>e.preventDefault()} action="">
          <input ref={searchQuery} type="text" name="" placeholder="Kuch Mazedar Horror Movies" />
          <button onClick={handleSubmit}>Go</button>
        </form>
      </div>
      <div className={style.Movies}>


      {recomendedMovies.map((movie)=>{return <div> <MovieCard id={movie[0]?.id}
      title={movie[0]?.original_title}
      
      
      /> </div>
        })
        }

{viewDeatils? <ViewMovieDetails title={"title"}/>:null}
<h1>{warning}</h1>
      </div>
      {isLoading? <Loader/>:null}
    </div>
  );
}
