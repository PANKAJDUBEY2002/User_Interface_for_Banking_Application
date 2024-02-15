import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Menu from './android/Components/Menu'
import DebitCard from './android/Components/DebitCard'
import BalanceDue from './android/Components/BalanceDue'
import Bottom from './android/Components/Bottom'
import CardBalance from './android/Components/CardBalance'
import Bar from './android/Components/Bar'
import Barfirst from './android/Components/Barfirst'
import SavingCard from './android/Components/SavingCard'
import Transaction from './android/Components/Transaction'
import Cofee from './android/Components/Cofee'
import Apple from './android/Components/Apple'



const App = () => {
  return (
    <SafeAreaView>
       <ScrollView>
        <Menu />
        <DebitCard />
        <CardBalance />
        <Bar />
        <SavingCard />
        <Transaction />
        <Cofee />
        <Apple />
       </ScrollView>
    </SafeAreaView>
  )
}

export default App
