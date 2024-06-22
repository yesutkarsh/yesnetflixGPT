import { options } from '@/utils/constant'
import { addMovieTrailer } from '@/utils/storeSlice/movieSlice'
import React, { useEffect, useState } from 'react'
import style from "./style.module.css"
import { useDispatch, useSelector } from 'react-redux'
export default function VideoBackground() {
    const dispatch = useDispatch()
    const trailerKey = useSelector(store => store.movies?.movieTrailer)
    // console.log(trailerKey)
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)
    const [sound, setSound] = useState(true)

    useEffect(() => {
        if (!nowPlayingMovies) return

        const movieId = nowPlayingMovies[0]
        const { id } = movieId

        const fetchMovieVideoId = async () => {
            const moviId = nowPlayingMovies[0].id
            if (!moviId) return
            try {
                const data = await fetch("https://api.themoviedb.org/3/movie/" + moviId + "/videos?language=en-US", options)
                const json = await data.json()
                const trailerKey = json.results.filter((video) => video.type == "Trailer")[1].key
                if (trailerKey) {
                    dispatch(addMovieTrailer(trailerKey))
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchMovieVideoId()

    }, [nowPlayingMovies, dispatch])

    return (
        <>
                <iframe className='w-screen  h-screen absolute z-[-99] -mt-20'
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
        </>
    )
}
