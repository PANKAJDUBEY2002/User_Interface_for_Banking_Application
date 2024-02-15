import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackedBarChart } from "react-native-chart-kit";
const data = {
  labels: ["h", "j","i","i","i","i","i"],
  legend: ["k", "e", "g","o","i","g","o"],
  data: [
    [50,50],
    [40,40],
    [30,30],
    [45,45],
    [48,48],
    [25,25],
    [10,10]
    
  ],
  barColors: ["#F9690E", "#049372", "#a4b0be","#ced6e0","#ced6e0","#ced6e0","#ced6e0"]
  
};


export default function Bar() {

  const usdValue = 1682.55;
    
  
  const formattedUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(usdValue);
   
  return (
    <View style={styles.arrange}>
      <View>
        <View>
          <Text style={styles.activity}>Weekly Activity</Text>
        </View>
        <View>
        <Text style={styles.currency}>+{formattedUSD} Daily Cash</Text>
        </View>
        <View >
      <StackedBarChart 
  
  data={data}
  width={250}
  height={80}
  
 
  chartConfig = {{
    backgroundGradientFrom: 'yellow',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: 'white',
        backgroundGradientToOpacity: 0.5,
        color: (opacity) => `rgba(0, 0, 0, 0)`, // Dark blue color
        strokeWidth: 2,
        barPercentage: 0.2,
        useShadowColorFromDataset: false,
        
        withHorizontalLines: false, 
        showLegend: false,
  }}
  withHorizontalLabels={false}
  withVerticalLabels={false}
  style={[data.barColors.map((colors, index) => ({ color: colors && colors[index] ? colors[index] : 'gray' })),styles.bar]}
  
  
/>
</View>
</View>
<View >
   <View style={styles.bor}>
     <Text style={styles.text}>Pay Early</Text>
   </View>
</View>


</View>
    
  )
}

const styles = StyleSheet.create({
  arrange: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  text: {
     fontSize: 22,
    
     
     color: 'black'
    
    
  },
  currency: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.3)',
    marginLeft: 25
  },
  activity: {
    marginLeft: 25,
    color: 'black'
  },
  bar: {
         
         marginLeft: -30,
         
  },
  bor: {
     backgroundColor: '#EAF0F1',
     marginTop: 40,
     paddingLeft: 30,
     height: 50,
     width: 150,
     paddingTop: 8,
     borderRadius: 124,
     marginLeft: 20
     
  },
  
  
})