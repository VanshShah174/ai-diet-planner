import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Colors from './../../shared/Colors'
import Input from '../../components/shared/Input'
import { FemaleSymbolIcon, MaleSymbolIcon, WeightScaleIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react-native';


const Preference = () => {
  return (
    <SafeAreaView style={{
      padding: 20,
      backgroundColor: Colors.WHITE,
      height: '100%',
    }}>
      <Text 
      style = {{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30
      }}
      >Tell us about yourself</Text>

      <Text style ={{
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        color: Colors.GRAY

      }}>
        This help us create your personlized meal plan and workout plan.
      </Text>

      <View 
      style ={{
        display: 'flex',
        flexDirection: 'row',
        gap:10
      }}
      >
        <View style={{
      flex: 1
        }}>
        <Input placeholder={'e.g. 70 KG'} label='weight (kg)'  />
        </View>
        <View style={{
          flex: 1,
        }}>
        <Input placeholder={'e.g. 5.10'} label='Height (ft)'  />
        </View>
      </View>

      <View style ={{
        marginTop: 20,
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}>
          Gender
        </Text>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          // marginTop: 10,
          // justifyContent: 'space-between'
        }}>
          <View style= {{
            padding: 10,
            borderWidth: 1,
            borderColor: Colors.GRAY,
            borderRadius: 10,
            flex: 1,
            alignItems: 'center',

          }}>
            <HugeiconsIcon icon={MaleSymbolIcon} size={50} color={Colors.BLUE} />
          </View>
          <View style= {{
            padding: 10,
            borderWidth: 1,
            borderColor: Colors.GRAY,
            borderRadius: 10,
            flex: 1,
            alignItems: 'center',
          }}>
            <HugeiconsIcon icon={FemaleSymbolIcon} size={50}  color={Colors.PINK}/>
          </View>
        </View>
      </View>

      <View style ={{
        marginTop: 20
      }}>
        <Text>What's Your Goal?</Text>
        <View>
          <HugeiconsIcon icon={WeightScaleIcon} />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Preference