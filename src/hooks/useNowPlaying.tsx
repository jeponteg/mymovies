import { useEffect, useState } from 'react'
import { getNowPlaying } from '../api/getMovies'
import { Movie } from '../interfaces/moviesInterface'

export const useNowPlaying = () => {

    const [ nowPlayingMovie, setNowPlayingMovie] = useState<Movie[]>([])

    useEffect(() => {
        getNowPlaying().then((resp) => {
            resp ? setNowPlayingMovie(resp.data.results): null
        })
    },[])

    return {
        nowPlayingMovie
    }
}