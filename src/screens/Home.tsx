import React, { FC, useContext, useEffect, useState } from 'react'
import { MovieContext } from '../context/MoviesProvider'
import { UpcommingMovieContext } from '../context/UpcommingMovieProvider';
import { Text, View, FlatList, Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import { TopRateMovieContext } from '../context/TopRateMovieProvider';

const windowWidth = Dimensions.get('window').width;

const Home:FC = () => {

    const { popular } = useContext(MovieContext)
    const { upcomming } = useContext(UpcommingMovieContext)
    const { topRate } = useContext(TopRateMovieContext)

    useEffect(() => {

    },[popular])

    return(
        <ScrollView>
            <View style={{marginTop: 20}}>
                
                <View style={{height:440}} >
                    <Carousel
                        data={popular}
                        renderItem={ ({ item }:any) =>  <MoviePoster movie={ item }/>} 
                        sliderWidth = {windowWidth}
                        itemWidth={300}
                    />
                </View>

                <HorizontalSlider title='Populares' movies={popular} />
                <HorizontalSlider title='Upcomming' movies={upcomming} />
                <HorizontalSlider title='top Rate'  movies={topRate} />
            </View>
        </ScrollView>
    )
}

export default Home