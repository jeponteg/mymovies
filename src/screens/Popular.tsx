import React, { FC, useContext } from 'react'
import { MovieContext } from '../context/MoviesProvider'
import { ScrollView, View } from 'react-native';
import VerticalSlider from '../components/verticalSlider';

const Popular:FC = () => {

    const { popular } = useContext(MovieContext)

    return(
    
        <View>
            <VerticalSlider movies={popular}/>
        </View>
      
    )
}

export default Popular