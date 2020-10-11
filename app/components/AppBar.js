import React from 'react'

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {MaterialCommunityIcons } from '@expo/vector-icons'



const AppBar = () => {
	return (
		<View style={styles.container}>
			
			<Text style={styles.text}>Vista APP</Text>
			<View style={styles.row}>
				<TouchableOpacity style={styles.button}>
					<MaterialCommunityIcons name='search' size={29} color='black' />
				</TouchableOpacity>

				<TouchableOpacity  style={styles.button}>
					<MaterialCommunityIcons name='facebook-messenger' size={29} />
				</TouchableOpacity>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	text:{
	color: "#3a86e9",
	fontSize: 25,
	fontWeight: "bold",
	letterSpacing: -0.3
	}, 
	container:{
	width: "100%",
	height: 58,
	paddingVertical: 0 ,
	paddingVertical:11,
	alignItems: "center",
	flexDirection: "row",
	justifyContent: "space-between"}, 
	row:{
		flexDirection: "row",
	}, 
	button:{
		width: 42,
		height: 42,
		borderRadius: 21,
		backgroundColor: "#eeeeee",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 16,
	
	}
})

export default AppBar
