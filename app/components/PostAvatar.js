import React from 'react'
import { View, StyleSheet } from 'react-native'

import styled from 'styled-components/native'
import { Entypo } from '@expo/vector-icons'
//Custom Imports 
import Avatar from './Avatar'
import Row from './Row'
const User = styled.Text`
	font-size: 12px;
	font-weight: bold;
	color: #222121;
`
const Time = styled.Text`
	font-size: 9px;
	color: #747476;
`
const PostAvatar = ({ source, name, time }) => {
    return (
        <Row>
            <Avatar
                source={source}
            />
            <View style={{ paddingLeft: 10 }}>
                <User>{name}</User>
                <Row>
                    <Time>{time}</Time>
                    <Entypo
                        name='dot-single'
                        size={12}
                        color='#747476'
                    />
                    <Entypo
                        name='globe'
                        size={10}
                        color='#747476'
                    />
                </Row>
            </View>
        </Row>
    )
}


export default PostAvatar
