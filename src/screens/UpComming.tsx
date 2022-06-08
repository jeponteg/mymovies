import React, { FC, useContext } from 'react'
import { ScrollView, View } from 'react-native';
import VerticalSlider from '../components/verticalSlider';
import { UpcommingMovieContext } from '../context/UpcommingMovieProvider';

const UpComming:FC = () => {

    const { upcomming } = useContext(UpcommingMovieContext)

    return(
        
        <View>
            <VerticalSlider movies={upcomming}/>
        </View>
       
    )
}

export default UpComming