import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react'
import Navbar from './src/Components/Navbar/Navbar';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './src/Screens/Cart/Cart'
import HomeStack from './src/Screens/Home/HomeStack'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { SafeAreaProvider} from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Product from './src/Screens/Stack/Product/Product';
import Categories from './src/Screens/Categories/Categories';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export default function App() {
    return (

        <>
           
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
                   activeColor="#6145ff"
                //    activeBackgroundColor='red'
                   inactiveColor="#b1b1b1"
                   barStyle={{ backgroundColor: 'white',borderWidth: 1,
                   borderColor: "#dcdcdc", }}
                   screenOptions={({route})=>
                    
                      ({
                        
                        headerShown:route.name === 'Home' ?  false : true})
  }>

                    <Tab.Screen  
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color }) => (
                                  <MaterialCommunityIcons name="home" color={color} size={26} />
                                ),
                              }}
                      

                    name="Home" component={HomeStack}/>


<Tab.Screen
options={{
 tabBarLabel: 'Categories',
 tabBarIcon: ({ color }) => (
     <MaterialCommunityIcons name="cube-outline" color={color} size={26} />
     
 ),
}}
name="Categories" component={Categories}/>
                    <Tab.Screen
                    options={{
                        tabBarLabel: 'Cart',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cart" color={color} size={26} />
                            
                        ),
                      }}
                    name="Cart" component={Cart}/>
                

                            {/* <Tab.Screen
                                options={{
                                    tabBarLabel: 'Settings',
                                    tabBarIcon: ({ color }) => (
                                        <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                                        
                                    ),
                                  }}
                                name="Settings" component={Cart}/> */}

                    
                </Tab.Navigator>
            
            </NavigationContainer>
      
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});
