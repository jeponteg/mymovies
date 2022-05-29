import React, { FC, useContext, useEffect, useState } from 'react'
import { MovieContext } from '../context/MoviesProvider'
import { Text, View, FlatList, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';

const windowWidth = Dimensions.get('window').width;

const Home:FC = () => {

    const { popular } = useContext(MovieContext)

    useEffect(() => {

    },[popular])

    return(
        
        <View style={{marginTop: 20}}>
            <View style={{height:440}} >
                <Carousel
                    data={popular}
                    renderItem={ ({ item }:any) =>  <MoviePoster movie={ item }/>} 
                    sliderWidth = {windowWidth}
                    itemWidth={300}
                />
            </View>

            <View style={{height:230}} >
                <Text style={{fontWeight:'bold', fontSize:20}} >Populares</Text>
                <FlatList 
                    data={popular}
                    renderItem={({item} :any) => <MoviePoster movie={ item} /> }
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

export default Home