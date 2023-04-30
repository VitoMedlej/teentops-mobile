import React from 'react'
import {
  
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Dimensions,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
import Navbar from '../../Components/Navbar/Navbar';
import Carousel from 'react-native-snap-carousel';
  
const images = [
  {
    title : 'P1',
    text : 'p1 text',
   img: `https://www.ishtari.com/image/data/system_banner/10000/1800/1673/web-rechargeable-lightff.png`
  },
  {
    title : 'P2',
    text : 'p2 text',
   img:  `https://www.ishtari.com/image/data/system_banner/10000/1800/1673/sonifer-web.png`
  },

 
]


const Item = (props) => {
  console.log('props: ', props);
  return <View style={{backgroundColor:props.index === 1 ?'red':'blue',width:props.width || 100,height:90}}>
    <Text>
      {props.item.title}
    </Text>
  </View>
}
const Home = ({navigation, route}) => {
  const screenDimensions = Number(Dimensions.get('screen').width) || 100;
  return (
    <SafeAreaView>
        <Navbar isHome={route.name === 'Home'} navigation={navigation}/>
        <Carousel
              // ref={(c) => { this._carousel = c; }}
              // data={this.state.entries}
              data={images}
              renderItem={(text)=> Item({...text,width:screenDimensions})}
              sliderWidth={screenDimensions}
              itemWidth={screenDimensions}
              inactiveSlideShift={1}
              useScrollView={true}   
            />
        <Text>
            hello from home
        </Text>
    </SafeAreaView>
  )
}

export default Home