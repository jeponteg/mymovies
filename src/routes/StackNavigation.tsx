import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import News from "../screens/News";
import Popular from "../screens/Popular";

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="home" component={Home} options={{title:'My movies'}} />
            <Stack.Screen name="news" component={News} options={{title:'Nuevas peliculas'}} />
            <Stack.Screen name="popular" component={Popular} options={{title:'Popular Movies'}} />
        </Stack.Navigator>
    )
}
export default StackNavigation