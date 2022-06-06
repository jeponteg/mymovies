import React, { useState, useMemo } from "react";
import { NavigationContainer, DarkTheme as DarkThemeNavigation, DefaultTheme as DefaultThemeNavigation} from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as DarkThemePaper, DefaultTheme as DefaultThemePaper  } from 'react-native-paper';
import { StatusBar } from 'react-native'
import MoviesProvider from './src/context/MoviesProvider';
import RootNavigation from "./src/routes/RootNavigation";
import UpcommingMovieProvider from "./src/context/UpcommingMovieProvider";
import TopRateMovieProvider from "./src/context/TopRateMovieProvider";

const App = () => {
  const [theme, setTheme] = useState('light');

  DefaultThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.accent = '#1ae1f2';

  DarkThemeNavigation.colors.background = '#192734';
  DarkThemeNavigation.colors.card = '#15212b';

  /*const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const preference = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );*/

  return (
    <PaperProvider theme={theme === 'dark' ? DarkThemePaper : DefaultThemePaper}>
      <TopRateMovieProvider>
        <UpcommingMovieProvider>
          <MoviesProvider>
            <NavigationContainer theme={theme === 'dark' ? DarkThemeNavigation : DefaultThemeNavigation}>
              <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}/>
              <RootNavigation/>
            </NavigationContainer>   
          </MoviesProvider>
        </UpcommingMovieProvider>
      </TopRateMovieProvider> 
    </PaperProvider>
  );
};

export default App;
