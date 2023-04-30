import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {Button} from 'react-native-paper';

import Navbar from '../../Components/Navbar/Navbar';
import Carousel from 'react-native-snap-carousel';
import ProductCarousel, {products} from '../../Components/ProductCarousel/ProductCarousel';

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

const Item = ({width, item, height ,imgHeight} : {
    width: number,
    item: {
        img: string
    },
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
        <TouchableOpacity>

            <Image
                style={{
                width: width,
                height: imgHeight ? imgHeight : 200
            }}
                resizeMode={'contain'}
                source={{
                uri: `${item.img}`
            }}/>
        </TouchableOpacity>

    </View>
}

// const SmallItem = ({width, item, height,text} : {   width: number,   item: {
//      img: string   },   height?: number,   text:string }) => {   return <View
//       style={{       width: width || 300,       height: height           ?
// height           : 200   }}>       <TouchableOpacity>           <Image
//        style={{               width: width,               height: 200
//   }}               resizeMode={'contain'}               source={{
//   uri: `${item.img}`           }}/>           <Text>             {text}
//     </Text>       </TouchableOpacity>   </View> }
const SmallItem = ({item,screenDimensions}) => {
 return <View
                            key={item.img}
                            style={{
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
    return (
        <SafeAreaView style={{
            backgroundColor: 'white'
        }}>
            <ScrollView>

                <Navbar isHome={route.name === 'Home'} navigation={navigation}/>
                <Carousel
                    removeClippedSubviews={false}
                    data={images}
                    loop
                    autoplay
                    renderItem={(text) => Item({
                    ...text,
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
                        return <View
                            key={item.img}
                            style={{
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
                    })
}
                </View>
                {[1, 2].map(i => {

                    return <ProductCarousel
                        title="New Arrivals"
                        key={i}
                        products={products}
                        screenDimensions={screenDimensions}/>

                })}

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
                        return <SmallItem screenDimensions={screenDimensions} item={item}/>
                    })
}
                </View>

                <ProductCarousel
                    title="New Arrivals"
                    products={products}
                    screenDimensions={screenDimensions}/>
                  
                  <Item height={240} imgHeight={240} width={screenDimensions} item={{img:'https://www.ishtari.com/image/data/system_banner/10000/1800/1719/homepage-automotive-app.png'}} />
                  <Item height={240} imgHeight={240} width={screenDimensions} item={{img:'https://www.ishtari.com/image/data/system_banner/10000/1800/1703/electronic-banne-app.png'}} />
                  <ProductCarousel
                    title="New Arrivals"
                    products={products}
                    screenDimensions={screenDimensions}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home