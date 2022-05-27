import React, { createContext, useState, useEffect } from "react";
import { getPopular } from "../api/getPopular"
import { Movie } from '../interfaces/moviesInterface'

interface MovieState {
    popular:Movie[]
    page: number
    setPage: (newPage:number) =>Promise<void>
}

export const MovieContext = createContext<MovieState>({
    popular:[],
    page:1,
    setPage: async () => {},
} )

export const MoviesProvider = ({children}:any) => {

    const [ state, setState ] = useState(1)
    const [ listMovies, setlistMovies ] = useState<Movie[]>([]);

    async function newPage() {
        setState(state + 1)
    }

    useEffect(() => {

        getPopular(1).then((resp) => {
            resp ? setlistMovies(resp.data.results): null
        })

    },[])

    return(
        <MovieContext.Provider
            value={{
               page: state,
               setPage: page => newPage(),
               popular: listMovies,
            }}
        >
            { children }
        </MovieContext.Provider>
    )
   
}

export default MoviesProvider