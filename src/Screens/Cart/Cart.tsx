import React, { useEffect, useState } from 'react'
import {
  
    Platform,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Linking,
  } from 'react-native';
  import {SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, initialWindowMetrics} from 'react-native-safe-area-context';
import Navbar from '../../Components/Navbar/Navbar';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductType } from '../Stack/Product/Product';



const EmptyCart = ({screenHeight}) => {
  
  return <View style={{height:screenHeight,transform:[{translateY: -Number(screenHeight * 0.1)}],display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center',margin:0}}>
 
  <Image
                            style={{
                            width: 70,
                            height: 70
                        }}
                            resizeMode={'cover'}
                            source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/2762/2762885.png'
                        }}/>
  <Text style={{color:'black',fontWeight:'700',fontSize:18,paddingTop:5}}>
      Your Cart Is Empty!
  </Text>
  <Text style={{color:'black',fontWeight:'300',fontSize:12,paddingTop:5}}>
      Add some products to your cart.
  </Text>
</View>
}
const CartList = ({cartItems}: {cartItems:any[]})  => {
  return <>
  
  <View style={{padding:5,marginVertical:10,paddingVertical:10,backgroundColor:'white'}}>
    <Text style={{fontSize:25,paddingVertical:15,fontWeight:'600'}}>
      My Cart
    </Text>
  
 {cartItems && cartItems.length > 0 && 
 
 cartItems.map(item=>{ return <View 
  key={item.img}
  style={{display:'flex',borderBottomWidth:1,borderColor:'#e6e6e6',margin:5,backgroundColor:'white',
  flexDirection:'row'
  }}>
    <Image
                            style={{
                              backgroundColor:'white',
                            width: 100,
                            height: 100
                        }}
                            resizeMode={'cover'}
                            source={{
                            uri: `${item.img}` || 'https://ucarecdn.com/74ada732-9dbd-4f77-83c4-3b9af9cf3889/'
                        }}/>

                        <View style={{marginHorizontal:10,marginVertical:5}}>
                          <Text style={{color:'black',fontWeight:'300',maxWidth:250,paddingBottom:4,fontSize:19}}>
                         {item?.title || 'Product Name'}
                          </Text>
                          <Text style={{fontWeight:'500'}}>
                          ${item?.price}
                          </Text>
                          <Button textColor={'red'}  style={{display:'flex',padding:0}}>
                            Delete
                          </Button>
                        </View>
  </View>
  })}


  </View>
  <View style={{backgroundColor:'white',
  paddingVertical:20,marginVertical:15}}>
                        <Button
                     
                         style={{marginVertical:10,backgroundColor:'white',borderWidth:1,borderColor:'#6145ff',borderRadius:4,marginHorizontal:5}}>
                          <Text style={{color:'#6145ff'}}>
                          Continue Shopping
                          </Text>
                        </Button>
                        <Button 
                        onPress={()=>{
                          Linking.openURL(`whatsapp://send?text=Hello, I would like to place an order:${
                            ['name1','name2','name3','اسم',''].map(i=>{
                              if (i?.length < 1) return;
                              return `\n${i}`
                            })
                          }
                          &phone=96181826445`)
                        }}
                        icon='cart' textColor='white' style={{backgroundColor:'#6145ff',borderWidth:1,borderColor:'#6145ff',borderRadius:4,marginHorizontal:5}}>
                          <Text style={{color:'white'}}>
                          Checkout Now
                          </Text>
                        </Button>
  </View>
  </>

}
const Cart = ({navigation}) => {

  const screenDimensions = Number(Dimensions.get('screen').width) || 350;
  const screenHeight = Number(Dimensions.get('screen').height) || 650;
  const [cartItems,setItems] =  useState([])


  const fetcher = async ()  => {
    let value    = await  AsyncStorage.getItem('usercart2');
  if (!value) {setItems([]); return};
    let array : ProductType[] | [] = value ? JSON.parse(value) : [];
    setItems(array)
  }
  useEffect(() => {
    fetcher()

  }, [])
  
  return (
    <SafeAreaView>
      <Navbar navigation={navigation} isHome={true} />
   {cartItems.length < 1 ? <EmptyCart screenHeight={screenHeight}/> : <CartList cartItems={cartItems}/>}
    </SafeAreaView>
  )
}

export default Cart