import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react'

export default function Cofee() {

    const usdValue = 5.50;
    
  
  const formattedUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(usdValue);
  return (
    <View style={styles.container}>
      <View style={styles.first}>
      <Image
             source = {require('./cofee.jpg')} 
             style={styles.save} />
      </View>

      <View style={styles.second}>
         <View>
            <Text style={styles.heading}>La Colombe Coffee</Text>
         </View>
         <View>
            <Text style={styles.set}>Chicago, IL</Text>
         </View>
         <View>
            <Text style={styles.set}>1 hour ago</Text>
         </View>

      </View>
        

      <View style={styles.third}>
      <View >
          <Text style={styles.currencyText}>{formattedUSD}</Text>
        </View>

        <View>
            <Text style={styles.set}>2%</Text>
        </View>
      </View>

      <View style={styles.four}>
        <Icon name="right" size={20} color='rgba(0, 0, 0, 0.1)' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    save: {
        height: 50,
        width: 50,
        borderRadius: 10
    },
    currencyText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    set: {
        color: 'rgba(0, 0, 0, 0.3)'
    },
    heading: {
        color: '#2C3335',
        fontSize: 18,
        fontWeight: 'bold'
    },
    first: {
        marginLeft: 15,
        

    },
    second: {
        marginLeft: 10,
        marginTop: -5
    },
    third: {
        marginLeft: 50
    },
    four: {
        marginLeft: 30
    }

})