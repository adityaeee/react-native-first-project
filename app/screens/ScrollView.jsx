import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DATA = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
]


const ScrollViewScreen = () => {
  return (
    <View>
      <Text>ScrollView</Text>
      <ScrollView>
        {DATA.map((item) => {
            <View key={item.id} style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        })
        }
      </ScrollView>
    </View>
  )
}

export default ScrollViewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    item: {
        backgroundColor: '#f903ef',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10
    },
    title:  {
        fontSize: 12
    }
})