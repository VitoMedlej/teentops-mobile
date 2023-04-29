import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/Components/Navbar/Navbar';
import { Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <PaperProvider>
    <View style={styles.container}>
    
      <Text>Open up App.js to start working on your app!</Text>
      <Navbar/>
      <StatusBar backgroundColor='gray' />
    {/* <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="about" component={Settings} />
    </Stack.Navigator> */}
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
