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
        <View style={styles.container}>                               
            <Text style={styles.msg}>
                Enter Email :
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => checkEmail(e)}  
            />            
            <Text style={styles.msg}>
                {emailmsg}
            </Text>
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
      container:
      {       

      }
})