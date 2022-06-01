import React, { createContext, useState, useEffect } from 'react'
import { getUpComming } from '../api/getUpcomming'
import { Movie } from '../interfaces/moviesInterface'

interface MovieState {
    upcomming:Movie[]
    page: number
    setPage: (newPage:number) =>Promise<void>
}
export const UpcommingMovieContext = createContext<MovieState>({
    upcomming:[],
    page:1,
    setPage: async () => {},
})

export const UpcommingMovieProvider = ({children}:any) => {

    const [ state, setState ] = useState(1)
    const [ listUpcommingMovies, setListUpcommingMovies ] = useState<Movie[]>([]);

    async function newPage() {
        setState(state + 1)
    }

    useEffect(() => {
        getUpComming(state).then((resp) => {
            resp ? setListUpcommingMovies(resp.data.results): null
        })
    },[state])

    return(
        <UpcommingMovieContext.Provider
            value={{
               page: state,
               setPage: page => newPage(),
               upcomming: listUpcommingMovies,
            }}
        >
            { children }
        </UpcommingMovieContext.Provider>
    )
   
}

export default UpcommingMovieProvider