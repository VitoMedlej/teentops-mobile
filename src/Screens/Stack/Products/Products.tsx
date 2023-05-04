import React from 'react'
import {View, ScrollView, FlatList} from 'react-native'
import {ProductCard} from '../../../Components/ProductCarousel/ProductCarousel'
import {Dimensions} from 'react-native'
import { Searchbar} from 'react-native-paper';
import {Button} from 'react-native-paper';
import res from '../../../../dummy.json';
import { ProductType } from '../Product/Product';


const Products = ({navigation}) => {
    let products : ProductType[] | any = res?.products;
    
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
            // borderBottomColor:'#cdcdcd',borderBottomWidth:1,
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
            {/* {products && products?.length > 0 && products.map(product=>{
                return <ProductCard 
                styles={{padding:5
                
                }}
                imgWidth={200}
                key={product._id} item={{_id:product?._id,title:product?.title ,category:product?.category,price:product?.price,images:product?.images}} width={screenDimensions / 2.1} navigation={navigation}/>
            })} */}
            <FlatList
             data={products.slice(0,100)}
             renderItem={({item}:any) => <ProductCard 
             styles={{padding:5
             
             }}
             imgWidth={200}
             item={item} width={screenDimensions / 2.1} navigation={navigation}/>}
            
             keyExtractor={item => item.id}
            />
        </View>
    </ScrollView> 

  )
}

export default Products