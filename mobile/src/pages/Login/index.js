import React from "react";

import { Container, Img, Input, Button, ButtonText } from "./styles";

import logoImg from "../../assets/logo.png";

function Login() {
  return (
    <Container behavior="padding">
      <Img source={logoImg} />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário no GitHub"
      />
      <Button onPress={() => {}}>
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
}

export default Login;
