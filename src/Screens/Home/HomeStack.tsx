import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './Home';
import Product from '../Stack/Product/Product';
import Products from '../Stack/Products/Products';

const Stack = createNativeStackNavigator();


const HomeStack = () => {
    // const route = useRoute();
  return (

    <>

    <Stack.Navigator  
    
    screenOptions={({route})=>
    ({headerShown:route.name === 'HomeScreen' ?  false : true})
}
    >

<Stack.Screen
      name="HomeScreen" component={Home}
      />
    <Stack.Screen
      name="Product" component={Product}
      />
       <Stack.Screen
      name="Products" component={Products}
      />
      </Stack.Navigator>
      </>
  )
}

export default HomeStack