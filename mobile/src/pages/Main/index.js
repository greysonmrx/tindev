import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

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
  Shadow,
  EmptyContent,
  Empty,
  Back
} from "./styles";

import api from "../../services/api";

import logoImg from "../../assets/logo.png";
import likeIcon from "../../assets/like.png";
import dislikeIcon from "../../assets/dislike.png";

function Main() {
  const [devs, setDevs] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    async function loadDevs() {
      try {
        const response = await api.get("/devs", {
          headers: { user: route.params.id }
        });

        setDevs(response.data);
      } catch (err) {
        Alert.alert(err.response.data.message);
      }
    }

    loadDevs();
  }, [route.params.id]);

  async function handleLike() {
    const [dev, ...rest] = devs;

    try {
      setDevs(rest);

      await api.post(`/devs/${dev._id}/likes`, null, {
        headers: { user: route.params.id }
      });
    } catch (err) {
      Alert.alert(err.response.data.message);
    }
  }

  async function handleDislike() {
    const [dev, ...rest] = devs;

    try {
      setDevs(rest);

      await api.post(`/devs/${dev._id}/dislikes`, null, {
        headers: { user: route.params.id }
      });
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <Container>
      <Back onPress={() => navigation.goBack()}>
        <Img source={logoImg} />
      </Back>

      {devs.length > 0 ? (
        <>
          <List>
            {devs.map((dev, index) => (
              <Card key={dev._id} style={{ zIndex: devs.length - index }}>
                <Avatar
                  source={{
                    uri: dev.avatar
                  }}
                />
                <Footer>
                  <Name>{dev.name}</Name>
                  <Bio>{dev.bio}</Bio>
                </Footer>
              </Card>
            ))}
          </List>
          <Buttons>
            <Button style={Shadow} onPress={handleLike}>
              <Icon source={likeIcon} />
            </Button>
            <Button style={Shadow} onPress={handleDislike}>
              <Icon source={dislikeIcon} />
            </Button>
          </Buttons>
        </>
      ) : (
        <EmptyContent>
          <Empty>Acabou :(</Empty>
        </EmptyContent>
      )}
    </Container>
  );
}

export default Main;