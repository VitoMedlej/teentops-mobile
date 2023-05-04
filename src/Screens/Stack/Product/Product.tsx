import React, {  useState } from 'react'
import {Text,Image, TouchableOpacity, View, ScrollView } from 'react-native'
import Carousel    from 'react-native-snap-carousel'
import {Pagination}   from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'
import { Divider ,Button, Snackbar} from 'react-native-paper'
import {  pushState, saveState } from '../../../Utils/Local'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface ProductType{title:string,category?:string,
    description?:string,
    images:string[],_id:string,price:number}
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
            resizeMode={'contain'}
            source={{
            uri: `${item}`
        }}/>

</View>

  
    </>
}
const CarouselPagination = ({length,activeDotIndex}) => {
    return <Pagination
            dotsLength={Number(length || 1)}
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
const Product = ({route ,navigation}:{route :any,navigation:any}) => {
    
    const product :ProductType | undefined = route.params?.item
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
     
                    data={product?.images}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    activeSlideAlignment={'start'}
                    removeClippedSubviews={false}                    
                    enableMomentum={true}
                      loop
                      scrollEnabled
                    renderItem={(props) => ItemImages({
                    ...props,
                    width: screenDimensions
                })}
                onSnapToItem={(index) => setActiveDotIndex(index) }
                    sliderWidth={screenDimensions}
                    itemWidth={screenDimensions}
                    useScrollView={false}/>
        <CarouselPagination length={product?.images?.length} activeDotIndex={activeDotIndex}/>



        <View style={{paddingHorizontal:10, backgroundColor:'white'}}>
            <Text style={{color:'#6145ff'}}>
                {product?.category}
            </Text>
            <Text style={{color:'black',fontSize:21,paddingVertical:5,fontWeight:'500'}}>
                {product?.title || 'Product Name'}

            </Text>
            <Text style={{color:'black',fontSize:25,fontWeight:'700'}}>
                    ${product?.price || 'Price'}
            </Text>

                <TouchableOpacity>

            <Button 
            onPress={()=>
            {    addToCart('usercart2',{title:product?.title || 'Product Name',category:product?.category,images:product?.images ? [product?.images[0]] : ['https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png'] ,_id:product?._id,price:product?.price || 0,description:product?.description}),
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
                Product Id : {product?._id}
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
                    {product?.description}
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