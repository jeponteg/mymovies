import React, { FC, useContext } from 'react'
import { MovieContext } from '../context/MoviesProvider'
import { Text } from 'react-native';

const News:FC = () => {

    const { popular } = useContext(MovieContext)

    return(
        <Text>Este es el News</Text>
    )
}

export default News