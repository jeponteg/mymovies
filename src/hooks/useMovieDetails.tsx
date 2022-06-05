import { useEffect, useState } from 'react'
import { getMovieDetails } from '../api/getMovies'
import { Details } from '../interfaces/movieDetails'

export const useMovieDetails = () => {

    const [ movieDetails, setMovieDetails] = useState<Details>()
    
    useEffect(() => {
        getMovieDetails().then((resp) => {
            resp ? setMovieDetails(resp.data): null
        })
    },[])
    
    return {
        movieDetails
    }
}