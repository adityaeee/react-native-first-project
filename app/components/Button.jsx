import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary
    const outlinedColor = COLORS.white
    const bgColor = props.filled ? filledBgColor : outlinedColor
    const textColor = props.filled ? COLORS.white : COLORS.primary

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{backgroundColor: bgColor},
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{fontSize: 18, ... {color: textColor} }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        border: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
    },

})