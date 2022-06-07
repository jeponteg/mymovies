import React from 'react'
import { Text, View, FlatList, Dimensions, ScrollView } from 'react-native';
import { Movie } from '../interfaces/moviesInterface';
import MoviePoster from './MoviePoster';
import MoviesCard from './MoviesCard';

interface Props {
    movies:Movie[]
}

const windowWidth = Dimensions.get('window').width / 2;

const VerticalSlider = ({movies }: Props) => {
    return (
        <View >
            <FlatList 
                data={movies}
                numColumns={3}
                renderItem={({item} :any) => <MoviesCard movie={ item}  width={windowWidth} height={300}/> }
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={ false }
            />
        </View>
    )
}

export default VerticalSlider