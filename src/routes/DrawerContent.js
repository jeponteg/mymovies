import React from "react";
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Drawer, Switch, TouchableRipple, Text } from 'react-native-paper'

const DrawerContent = () => {

    const navigation = useNavigation();

    return(
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item
                    label="Home"
                    onPress= { () => navigation.navigate('home')}
                />
                 <Drawer.Item
                    label="news"
                    onPress= { () => navigation.navigate('news')}
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

export default DrawerContent