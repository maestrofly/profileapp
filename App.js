// import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,} from 'react-native';


class App extends Component{
  render(){
    return (
      <View style={styles.container}>
          <TextInput
           style={styles.input} 
           placeholder="email" 
           autoCapitalize="none"
           autoCorrect={false}
          //  secureTextEntry={true}
          value="good"
          onChangeText={(text)=>{
            console.log(text)
          }}
           />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
   marginTop:100,
   backgroundColor:"green"
  },
  input:{
    backgroundColor:"yellow",
    height: 60,
    marginLeft:15
  }

    
 
});


export default App
