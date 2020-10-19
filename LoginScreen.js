import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
export default  class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                  <View styles={styles.loginTextContainer}>
                      <Text style={styles.loginText}>Log in</Text>
                  </View>

                  <View>
                       <TextInput 
                           style={styles.input} 
                           placeholderTextColor="#aaaaaa"
                            placeholder="Username" />
                       <TextInput 
                          style={styles.input} 
                          placeholderTextColor="#aaaaaa"
                          secureTextEntry={true}
                          placeholder="Password"/>
                       <Text style={styles.forgotPassword}>Forgot password?</Text>
                  </View>

                  <View>
                      <TouchableOpacity style={styles.buttonContainer}>
                          <Text style={styles.buttonText}>Log in</Text>
                      </TouchableOpacity>

                  </View>

                  <View style={styles.noAccountContainer}>
                      <Text style={styles.noAccountText}>Don't have an account?</Text>
                      <Text style={styles.signUpText}>Sign Up</Text>
                  </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
      container:{
          marginHorizontal:50
      }, 
      loginText:{
          fontSize:50,
          color:"#690a91",
          marginBottom:30
       },
       loginTextContainer:{
        //    marginBottom:30
       },
       input:{
          borderBottomWidth:2,
          borderBottomColor:"#690a91",
          fontSize:20,
          height: 50,
          marginTop:20
       },
       forgotPassword:{
           alignSelf:"flex-end",
           marginVertical:3,
           color: "#64b2d1"
       },
       buttonContainer:{
           height:50,
           backgroundColor:"#690a91",
           justifyContent:"center",
           alignItems:"center",
           borderRadius:10,
           marginVertical:50
       },
       buttonText:{
           color:"white",
           fontSize:25
       },
       noAccountContainer:{
           flexDirection:"row",
           justifyContent:"center"
       },
       noAccountText:{
           marginRight:10,
           fontSize:15
       },
       signUpText:{
           fontSize:15,
           color: "#690a91"
       }
})



