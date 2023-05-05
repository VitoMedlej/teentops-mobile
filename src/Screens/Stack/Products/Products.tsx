import React from 'react'
import {View, Text,Image, TouchableOpacity} from 'react-native'
import {Dimensions} from 'react-native'
import res from '../../../../dummy.json';
import { ProductType } from '../Product/Product';
import { FlashList } from "@shopify/flash-list";
import { EmptyCart } from '../../Cart/Cart';


{/* <TouchableOpacity 

onPress={()=>navigation.navigate('Product',{
    images: [''],
    category: 'string',
    title: 'mytitle',
    price: 100,
    _id: ({item})=> item._id
})}> */}
// const Item = ({item,navigation}:any) =>{
//   const screenDimensions = Number(Dimensions.get('screen').width) || 350;
    
//     return <ProductCard 
         
// imgWidth={200}
// item={item} width={screenDimensions / 2.1} navigation={navigation}/>}
const Products = ({route,navigation}) => {
    const category = route?.params?.category;
    let products : ProductType[] | any = res?.products.slice(0,100);
    products = category? products.filter(product => product.category === category) : products
    const screenDimensions = Number(Dimensions.get('screen').width) || 350;
    const screenHeight = Number(Dimensions.get('screen').height) || 750;
    // const [visible,
    //     setVisible] = React.useState(false);

    // const showModal = () => setVisible(true);
    // const hideModal = () => setVisible(false);
    return ( 

    <View  style={{display:'flex',minHeight:2,flexDirection:'row',justifyContent:'space-around'}}>
{products && products?.length > 0 ? <View
style={{minHeight:2,width:screenDimensions- 5 ,display:'flex',backgroundColor:'white',flexDirection:'row'}}
>

    <FlashList 
        numColumns={2}
        data={products.slice(0,20)}
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
        
        estimatedItemSize={20}
        />
</View>
:
<EmptyCart
uri='https://a3b6t9q7.stackpathcdn.com/assets/img/no-product-found.png'
screenHeight={screenHeight} title='No Products Found!' desc='Try a different category'/>
}
   
    </View>


       

  )
}

export default Products


 {/* <View
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
        <>

        <View style={{backgroundColor:'white',paddingTop:20,marginHorizontal:5,display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
            {products && products?.length > 0 && products.map(product=>{
                return <ProductCard 
                styles={{padding:5
                
                }}
                imgWidth={200}
                key={product._id} item={{_id:product?._id,title:product?.title ,category:product?.category,price:product?.price,images:product?.images}} width={screenDimensions / 2.1} navigation={navigation}/>
            })}
            <View style={{display:'flex',flexDirection:'row', backgroundColor:'white',height:Dimensions.get("screen").height * 10 , width: Dimensions.get("screen").width  }}>

            <View style={{ height:Dimensions.get("screen").height * 100  , width: Dimensions.get("screen").width   }}>

            <FlashList
            numColumns={2}
           estimatedItemSize={50}
            // max={10}
             data={products.slice(0,10)}
            //  renderItem={(item)=>Item({item,navigation})}
            renderItem={({item})=>Item({item,navigation})}
             keyExtractor={(item:any) => item._id}
            />
            </View>
            </View>

        </View>
        </>

    */}