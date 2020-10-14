import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import {

    MaterialCommunityIcons
} from '@expo/vector-icons'

const Btn = ({ title, iconName, IconLibrary = MaterialCommunityIcons, onPress, ...otherProps }) => {

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <View style={styles.icon}>
                    <IconLibrary
                        name={iconName}
                        {...otherProps}
                    />
                </View>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({

    button: {
        flexDirection: "row"
    },
    icon: {
        marginRight: 6
    },
    text: {
        fontSize: 12,
        color: "#424040"
    }
})

export default Btn; 