import React from 'react'
import {
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';

import Carousel from 'react-native-snap-carousel';
import { ProductType } from '../../Screens/Stack/Product/Product';

export const ProductCard = ({imgWidth,styles,item,width,navigation}:{
    styles?:any,
    imgWidth?:number,
    item:{images:string[],title:string,price:number,_id},width:string|number|any,navigation :any
}) => {
    
    return <TouchableOpacity key={item._id}  onPress={() => navigation.navigate('Product')}>
    <View 
    
    style={{
        backgroundColor: 'white',
        width: 200,
        marginVertical:5,
        ...styles,
    }}>

            <Image
                style={{
                display: 'flex',
                alignContent: 'center',
                width: imgWidth ? imgWidth :  Number(width / 2) - 6,
                maxWidth: 200,
                height: 200
            }}
                resizeMode={'contain'}
                source={{
                uri: `${item.images[0]}`
            }}/>
            <Text
                style={{
                    fontSize:12,
                    paddingVertical:4,
                    fontWeight: '800',
            }}>
                Applieances
            </Text>
            <Text
                style={{
                fontSize:16,
                fontWeight: '300',
            }}>
                {item.title}
            </Text>
            <Text style={{
                fontWeight: '900',
                paddingTop:2,
            }}>
                ${item.price}
            </Text>

    </View>
    </TouchableOpacity> 


}
// export const products = [
//     {
//         img: `https://www.ishtari.com/image/cache/data/system_product/40000/39400/39396/01-192x264.jpg?2`,
//         title: 'Sonifier Electric Coil Double head',
//         price: 120,
//         category: 'Coffe Maker',
//         _id: '12613613aqwr'
//     }, {
//         img: `https://www.ishtari.com/image/cache/data/system_product/40000/39400/39396/01-192x264.jpg?2`,
//         title: 'Sonifier Electric Coil Double head',
//         price: 120,
//         category: 'Coffe Maker',
//         _id: '12411faqwr'
//     }, {
//         img: `https://ucarecdn.com/a774d2b8-0f51-433a-8586-d93e1e9cf191/`,
//         title: 'Sonifier Electric Coil Double head',
//         price: 120,
//         category: 'Coffe Maker',
//         _id: '1241252wr'
//     }, {
//         img: `https://ucarecdn.com/2fded1c6-2953-4cf7-8928-8ddadfe81ec3/`,
//         title: 'Sonifier Electric Coil Double head',
//         price: 120,
//         category: 'Coffe Maker',
//         _id: '124125116qwr'
//     }
// ]

const ProductCarousel = ({title,ItemOnly,screenDimensions,products,navigation}:{
    title : string,
    ItemOnly ?: boolean,
    screenDimensions : number,
    products : ProductType[],
    navigation : any
}) => {
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
                        {!ItemOnly ?    
                        <View>

                        <Carousel
                                data={products}
                                inactiveSlideOpacity={1}
                                inactiveSlideScale={1}
                                activeSlideAlignment={'start'}
                                removeClippedSubviews={false}
                                // loop
                                enableMomentum={true}
                                autoplay
                                renderItem={({item}) => ProductCard({
                                    item,
                                width: screenDimensions,
                                navigation
                            })}           
                                sliderWidth={screenDimensions}
                                itemWidth={screenDimensions * 0.5}/>
                        </View>

                            :

                         
                        <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>
                         
                    {  products.map(product=>{

                       return <ProductCard
                       key={product._id}
                        item={product}
                        width= {screenDimensions}
                        navigation={navigation}
                        />
                    })}
                       
                    
                            
                            </View>

                    }
                    </View>
  )
}

export default ProductCarousel