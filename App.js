import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0)
  
  let handlepressed=()=>{
    
    setNumber(number + 1)
  }


  return (
    <View style={styles.container}>
     <Text style={styles.txt1}>{number * 5}</Text>
     <TouchableOpacity style={styles.btn} onPress={handlepressed}>
      <Text style={styles.txt}>Add</Text>
     </TouchableOpacity>
     <Text>You've Pressed {number} </Text>
     {/* <Button style={styles.btn} title="Add" onPress={handlepressed}>
     </Button>
     <Text>You've Pressed {number} </Text> */}
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
  txt1:{
    fontWeight: 'bold',
    fontSize: 40,
  },
  btn:{
    width:50,
    height:50,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30
  },
  txt:{
    color: 'white',
    fontWeight: 'bold',
  }
});
