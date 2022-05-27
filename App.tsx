import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MoviesProvider from './src/context/MoviesProvider';
import RootNavigation from "./src/routes/RootNavigation";

const App = () => {
  return (
    <MoviesProvider>
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>   
    </MoviesProvider>
  );
};

export default App;
