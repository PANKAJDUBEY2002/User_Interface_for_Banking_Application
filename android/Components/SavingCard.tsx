import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
export default function SavingCard() {
  const usdValue = 2106.19;

  
  const formattedUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(usdValue);
  return (
    <View style={styles.arrange}>
       <View>
        <Image
             source = {require('./saving.jpg')} 
             style={styles.save} />
       </View>

       <View style={styles.current}>
           <View>
             <Text style={styles.account}>Savings Account</Text>
           </View>
           <View>
            <Text style={styles.currencyText}>Current Balance: {formattedUSD}</Text>
           </View>
       </View>
       <View style={styles.arrow}>
         <Icon name="right" size={20} color='rgba(0, 0, 0, 0.1)' />
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    save: {
        height: 50,
        width: 50
    },
    currencyText: {
      fontSize: 12,
    color: 'rgba(0, 0, 0, 0.3)'
    },
    account : {
      color: 'black'
    },
    arrange : {
      flex: 1,
      flexDirection: 'row',
      marginTop: 20
    },
    current: {
      marginLeft: 7,
      marginTop: 5
    },
    arrow: {
      marginLeft: 160,
      marginTop: 20
    }
})