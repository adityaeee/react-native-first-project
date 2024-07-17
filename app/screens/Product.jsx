import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'

const Product = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
      <Button title="Go to product detail" onPress={() => navigation.navigate('FlatList')} />
      <Button title="Go to product detail" onPress={() => navigation.navigate('SectionList')} />
      <Button title="Go to product detail" onPress={() => navigation.navigate('ScrollView')} />
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})