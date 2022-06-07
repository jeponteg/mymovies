import React, { FC, useContext, useState } from 'react'
import { MovieContext } from '../context/MoviesProvider'
import { Text, ScrollView, View } from 'react-native';
import { Movie } from '../interfaces/moviesInterface';
import VerticalSlider from '../components/verticalSlider';

const Popular:FC = () => {

    const { popular } = useContext(MovieContext)
    const [ movies, setMovies] = useState<Movie[]>([])

    return(
        <ScrollView>
            <View>
                <VerticalSlider movies={popular}/>
            </View>
        </ScrollView>
    )
}

export default Popular