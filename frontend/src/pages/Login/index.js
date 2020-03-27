import React from "react";

import { Container } from "./styles";

import logoImg from "../../assets/logo.svg";

function Login() {
  return (
    <Container>
      <form>
        <img src={logoImg} alt="Tindev" />
        <input placeholder="Digite seu usuário no GitHub" />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}

export default Login;
