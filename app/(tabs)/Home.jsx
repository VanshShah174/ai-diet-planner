import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { UserContext } from './../../context/UserContext'
import { useRouter } from 'expo-router'
import HomeHeader from '../../components/HomeHeader'
import TodayProgress from '../../components/TodayProgress'
import GenerateRecipeCard from '../../components/GenerateRecipeCard'
import TodaysMealPlan from '../../components/TodaysMealPlan'

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
    <TodaysMealPlan />
   </View>
  )
}

export default Home