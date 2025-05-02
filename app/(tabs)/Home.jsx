import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { UserContext } from './../../context/UserContext'
import { useRouter } from 'expo-router'
import HomeHeader from '../../components/HomeHeader'
import TodayProgress from '../../components/TodayProgress'
import GenerateRecipeCard from '../../components/GenerateRecipeCard'

const Home = () => {
    const {user} = useContext(UserContext)
    const router = useRouter()

    useEffect(() =>{
        if(!user?.weight) {
            router.push('/preferance')
        }
    },[user])

  return (
   <View style ={{
    padding:20
   }}>
    <HomeHeader />
    <TodayProgress />
    <GenerateRecipeCard />
   </View>
  )
}

export default Home