import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CardBalance() {

    const usdValue = 1682.55;
    const usd=8317.45;
  
  const formattedUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(usdValue);
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(usd);
  return (
    <View style={styles.left}>
       <View style={styles.back}>
          <View>
             <Text style={styles.Balance}>Card Balance</Text>
          </View>
          <View>
            <Text style={styles.currencyText}>{formattedUSD}</Text>
          </View>
          <View>
          <Text style={styles.currency}>{formattedUSD} Available</Text>
          </View>
       </View>

       <View style={styles.back}>
         <View>
            <Text style={styles.Balance}>Payment Due</Text>
         </View>
         <View>
            <Text style={styles.currencyText}>Sep 30</Text>
         </View>

       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    currencyText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black'


    },
    currency: {
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.3)'

    },
    Balance: {
        fontSize: 20,
        color: 'black'

    },
    left: {
        flex: 1,
        flexDirection: 'row'
    },
    back: {
        marginLeft: 40,
        
    }
})