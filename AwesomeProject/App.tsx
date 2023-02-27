import React from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native'

import  styles  from './theme/appTheme'
import CalculadoraScreen from './src/screens/CalculadoraScreen'


export const App = () => {
  return (
   <SafeAreaView style={styles.fondo}> 
      <StatusBar 
         backgroundColor="black"
         barStyle='light-content'

      />
      <CalculadoraScreen/>
      
   </SafeAreaView>
  )
}

