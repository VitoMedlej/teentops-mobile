import React, {useState} from 'react'
import {View, ScrollView, Image, TouchableOpacity} from 'react-native'
import Navbar from '../../../Components/Navbar/Navbar'
import {Item} from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer'
import Carousel from 'react-native-snap-carousel'
import {Pagination} from 'react-native-snap-carousel'
import {ProductCard, products} from '../../../Components/ProductCarousel/ProductCarousel'
import {Dimensions} from 'react-native'
import {Divider, Searchbar} from 'react-native-paper';
import FilterModal from './FilterModal'
import {Modal, Button, Portal, Text, Provider} from 'react-native-paper';

const Products = ({navigation}) => {
    const screenDimensions = Number(Dimensions.get('screen').width) || 350;
    const [visible,
        setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return ( <ScrollView >

        <View
            style={{
            paddingVertical: 5,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            borderBottomColor:'#cdcdcd',borderBottomWidth:1,
        }}>
            <Searchbar
                style={{
                backgroundColor: 'transparent',
                borderColor: '#cdcdcd',
                borderWidth: 1,
                width: screenDimensions - 100
            }}
                placeholder='Search Item'
                value={''}/>

            <Button
             
                onPress={showModal}>
                Filters
            </Button>
       
        </View>
        <View style={{backgroundColor:'white',paddingTop:20,marginHorizontal:5,display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
            {[1,2,3,4,5].map(i=>{
                return <ProductCard 
                styles={{padding:5
                
                }}
                imgWidth={200}
                key={i} item={{title:'XYZ name' ,price:12.99,img:'https://www.ishtari.com/image/cache/data/system_product/90000/86000/85979/1-192x264.jpg?2'}} width={screenDimensions / 2.1} navigation={navigation}/>
            })}
        </View>
    </ScrollView> 

  )
}

export default Products