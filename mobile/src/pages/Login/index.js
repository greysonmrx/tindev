import React from "react";

import { Container, Img, Input, Button, ButtonText } from "./styles";

import logoImg from "../../assets/logo.png";

function Login() {
  return (
    <Container>
      <Img source={logoImg} />
      <Input placeholder="Digite seu usuário no GitHub" />
      <Button onPress={() => {}}>
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
}

export default Login;
