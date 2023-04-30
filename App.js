import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react'
import Navbar from './src/Components/Navbar/Navbar';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './src/Screens/Cart/Cart'
import Home from './src/Screens/Home/Home'
// const Stack = createNativeStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, initialWindowMetrics} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
export default function App() {
    return (

        <SafeAreaProvider>
           
            <NavigationContainer>
                <StatusBar backgroundColor='gray'/>
                <Stack.Navigator  screenOptions={({route})=>
                  

                      ({headerShown:route.name === 'Home' ?  false : true})
  }>

                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Cart" component={Cart}/>
                </Stack.Navigator>
                     
            </NavigationContainer>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});
