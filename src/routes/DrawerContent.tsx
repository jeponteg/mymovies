import React from "react";
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    home: undefined;
    upcomming: undefined;
    popular:undefined
};

type screenProp = NativeStackNavigationProp<RootStackParamList>;

const DrawerContent = () => {

    const navigation = useNavigation<screenProp>();

    return(
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item
                    label="Home"
                    onPress= { () => navigation.navigate('home')}
                />
                <Drawer.Item
                    label="UpComming"
                    onPress= { () => navigation.navigate('upcomming')}
                />
                 <Drawer.Item
                    label="Popular"
                    onPress= { () => navigation.navigate('popular')}
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

export default DrawerContent