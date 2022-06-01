import axiosInstances from './config'
import { MovieDBNowPlaying  } from '../interfaces/moviesInterface'

const API_KEY = 'b4ccf34d74031aa55f125a731bc7544e';

export const getNowPlaying= async (page=1) => await axiosInstances.get<MovieDBNowPlaying>(`/movie/now_playing?api_key=${API_KEY}&page=${page}`).catch((console.log))
 
export const getPopular = async (page=1) => await axiosInstances.get<MovieDBNowPlaying>(`/movie/popular?api_key=${API_KEY}&page=${page}`).catch((console.log))

export const getTopRate = async (page=1) => await axiosInstances.get<MovieDBNowPlaying>(`/movie/top_rated?api_key=${API_KEY}&page=${page}`).catch((console.log))

export const getUpComming = async (page=1) => await axiosInstances.get<MovieDBNowPlaying>(`/movie/upcoming?api_key=${API_KEY}&page=${page}`).catch((console.log))