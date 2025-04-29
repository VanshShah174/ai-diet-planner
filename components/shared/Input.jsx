import { View, Text, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'

const Input = ({placeholder , password = false, onChangeText, label =""}) => {
  return (
   <View
   style ={{
    marginTop: 15,
    width: '100%',
   }}
   >
    <Text style={{
      fontWeight:'medium',
      fontSize: 18,
    }}>{label}</Text>
    <TextInput placeholder={placeholder}
    secureTextEntry={password}
    onChangeText={(text) => onChangeText(text)}
    style={{
       padding: 15,
       borderWidth: 1,
       borderRadius: 10,
       width: "auto",
       fontSize: 20,
       paddingVertical: 20, 
       marginTop: 2,
       }}
    />
    </View>
  )
}

export default Input