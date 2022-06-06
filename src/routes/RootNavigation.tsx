import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator()

const RootNavigation = () => {
    return(
        <Drawer.Navigator initialRouteName="app" drawerContent ={() => <DrawerContent />} >
            <Drawer.Screen name='MyMovies' component={StackNavigation} />
        </Drawer.Navigator> 
    )
}
export default RootNavigation