import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function HomeHeader() {

    const {user} = useContext(UserContext)

  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }}>
      <Image source={require('./../assets/images/user.png')}
      style={{
        width: 60,
        height: 60,
        borderRadius: 50,
        // marginTop: 20,
      }}
      />
      <View>
        <Text 
        style={{
            fontSize:20
        }}
        >Hello,👋 </Text>
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            // color: '#000'
        }}>{user?.name}</Text>
      </View>

        


    </View>
  )
}