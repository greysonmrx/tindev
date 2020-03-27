import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { Container, Img, Input, Button, ButtonText } from "./styles";

import api from "../../services/api";

import logoImg from "../../assets/logo.png";

function Login() {
  const [username, setUsername] = useState();

  const navigation = useNavigation();

  async function navigateToMain() {
    try {
      const response = await api.post("/devs", { username });

      navigation.navigate("Main", { id: response.data._id });
    } catch (err) {
      Alert.alert(err.response.data.message);
    }
  }

  return (
    <Container behavior="padding">
      <Img source={logoImg} />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário no GitHub"
        onChangeText={setUsername}
      />
      <Button onPress={navigateToMain}>
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
}

export default Login;
