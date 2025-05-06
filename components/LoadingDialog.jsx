import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '../shared/Colors'

const LoadingDialog = ({loading = false}) => {
  return (
    <Modal transparent visible={loading}>
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00000070",
        }}>
            <View style ={{
                padding: 20,
                borderRadius:15,
                backgroundColor: Colors.PRIMARY,
                alignItems: "center",
            }}>
                <ActivityIndicator
                 size={"large"} color={Colors.WHITE} />
                 <Text style={{
                    color: Colors.WHITE,
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 10,
                 }}>Loading...</Text>
            </View>
        </View>
    </Modal>
  )
}

export default LoadingDialog