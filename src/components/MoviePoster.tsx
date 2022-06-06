import React from 'react'
import { Text, View, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/moviesInterface';

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:10,
    },
    container:{
        flex:1
    },
    imageContainer:{
        flex:1,
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.24,
        shadowRadius:7,
        elevation:10,
    }
})

interface Props {
    movie:Movie,
    height?: number,
    width?:number
}

const MoviePoster = ({movie, height=420, width=300 }:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    
    return(
        
        <View style={{ width,height, marginHorizontal:5 }}>
            <TouchableOpacity style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri}}
                        style={styles.image}
                    />
                </View>
            </TouchableOpacity>
        </View>
    
    )
}
export default MoviePoster