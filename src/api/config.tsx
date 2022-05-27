import axios from "axios";

const API_HOST = 'https://api.themoviedb.org/3';

const axiosInstances = axios.create({
    baseURL:API_HOST,
})

export default axiosInstances