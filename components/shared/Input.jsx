import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Input = ({placeholder , password = false, onChangeText}) => {
  return (
   
    <TextInput placeholder={placeholder}
    secureTextEntry={password}
    onChangeText={(text) => onChangeText(text)}
    style={{
       padding: 10,
       borderWidth: 1,
       borderRadius: 10,
       width: '100%',
       marginTop: 20,
       fontSize: 20,
       paddingHorizontal: 20
    }}
    />
  )
}

export default Input