import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import News from "../screens/News";

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="home" component={Home} options={{title:'My movies'}} />
            <Stack.Screen name="news" component={News} options={{title:'Nuevas peliculas'}} />
        </Stack.Navigator>
    )
}
export default StackNavigation