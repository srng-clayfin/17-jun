import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const RegExpr = () => 
{
    const regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [emailmsg,setEmailmsg] = useState("");
    
    const checkEmail = (e) =>
    {   
            if(regemail.test(e) === false)
            {
                setEmailmsg('Not Valid');            
            }
            else
            {
                setEmailmsg('Valid :)');            
            }        
    }
    
    
    
    
    return (
        <View style={{marginTop:50}}>                               
            <Text style={styles.msg}>
                Enter Email
            </Text>
            <TextInput
                style={styles.input}
                autoFocus={true}
                placeholder="Enter Email : "
                onChangeText={(e) => checkEmail(e)}  
            />            
            <Text style={styles.msg}>
                {emailmsg}
            </Text>

            <View style={{borderWidth:3,borderColor:'pink',margin:20}} >
                <Text style={styles.msg}>                    
                    Secure Text
                </Text>
                <TextInput
                    style={styles.input1}        
                    placeholder="Secure Text : "
                    secureTextEntry={true}
                />                            
            </View>
        </View>
  )
}

export default RegExpr

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      msg:
      {
        fontWeight:"bold",
        fontSize:22,
        marginLeft:"5%"
      },  
      input1: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})