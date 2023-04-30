import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react'
import Navbar from './src/Components/Navbar/Navbar';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './src/Screens/Cart/Cart'
import Home from './src/Screens/Home/Home'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, initialWindowMetrics} from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Button} from 'react-native-paper';

// const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export default function App() {
    return (

        <SafeAreaProvider>
           
            <NavigationContainer>
                <StatusBar backgroundColor='gray'/>
                {/* <Stack.Navigator  screenOptions={({route})=>
                      ({headerShown:route.name === 'Home' ?  false : true})
  }>

                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Cart" component={Cart}/>
                </Stack.Navigator> */}
                   <Tab.Navigator
                   
                   initialRouteName="Home"
                   activeColor="#3473fd"
                   inactiveColor="#b1b1b1"
                   barStyle={{ backgroundColor: 'white',borderWidth: 1,
                   borderColor: "#dcdcdc", }}
                   screenOptions={({route})=>
                      ({headerShown:route.name === 'Home' ?  false : true})
  }>

                    <Tab.Screen  
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color }) => (
                                    <Button color='red' backgroundColor='blue' icon="home"/>
                                    
                                ),
                              }}
                      
                    
                    name="Home" component={Home}/>
                    <Tab.Screen name="Cart" component={Cart}/>
                </Tab.Navigator>
                     
            </NavigationContainer>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});
