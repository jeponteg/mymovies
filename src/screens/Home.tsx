import React, { FC, useContext, useEffect, useState } from 'react'
import { MovieContext } from '../context/MoviesProvider'
import { Text, View, FlatList } from 'react-native';

const Home:FC = () => {

    const { popular } = useContext(MovieContext)

    useEffect(() => {

    },[popular])

    return(
        
       null
      

    )
}

export default Home