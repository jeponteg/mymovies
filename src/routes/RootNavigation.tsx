import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator()

const RootNavigation = () => {
    return(
        <Drawer.Navigator initialRouteName="app">
            <Drawer.Screen name='MyMovies' component={StackNavigation} />
        </Drawer.Navigator> 
    )
}
export default RootNavigation