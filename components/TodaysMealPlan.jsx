import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { HugeiconsIcon } from "@hugeicons/react-native";
import { CalendarAdd01Icon } from '@hugeicons/core-free-icons';
import Colors from '../shared/Colors';
import Button from './shared/Button';


const TodaysMealPlan = () => {

    const [mealPlan, setMealPlan] = useState()
  return (
    <View style ={{
        marginTop: 20,
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
      }}>Today's Meal Plan</Text>

      {!mealPlan &&  (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            padding: 20,
            backgroundColor: Colors.WHITE,
            borderRadius: 10,
            marginTop: 10,
        }}>
            <HugeiconsIcon icon={CalendarAdd01Icon} color={Colors.PRIMARY} size={50} />
            <Text style={{
                fontSize: 18,
                color: Colors.PRIMARY,
                marginTop: 10,
                marginBottom: 10,
            }}>No Meal Plan Found</Text>
            <Button  title={'Create New Plan'} />
        </View>
      )}

    </View>
  )
}

export default TodaysMealPlan