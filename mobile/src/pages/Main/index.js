import React from "react";

import {
  Container,
  Img,
  List,
  Avatar,
  Card,
  Footer,
  Name,
  Bio,
  Buttons,
  Button,
  Icon,
  Shadow
} from "./styles";

import logoImg from "../../assets/logo.png";
import likeIcon from "../../assets/like.png";
import dislikeIcon from "../../assets/dislike.png";

function Main() {
  return (
    <Container>
      <Img source={logoImg} />
      <List>
        <Card>
          <Avatar
            source={{
              uri: "https://avatars3.githubusercontent.com/u/43364141?v=4"
            }}
          />
          <Footer>
            <Name>Greyson Filho</Name>
            <Bio>
              Full-stack programmer, fascinated by JavaScript, computer
              technician by IFAL and currently attending the Faculty of Computer
              Science at UFAL
            </Bio>
          </Footer>
        </Card>
        <Card>
          <Avatar
            source={{
              uri: "https://avatars3.githubusercontent.com/u/43364141?v=4"
            }}
          />
          <Footer>
            <Name>Greyson Filho</Name>
            <Bio>
              Full-stack programmer, fascinated by JavaScript, computer
              technician by IFAL and currently attending the Faculty of Computer
              Science at UFAL
            </Bio>
          </Footer>
        </Card>
        <Card>
          <Avatar
            source={{
              uri: "https://avatars3.githubusercontent.com/u/43364141?v=4"
            }}
          />
          <Footer>
            <Name>Greyson Filho</Name>
            <Bio>
              Full-stack programmer, fascinated by JavaScript, computer
              technician by IFAL and currently attending the Faculty of Computer
              Science at UFAL
            </Bio>
          </Footer>
        </Card>
      </List>
      <Buttons>
        <Button style={Shadow}>
          <Icon source={likeIcon} />
        </Button>
        <Button style={Shadow}>
          <Icon source={dislikeIcon} />
        </Button>
      </Buttons>
    </Container>
  );
}

export default Main;
