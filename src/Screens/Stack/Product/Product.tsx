import React, {  useState } from 'react'
import {Text,Image, TouchableOpacity, View, ScrollView } from 'react-native'
import Carousel    from 'react-native-snap-carousel'
import {Pagination}   from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'
import { Divider ,Button, Snackbar} from 'react-native-paper'
import {  pushState, saveState } from '../../../Utils/Local'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface ProductType{title:string,category?:string,images:string[],_id:string,price:number,description?:string}
const ItemImages = ({width,height,imgHeight,item}) => {
    return <>
    
     <View
    style={{
    width: width || 300,
    height: width
        ? width
        : 400
    }}>

        <Image
            style={{
            width: width,
            height: imgHeight ? imgHeight : width
        }}
            resizeMode={'cover'}
            source={{
            uri: `${item.img}`
        }}/>

</View>

  
    </>
}
const CarouselPagination = ({activeDotIndex}) => {
    return <Pagination
            dotsLength={Number([1,2,3].length || 1)}
              activeDotIndex={activeDotIndex}
              activeOpacity={1}
              inactiveDotOpacity={0.4}
              
              containerStyle={{ backgroundColor: 'white' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: '#6145ff'
              }}
              inactiveDotStyle={{
              }}
              inactiveDotScale={0.6}
            />
}
const Product = ({navigation,products}:{products:ProductType[],navigation:any}) => {
    
    const screenDimensions = Number(Dimensions.get('screen').width) || 350;
    const [activeDotIndex,setActiveDotIndex] = useState(0)
    const [Active,setActive] = useState(false)

  
    
    const addToCart = async (_id:string,product:ProductType) => {
       
      const value = await  AsyncStorage.getItem('usercart2');
        if (!value) {
            saveState('usercart2',product)
            return
        }        
        pushState('usercart2',
        {...product,qty:1})
    }

  return (
<>
    <ScrollView >
        
        <Carousel
     
                    data={products}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    activeSlideAlignment={'start'}
                    removeClippedSubviews={false}                    
                    enableMomentum={true}
                      loop
                      autoplay
                    renderItem={(props) => ItemImages({
                    ...props,
                    width: screenDimensions
                })}
                onSnapToItem={(index) => setActiveDotIndex(index) }
                    sliderWidth={screenDimensions}
                    itemWidth={screenDimensions}
                    useScrollView={false}/>
        <CarouselPagination activeDotIndex={activeDotIndex}/>



        <View style={{paddingHorizontal:10, backgroundColor:'white'}}>
            <Text style={{color:'#6145ff'}}>
                DSP
            </Text>
            <Text style={{color:'black',fontSize:21,paddingVertical:5,fontWeight:'500'}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe.
            </Text>
            <Text style={{color:'black',fontSize:25,fontWeight:'700'}}>
                    $20
            </Text>

                <TouchableOpacity>

            <Button 
            onPress={()=>
            {    addToCart('usercart2',{title:'new',category:'xyz',images:['foo'],_id:'222',price:100,description:'fooe'}),
                setActive(true)}
            }
            style={{borderWidth:1,marginTop:16,borderColor:'#6145ff'}}>
                <Text style={{color:'#6145ff'}}>
                Add To Cart
                </Text>
            </Button>
            </TouchableOpacity>

            <TouchableOpacity>

            <Button
          textColor='green'
            icon="whatsapp"  style={{marginVertical:16}}>
                <Text style={{color:'green'}}>
                Order On WhatsApp
                </Text>
            </Button>
                </TouchableOpacity>
                <View>
<Snackbar
        visible={Active}
        onDismiss={()=>setActive(false)}
        duration={3000}
        style={{backgroundColor:'green'}}
        action={{
          label: 'View Cart',
          onPress: () => {
            navigation.navigate('Cart');
            setActive(false)
            // Do something
          },
        }}>
       Item Added To Cart!
      </Snackbar>
</View>

    </View>
   
    <View style={{marginVertical:20,padding:10,backgroundColor:'white'}}>
            <Text style={{color:'#2b2b2b',paddingBottom:10}}>
                Product Id : XYZ-123-456
            </Text>
    <Divider />
            <Text style={{fontSize:16,fontWeight:'600',color:'green',paddingTop:10}}>
                 In Stock
            </Text>
    </View>

  

    <View style={{paddingVertical:20,paddingHorizontal:10,marginVertical:5,backgroundColor:'white'}}>
            <Text style={{color:'black',fontWeight:'500',paddingBottom:5}}>
                Description
            </Text>
    <Divider />
            <Text style={{fontSize:16,fontWeight:'300',color:'#2b2b2b',paddingVertical:10}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque commodi est laborum nostrum voluptatem quis, repudiandae, dignissimos deserunt amet voluptatibus ullam nisi possimus fuga?
            </Text>
    </View>
  

    <View style={{paddingVertical:20,paddingHorizontal:10,marginVertical:5,backgroundColor:'white'}}>
            <Text style={{color:'black',fontWeight:'500',paddingBottom:5}}>
                Reviews
            </Text>
    <Divider />
            <Text style={{fontSize:16,fontWeight:'300',color:'#2b2b2b',paddingVertical:10}}>
                        No Reviews Yet
            </Text>
    </View>
  
      

    </ScrollView>
</>

  )
}

export default Product