import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    View,
    TouchableOpacity
} from 'react-native';

import Navbar from '../../Components/Navbar/Navbar';
import Carousel from 'react-native-snap-carousel';
import ProductCarousel, { ProductCard } from '../../Components/ProductCarousel/ProductCarousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlashList } from '@shopify/flash-list';
// import { ProductType } from '../Stack/Product/Product';
// import { Button } from 'react-native-paper';

const images = [
    {
        title: 'P1',
        text: 'p1 text',
        img: `https://www.ishtari.com/image/data/system_banner/10000/1800/1697/sonifer-app2.png`
    }, {
        title: 'P2',
        text: 'p2 text',
        img: `https://www.ishtari.com/image/data/system_banner/10000/1800/1697/app-perfume.png`
    }, {
        title: 'P3',
        text: 'p3 text',
        img: `https://www.ishtari.com/image/data/system_banner/10000/1800/1697/cups-app.png`
    }
]

const categoryImage = [
    {
        img: 'https://www.ishtari.com/image/data/system_banner/10000/1800/1675/kitchen-web.png',
        href: ''
    }, {
        img: 'https://www.ishtari.com/image/data/system_banner/10000/1800/1675/camera-web.png',
        href: ''
    }
]

const Item = ({width, item, height,category, imgHeight, navigation} : {
    width: number,
    item: {
        img: string
    },
    category : string | null,
    navigation: any,
    height?: number,
    imgHeight?: number
}) => {
    return <View
        style={{
        width: width || 300,
        height: height
            ? height
            : 200
    }}>
        <TouchableOpacity onPress={() => navigation.navigate('Products',{category })}>

            <Image
                style={{
                width: width,
                height: imgHeight
                    ? imgHeight
                    : 200
            }}
                resizeMode={'contain'}
                source={{
                uri: `${item.img}`
            }}/>
        </TouchableOpacity>

    </View>
}

const SmallItem = ({item, screenDimensions}) => {
    return <View key={item.img} style={{
        height: 100
    }}>
        <TouchableOpacity>

            <Image
                style={{
                width: screenDimensions / 2.01,
                height: 100
            }}
                resizeMode={'contain'}
                source={{
                uri: `${item.img}`
            }}/>
        </TouchableOpacity>
    </View>
}

const Home = ({navigation, route}) => {
    const screenDimensions = Number(Dimensions.get('screen').width) || 100;
    const [products,setProducts] = useState([])
    const fetchAndSaveProducts = async () => {
        try {
            // Get both locally saved products and the ones on the cloud
            const req = await fetch(`https://getpantry.cloud/apiv1/pantry/ee14221e-031c-48db-92f1-d5a3efd3299e/basket/products`)
            let res : any = await  req.json() ;
            // let res : any = req.products ;
            console.log('fetch called')
            // const res = JSON.parse(stringifiedRes?.products) ;
            // let res =  req?.products || []
             res  =  res?.products || []
            const localProducts = await AsyncStorage.getItem('LocalProducts')
            
            // incase fetching cloud products fails, stay on local ones and vise versa
            if (!res || res.length < 0) return;
            if (!localProducts && res) {
                await AsyncStorage.setItem('LocalProducts',JSON.stringify(res))
                setProducts(res)
                return
            }
            // compare local and cloud products to sync the data
            if (localProducts && res) {
                let ParsedLocalProducts =JSON.parse(localProducts)   
                if (ParsedLocalProducts?.length !== res?.length) {
                await AsyncStorage.setItem('LocalProducts',JSON.stringify(res))
                setProducts(res)
                return
                }
                setProducts(res)
            }

        }
        catch (e) {
            console.log('from Home error: ', e);
        }

    }
   
    useEffect(() => {
        fetchAndSaveProducts()
    }, [])
    
    return (
        <SafeAreaView style={{
            backgroundColor: 'white'
        }}>
            <ScrollView>

                <Navbar isHome={route.name === 'Home'} navigation={navigation}/>
                <Carousel
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    activeSlideAlignment={'start'}
                    removeClippedSubviews={false}
                    enableMomentum={true}
                    data={images}
                    loop
                    autoplay
                    renderItem={(text) => Item({
                    ...text,
                    width: screenDimensions,
                    navigation,
                    category : null
                })}
                    sliderWidth={screenDimensions}
                    itemWidth={screenDimensions}
                    useScrollView={true}/>



<View
                    style={{
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight:2,
                    justifyContent: 'space-evenly'
                }}>
<View
style={{minHeight:2,width:Dimensions.get('screen').width - 5 ,display:'flex',flexDirection:'row'}}
>
                        <FlashList
                   estimatedItemSize={2}
                   numColumns={2}
                   data={categoryImage}
                   renderItem={({item})=> SmallItem({item,screenDimensions})}/>
                   
</View>

                    {/* {categoryImage.map(item => {

                        return <SmallItem key={item.img} screenDimensions={screenDimensions} item={item}/>
                    })
} */}
                </View>
                

                     <ProductCarousel
                        navigation={navigation}
                        title="New Arrivals"
                        products={products?.slice(0,9)}
                        screenDimensions={screenDimensions}/>

{/* <ProductCarousel
                        navigation={navigation}
                        title="New Arrivals"
                        products={products?.slice(9,18)}
                        screenDimensions={screenDimensions}/> */}
                {/* <Carousel
                    removeClippedSubviews={false}
                    data={[
                    {
                        img: 'https://www.ishtari.com/image/data/system_banner/10000/2200/2047/moulinex-webb.png'
                    }, {
                        img: 'https://www.ishtari.com/image/data/system_banner/10000/2200/2047/web.png'
                    }
                ]}
                    loop
                    autoplay
                    lockScrollWhileSnapping
                    enableSnap
                    renderItem={(text) => Item({
                    ...text,
                    navigation,
                    height: 150,
                    width: screenDimensions
                })}
                    sliderWidth={screenDimensions}
                    itemWidth={screenDimensions}
                    useScrollView={true}/> */}
                <Item
                    width={screenDimensions}
                    height={150}
                    navigation={navigation}
                    item={{ img: 'https://www.ishtari.com/image/data/system_banner/10000/2200/2047/moulinex-webb.png' }} category={''}                />
                <View
                    style={{
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight:2,
                    justifyContent: 'space-evenly'
                }}>
<View
style={{minHeight:2,width:Dimensions.get('screen').width - 5 ,display:'flex',flexDirection:'row'}}
>
                        <FlashList
                   estimatedItemSize={2}
                   numColumns={2}
                   data={categoryImage}
                   renderItem={({item})=> SmallItem({item,screenDimensions})}/>
                   
</View>

                    {/* {categoryImage.map(item => {

                        return <SmallItem key={item.img} screenDimensions={screenDimensions} item={item}/>
                    })
} */}
                </View>

                <ProductCarousel
                    navigation={navigation}
                    title="New Arrivals"
                    products={products?.slice(18,25)}
                    screenDimensions={screenDimensions}/>

                <Item
                    navigation={navigation}
                    height={240}
                    imgHeight={240}
                    category={null}
                    width={screenDimensions}
                    item={{
                    img: 'https://www.ishtari.com/image/data/system_banner/10000/1800/1719/homepage-automotive-app.png'
                }}/>
                <Item
                    navigation={navigation}
                    category={'electronics'}

                    height={240}
                    imgHeight={240}
                    width={screenDimensions}
                    item={{
                    img: 'https://www.ishtari.com/image/data/system_banner/10000/1800/1703/electronic-banne-app.png'
                }}/>
                {/* <ProductCarousel
                    navigation={navigation}
                    title="New Arrivals"
                    products={products?.slice(25,30)}
                    screenDimensions={screenDimensions}/> */}
 {/* <ProductCarousel
                    navigation={navigation}
                    title="New Arrivals"
                    products={products?.slice(25,27)}
                    screenDimensions={screenDimensions}/> */}
                 {/* <View
                        style={{
                        margin: 6,
                        marginVertical: 15
                    }}>
                        <View
                            style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 10,
                            justifyContent: 'space-between'
                        }}>
                            <Text
                                style={{
                                fontSize: 25,
                                fontWeight: '500'
                            }}>
                                More Products
                            </Text>
                            <TouchableOpacity>

                                <Button
                                    style={{
                                    width: 150,
                                    padding: 0,
                                    alignItems: 'flex-end'
                                }}>
                                    View All
                                </Button>
                            </TouchableOpacity>
                        </View>
                     

<View
style={{minHeight:2 ,width:Dimensions.get('screen').width - 5 ,display:'flex',backgroundColor:'white',flexDirection:'row'}}
>

    <FlashList 
        numColumns={2}
        data={products.slice(0,8)}
        renderItem={({ item }:ProductType | any) => 
    (    

        <View 
        style={{
            backgroundColor: 'white',
            width:  screenDimensions / 2.1,
            marginVertical:5,
        }}>
      <TouchableOpacity 

onPress={()=>navigation.navigate('Product',{
    item
})}>

                <Image
                    style={{
                    display: 'flex',
                    alignContent: 'center',
                    width: screenDimensions - 5,
                    maxWidth: 190,
                    height: 200
                }}
                    resizeMode={'contain'}
                    source={{
                    uri: `${item.images[0]}`
                }}/>
</TouchableOpacity>

                <View
                    style={{
                }}>

                    <Text
                    style={{
                         paddingVertical:4,
                         paddingHorizontal:2
    
                    }}>
                    {item.category}
                    </Text>
       
                    <Text
                    onPress={()=>{navigation.navigate('Product',{item})}}

                     numberOfLines={2} 
                    style={{
                        paddingHorizontal:2
,
                        width : 200,
                         fontSize:19,
                         fontWeight: '700',
                         textAlign:'left'
                    }}>
    
                    {item.title}
    
                    </Text>
                    
                </View>

                <Text style={{
                    fontWeight: '900',
                    padding:2,
                    textAlign:'left',color:'green'
                }}>
                    ${item.price}
                </Text>
              

        </View>


   )
        
        }
        
        estimatedItemSize={9}
        />
</View>
   



                    </View>
          */}
  <ProductCarousel
                    navigation={navigation}
                    title="New Arrivals"
                    products={products?.slice(18,20)}
                    screenDimensions={screenDimensions}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home