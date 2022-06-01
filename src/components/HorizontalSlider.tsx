import React from 'react'
import { Text, View, FlatList, Dimensions, ScrollView } from 'react-native';
import { Movie } from '../interfaces/moviesInterface';
import MoviePoster from './MoviePoster';

interface Props {
    title:string;
    movies:Movie[]
}

const HorizontalSlider = ({title, movies }: Props) => {
    return (
        <View style={{height:260}} >
            <Text style={{fontWeight:'bold', fontSize:20, marginLeft:10}} >{ title } </Text>
            <FlatList 
                data={movies}
                renderItem={({item} :any) => <MoviePoster movie={ item}  width={140} height={200}/> }
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={ false }
            />
        </View>
    )
}

export default HorizontalSlider