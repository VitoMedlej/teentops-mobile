import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import Navbar from '../../Components/Navbar/Navbar';
import Carousel from 'react-native-snap-carousel';
import ProductCarousel, { ProductCard } from '../../Components/ProductCarousel/ProductCarousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import req from '../../../dummy.json';

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

const Item = ({width, item, height, imgHeight, navigation} : {
    width: number,
    item: {
        img: string
    },
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
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>

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
            // const req = await fetch(`https://getpantry.cloud/apiv1/pantry/ee14221e-031c-48db-92f1-d5a3efd3299e/basket/products`)
            // let res =  req.json() ;
            // const res = JSON.parse(stringifiedRes?.products) ;
            let res =  req?.products || []
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
                    navigation
                })}
                    sliderWidth={screenDimensions}
                    itemWidth={screenDimensions}
                    useScrollView={true}/>
                <View
                    style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>

                    {categoryImage.map(item => {
                        return <View
                            key={item.img}
                            style={{
                            height: 100
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                navigation.navigate('Products')
                            }}>

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
                    })
}
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
                <Carousel
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
                    useScrollView={true}/>

                <View
                    style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>

                    {categoryImage.map(item => {
                        return <SmallItem key={item.img} screenDimensions={screenDimensions} item={item}/>
                    })
}
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
                    width={screenDimensions}
                    item={{
                    img: 'https://www.ishtari.com/image/data/system_banner/10000/1800/1719/homepage-automotive-app.png'
                }}/>
                <Item
                    navigation={navigation}
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
 <ProductCarousel
                    navigation={navigation}
                    title="New Arrivals"
                    products={products?.slice(25,27)}
                    screenDimensions={screenDimensions}/>

         

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home