import React from 'react'
import {
  
    Platform,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
  } from 'react-native';
  import {SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, initialWindowMetrics} from 'react-native-safe-area-context';
import Navbar from '../../Components/Navbar/Navbar';
import { Button, Divider } from 'react-native-paper';



const Cates = 
[
    {
    title : 'Kitchen appliances',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrOdgI6T84XG83mTxBRY7SuSEWMbl-cXktVv4pK_NNMPA07KkRtHZTieHuwdrBY8jS_s&usqp=CAU'
},
{
    title : 'Electronics',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQ3jJbCfRNTEajFy8AeY6PNn7f9gaSPn0Jn6i7BxQywhwXFU_DP7Ki9bxzLp4NKNWdD4&usqp=CAU'
}
,
{
    title : 'Small kitchen appliances',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9v3KdAyVn8wN_oSd4998O2uX9ra60pxNvjQ&usqp=CAU'
},
{
    title : 'Vaccum cleaners',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Uh-eb7aR9nn7xSIxw0_4JDieqToMZ1d-c76M7ZNmySuKbsHpOopT1ftZgDT1Lc-BCHc&usqp=CAU'
},
{
    title : 'TVs',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHMoDxPgiWWfvgU-g8Psb9NwXl_sE-McRT54fZCa3HtOmiKSZ2zh-2E8qo3F6ediJklo&usqp=CAU'
},
{
    title : 'Heaters',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eoyk9ISy4bpLzOUwSTJrq7mgo_eWCjzYqJ6XOIClZ4v6Wdtyy7yxTh_2b1gixVR6akM&usqp=CAU'
},
{
    title : 'Tools',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kBb8FcVhd-pUkHaX-EDSXS_ZBbQ-vLlwOPapOmccqJbMSivrVENbJt4IFPvux__ue-w&usqp=CAU'
},
{
    title : 'Fans',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoK1J0QerT9fqTNHXowmleyO6k5Xj1UgMefC5n8nikrIR3RkfqiVloweUinRxX-DypwMg&usqp=CAU'
}


]

const Cart = ({navigation}) => {
  const screenDimensions = Number(Dimensions.get('screen').width) || 350;
  const screenHeight = Number(Dimensions.get('screen').height) || 650;

  return (
    <SafeAreaView>
      <Navbar navigation={navigation} isHome={true} />
      <ScrollView style={{padding:5,paddingVertical:10,backgroundColor:'white'}}>
            <Button onPress={()=>navigation.navigate('Products')}   style={{marginBottom:5}} contentStyle={{flexDirection: 'row-reverse'}} icon={'skip-next-outline'}>
                    <Text>
                        View All
                    </Text>
            </Button>
            <Divider/>
            <View style={{borderTopWidth:1,paddingTop:15,borderColor:'#e4e4e4',display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap'}}>
{                Cates.map(i=>{
                  return <View style={{marginVertical:15,width:screenDimensions / 2.2,
                  
                  alignItems:'center'}}>
                    <TouchableOpacity onPress={
                        ()=>navigation.navigate('Home', { screen: 'Products' })
                    }>

                      <Image
                            style={{
                            borderColor:'#e9e9e9',
                            borderWidth:1,
                            borderRadius:5000,padding:5,
                            width: 90,
                            height: 90
                        }}
                            resizeMode={'contain'}
                            source={{
                            uri: `${i.img|| 'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'}`
                        }}/>
                        <Text style={{marginTop:5,width:90,textAlign:'center',color:'#8b8b8b'}}>
                          {i.title}
                        </Text>
                    </TouchableOpacity>

                  </View>  
                })}
            </View>
</ScrollView>
    </SafeAreaView>
  )
}

export default Cart