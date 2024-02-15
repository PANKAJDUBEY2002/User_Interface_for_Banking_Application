import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DebitCard() {
  return (
    <View style={styles.upper}>
      <Image
             source = {require('./card.png')} 
             style={styles.card} />
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        height: 200,
        width: 370,
        
        
        

        
    },
    upper: {
        marginTop: 20,
        borderRadius: 20,
         margin: 10,
        borderRightColor: '#F3CC79',
        borderRightWidth: 8,

        backgroundColor: '#EAF0F1',
        paddingLeft: 10,
        paddingBottom: 15,
        paddingTop: 15,
        paddingRight: 25

        

    }
})