import React from "react";
import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {Searchbar} from 'react-native-paper';


export default function Navbar({navigation,isHome}) {
    const [searchQuery,
        setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View
            style={{
            marginTop:isHome ? 0 : 30,
            borderBottomColor: '#f3f3f3',
            display: 'flex',
            height: 'auto',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            alignContent: 'center',
            paddingVertical: 10,
            margin: 0,
            borderBottomWidth: 1
        }}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View
                        style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <Image
                            style={{
                            width: 50,
                            height: 50
                        }}
                            resizeMode={'cover'}
                            source={{
                            uri: 'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'
                        }}/>
                        <Text style={{fontWeight:'800',fontSize:14}}>
                            TeenTops
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Searchbar
                style={{
                width: '50%',
                height:40,
                textAlign:'center',
                backgroundColor: '#f3f3f3'
            }}
                onChangeText={onChangeSearch}
                value={searchQuery}/>
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                <Image
                    style={{
                    width: 50,
                    height: 50,
                    borderRadius: 0
                }}
                    resizeMode={'cover'}
                    source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968841.png'
                }}/>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        backgroundColor: 'red'
    }
});
