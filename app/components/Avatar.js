import React from 'react'
import { View, StyleSheet } from 'react-native'

import styled from 'styled-components/native'


const User = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	border-color: #1777f2;
	border-width: ${props => (props.story ? '3px' : 0)};
`
const UserActive = styled.View`
	width: 15px;
	height: 15px;
	border-radius: 8px;
	background: #4bcb1f;
	position: absolute;
	bottom: -2px;
	right: -2px;
	border-width: 2px;
	border-color: #ffffff;
`

const Avatar = ({ source, online, story }) => {
	return (
		<View style={styles.container}>
			<User source={source} story={story} />
			{online && <UserActive/>}
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		width: 40,
	height: 40,
	position: "relative"
	}, 
	userActive:{
		width: 15,
		height:15,
		borderRadius: 8,
		backgroundColor:"#4bcb1f",
		position: "absolute",
		bottom: -2,
		right: -2,
		borderWidth: 2,
		borderColor: "#ffffff"
	}
})
export default Avatar
