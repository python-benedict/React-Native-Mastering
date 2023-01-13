import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the master react native project </Text>
      <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL('https://www.youtube.com/')}}>
        <Text style={styles.buttonText}>Youtube Buttons</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width: '70%',
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText:{
    fontWeight: 'bold',
    color: '#ffffff'
  }
});
