import React from 'react'
import {
  
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
import Navbar from '../../Components/Navbar/Navbar';

  
const Home = ({navigation, route}) => {
  return (
    <SafeAreaView>
        <Navbar isHome={route.name === 'Home'} navigation={navigation}/>
        <Text>
            hello from home
        </Text>
    </SafeAreaView>
  )
}

export default Home