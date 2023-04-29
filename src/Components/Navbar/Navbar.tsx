import React from "react";
import {
  
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
  import { Appbar ,Button, MD3Colors} from 'react-native-paper';
  import { Searchbar } from 'react-native-paper';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  return (

    <Appbar.Header style={{borderBottomColor:'#f3f3f3',paddingBottom:1,borderBottomWidth:1}}>
    {/* <Appbar.BackAction onPress={() => {}} /> */}
    <View>
    <TouchableOpacity   onPress={() => console.log('Pressed')}>
    <Image
     style={{width: 50, marginRight:5, height: 50}}
     resizeMode={'cover'}
     source={{uri:'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'}} />
     </TouchableOpacity>
     </View>
    
     <Searchbar
      placeholder="Search"
      style={{width:'68%',margin:5,backgroundColor:'#f3f3f3'}}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
    <Image
     style={{width: 40, marginHorizontal:4, height: 50,borderRadius:50}}
     resizeMode={'cover'}
     source={{uri:'https://cdn-icons-png.flaticon.com/512/5968/5968841.png'}} />
  </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    padding:16,
    backgroundColor: 'red',
  },
});
