import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import UpComming from "../screens/UpComming";
import Popular from "../screens/Popular";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="home" component={Home} options={{title:'My movies'}} />
            <Stack.Screen name="upcomming" component={UpComming} options={{title:'Upcomming'}} />
            <Stack.Screen name="popular" component={Popular} options={{title:'Movies Popular'}} />
            <Stack.Screen name="details" component={Details} options={{title:'Movie Details'}} />
        </Stack.Navigator>
    )
}
export default StackNavigation