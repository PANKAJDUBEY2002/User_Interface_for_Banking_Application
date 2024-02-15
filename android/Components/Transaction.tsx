import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Circle from './Circle';
export default function Transaction() {
  return (
    <View style={styles.arrange}>
       <View>
         <Text style={styles.text}>Latest Card Transactions</Text>
       </View>

       <View style={styles.arrow}>
        <Circle />
         <Icon name="filter-variant" size={25} color='black' style={styles.inside} />
         
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    arrange: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    arrow: {
        marginLeft: 90,
        marginTop: 2
    },
    inside: {
        marginTop: -27,
        marginLeft: 5
    }
})