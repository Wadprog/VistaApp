import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { Entypo, AntDesign } from "@expo/vector-icons";

import Avatar from "./Avatar";
import Button from "./Btn";
import Row from "./Row";
import Separator from "./Separator";

const Container = styled.View`
  flex: 1;
`;
const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;

const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;
const Time = styled.Text`
  font-size: 9px;
  color: #747476;
`;
const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;
const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;
const Footer = styled.View`
  padding: 0 11px;
`;
const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const IconCount = styled.View`
  background: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;
const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;

const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;

const Index = ({ user, postdetails }) => {
  return (
    <>
      <Container>
        <Header>
          <Row>
            <Avatar source={user.image} />
            <View style={{ paddingLeft: 10 }}>
              <User>{user.name}</User>
              <Row>
                <Time>{postdetails.time}</Time>
                <Entypo name="dot-single" size={12} color="#747476" />
                <Entypo name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>

          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </Header>

        <Post>{postdetails.msg}</Post>
        {postdetails.image && <Photo source={postdetails.image} />}

        <Footer>
          <FooterCount>
            {postdetails.likes && postdetails.likes.length > 0 && (
              <Row>
                <IconCount>
                  <AntDesign name="like1" size={12} color="#FFFFFF" />
                </IconCount>
                <TextCount>{postdetails.likes.length} likes</TextCount>
              </Row>
            )}
            {postdetails.comments && postdetails.comments.length > 0 && (
              <TextCount>{postdetails.comments.length} comments</TextCount>
            )}
          </FooterCount>

          <Separator />

          <FooterMenu>
            {Btns.map((btn) => (
              <Button {...btn} />
            ))}
          </FooterMenu>
        </Footer>
        <BottomDivider />
      </Container>
    </>
  );
};
export default Index;

const Btns = [
  {
    IconLibrary: AntDesign,
    iconName: "like2",
    title: "like",
  },
  {
    iconName: "comment-outline",
    title: "Comment",
  },
  {
    iconName: "share-outline",
    title: "Share",
  },
];
