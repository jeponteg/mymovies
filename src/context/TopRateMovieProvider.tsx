import React, { createContext, useState, useEffect } from 'react'
import { getTopRate } from "../api/getMovies"
import { Movie } from '../interfaces/moviesInterface'

interface MovieState {
    topRate:Movie[]
    page: number
    setPage: (newPage:number) =>Promise<void>
}
export const TopRateMovieContext = createContext<MovieState>({
    topRate:[],
    page:1,
    setPage: async () => {},
})

export const TopRateMovieProvider = ({children}:any) => {

    const [ state, setState ] = useState(1)
    const [ listUpcommingMovies, setListUpcommingMovies ] = useState<Movie[]>([]);

    async function newPage() {
        setState(state + 1)
    }

    useEffect(() => {
        getTopRate(state).then((resp) => {
            resp ? setListUpcommingMovies(resp.data.results): null
        })
    },[state])

    return(
        <TopRateMovieContext.Provider
            value={{
               page: state,
               setPage: page => newPage(),
               topRate: listUpcommingMovies,
            }}
        >
            { children }
        </TopRateMovieContext.Provider>
    )
   
}

export default TopRateMovieProvider