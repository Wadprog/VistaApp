import React from 'react'
import { View, StyleSheet } from 'react-native'

const Component = ({ children }) => {
    return (
        <View style={styles.row}>{children}</View>)
}
const styles = StyleSheet.create({
    row: {
        alignItems: "center",
        flexDirection: "row",
    }
})
export default Component