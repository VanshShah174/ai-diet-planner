import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Home03Icon, SpoonAndForkIcon, UserSquareIcon } from '@hugeicons/core-free-icons';
import { Colors } from './../../shared/Colors';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
    }}>
        <Tabs.Screen name="Home" options={{
            tabBatIcon: ({color,size}) => <HugeiconsIcon
            icon={Home03Icon}
            size={size}
            color={color}
            strokeWidth={1.5}
          />
        }} />
        <Tabs.Screen name="Meals" options={{
            tabBatIcon: ({color,size}) => <HugeiconsIcon
            icon={SpoonAndForkIcon}
            size={size}
            color={color}
            strokeWidth={1.5}
          />
        }}  />   
        <Tabs.Screen name="Progress" options={{
            tabBatIcon: ({color,size}) => <HugeiconsIcon
            icon={AnalyticsUpIcon}
            size={size}
            color={color}
            strokeWidth={1.5}
          />
        }} />
        <Tabs.Screen name="Profile" options={{
            tabBatIcon: ({color,size}) => <HugeiconsIcon
            icon={UserSquareIcon}
            size={size}
            color={color}
            strokeWidth={1.5}
          />
        }} />
    </Tabs>
  )
}

export default TabLayout