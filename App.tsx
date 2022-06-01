import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MoviesProvider from './src/context/MoviesProvider';
import RootNavigation from "./src/routes/RootNavigation";
import UpcommingMovieProvider from "./src/context/UpcommingMovieProvider";
import TopRateMovieProvider from "./src/context/TopRateMovieProvider";

const App = () => {
  return (
    <TopRateMovieProvider>
      <UpcommingMovieProvider>
        <MoviesProvider>
          <NavigationContainer>
            <RootNavigation/>
          </NavigationContainer>   
        </MoviesProvider>
      </UpcommingMovieProvider>
    </TopRateMovieProvider> 
  );
};

export default App;
