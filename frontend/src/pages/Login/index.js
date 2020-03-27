import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

function Login() {
  const [username, setUsername] = useState("");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/devs", { username });

      const { _id } = response.data;

      history.push(`/devs/${_id}`);
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={logoImg} alt="Tindev" />
        <input
          placeholder="Digite seu usuário no GitHub"
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}

export default Login;
