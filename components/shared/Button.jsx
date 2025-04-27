import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/shared/Colors'

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        width: '100%',
        borderRadius: 10,
    }}
    >
      <Text
      style ={{
        color: Colors.WHITE,
        fontSize: 20,
        textAlign: 'center',
      }}
      >{title}</Text>
    </TouchableOpacity>
  )
}

export default Button