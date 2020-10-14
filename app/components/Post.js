import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons
} from '@expo/vector-icons'
//custom imports 
import colors from '../config/colors'
import Text from "./AppText"
import Button from './Btn'
import Row from './Row'
import PostAvatar from './PostAvatar'
import Separator from './Separator'

import styled from 'styled-components/native'
const Container = styled.View`
	flex: 1;
`
const Header = styled.View`
	height: 50px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 6px;
	padding: 0 11px;
`

const Post = ({ user, text, image, postDetails, style, children }) => {
  return (
    <>
      <Container>
        <Header>


          <PostAvatar
            name='Ray'
            source={require('../assets/user3.jpg')}
            time='9m'
          />
          <Text style={styles.post}>{text}</Text>
          {image && <Image style={styles.image} source={image} />}
        </Header>
        <View style={styles.footer}>
          <View style={styles.footerCount}>
            <Row>
              <View style={styles.iconCount}>
                <AntDesign name='like1' size={12} color='#FFFFFF' />
              </View>
              <Text style={styles.textCount}>Likes</Text>
            </Row>
            <Text style={styles.textCount}>Comments</Text>
          </View>
          <Separator />
          <View style={styles.footerMenu}>
            <Button
              IconLibrary={AntDesign}
              iconName='like2'
              size={20}
              color='#424040'
              title='Like' />

            <Button
              iconName='comment-outline'
              size={20}
              color='#424040'
              title='Comment' />

            <Button
              iconName='share-outline'
              size={20}
              color='#424040'
              title='Share' />

          </View>
        </View>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 0,
    paddingHorizontal: 11,
  },
  footerCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 0,
  },
  footerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 0,
  },
  iconCount: {
    backgroundColor: "#1878f3",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6
  },

  image: {
    marginTop: 9,
    width: "100%",
    height: 300,
  },
  post: {
    fontSize: 12,
    color: "#222121",
    lineHeight: 16,
    paddingVertical: 0,
    paddingHorizontal: 11,

  },
  textCount: {
    fontSize: 11,
    color: "#424040"
  }
});

export default Post
