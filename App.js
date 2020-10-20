// import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import LoginScreen from './LoginScreen'
import ContactsScreen from './ContactsScreen'
import Contact from './components/Contact'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:"",
      names:["ama","kofi","sam","Alberto","ama","kofi","sam","Alberto","ama","kofi","sam","Alberto"]
    }
  }
  render(){
    return (
      <View style={styles.container}>
        
        
        <ContactsScreen/>
        

        
        

      















          {/* <TextInput
           style={styles.input} 
           placeholder="email" 
           autoCapitalize="none"
           autoCorrect={false}
          value={this.state.email}
          onChangeText={(email)=>{
            this.setState({email})
          }}
           />


         <TextInput
           style={styles.input} 
           placeholder="password" 
           autoCapitalize="none" 
           autoCorrect={false}
           secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password)=>{
            this.setState({password})
          }} 
          />

         <TouchableOpacity style={styles.buttonContainer}>
           <Text style={styles.button}>Login</Text>
         </TouchableOpacity> */}
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {     
    flex:1,
   marginTop:100,
  //  backgroundColor:"green"
  },
  input:{
    backgroundColor:"yellow",
    height: 60,
    marginLeft:15,
    marginBottom:5
  },
  button:{
    color:"white",
    fontSize:20
   
  },
  buttonContainer:{
    marginHorizontal:20,
    backgroundColor:"blue",
    height:35,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:6
  }

    
 
});


export default App
