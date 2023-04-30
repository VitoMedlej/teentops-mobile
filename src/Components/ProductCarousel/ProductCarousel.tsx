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

import Carousel from 'react-native-snap-carousel';

const ProductCard = (props) => {
    const item = props.item
    return <View style={{
        backgroundColor: 'white',
        width: 200
    }}>

            <Image
                style={{
                display: 'flex',
                alignContent: 'center',
                width: Number(props.width / 2) - 6,
                maxWidth: 200,
                height: 200
            }}
                resizeMode={'contain'}
                source={{
                uri: `${item.img}`
            }}/>
            <Text
                style={{
                fontWeight: '300',
                paddingTop: 10
            }}>
                {item.title}
            </Text>
            <Text style={{
                fontWeight: '600'
            }}>
                ${item.price}
            </Text>

    </View>

}
export const products = [
    {
        img: `https://www.ishtari.com/image/cache/data/system_product/40000/39400/39396/01-192x264.jpg?2`,
        title: 'Sonifier Electric Coil Double head',
        price: 120,
        category: 'Coffe Maker',
        id: '1241251hifaqwr'
    }, {
        img: `https://www.ishtari.com/image/cache/data/system_product/40000/39400/39396/01-192x264.jpg?2`,
        title: 'Sonifier Electric Coil Double head',
        price: 120,
        category: 'Coffe Maker',
        id: '1241251hifaqwr'
    }, {
        img: `https://ucarecdn.com/a774d2b8-0f51-433a-8586-d93e1e9cf191/`,
        title: 'Sonifier Electric Coil Double head',
        price: 120,
        category: 'Coffe Maker',
        id: '1241251hifaqwr'
    }, {
        img: `https://ucarecdn.com/2fded1c6-2953-4cf7-8928-8ddadfe81ec3/`,
        title: 'Sonifier Electric Coil Double head',
        price: 120,
        category: 'Coffe Maker',
        id: '1241251hifaqwr'
    }
]

const ProductCarousel = ({title,screenDimensions,products}) => {
  return (
    <View
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
                                {title}
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

                        <View >
                            <Carousel
                                data={products}
                                inactiveSlideOpacity={1}
                                inactiveSlideScale={1}
                                activeSlideAlignment={'start'}
                                removeClippedSubviews={false}
                                loop
                                enableMomentum={true}
                                autoplay
                                renderItem={(props) => ProductCard({
                                ...props,
                                width: screenDimensions
                            })}
                                sliderWidth={screenDimensions}
                                itemWidth={screenDimensions * 0.5}/>

                        </View>
                    </View>
  )
}

export default ProductCarousel