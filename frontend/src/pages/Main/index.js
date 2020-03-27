import React from "react";
import { Link } from "react-router-dom";

import { Container, List, Card, Buttons } from "./styles";

import logoImg from "../../assets/logo.svg";
import likeIcon from "../../assets/like.svg";
import dislikeIcon from "../../assets/dislike.svg";

function Main() {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Tindev" />
      </Link>
      <List>
        <Card>
          <img
            src="https://avatars3.githubusercontent.com/u/43364141?v=4"
            alt="greysonmrx"
          />
          <footer>
            <strong>Greyson Filho</strong>
            <p>
              Full-stack programmer, fascinated by JavaScript, computer
              technician by IFAL and currently attending the Faculty of Computer
              Science at UFAL
            </p>
          </footer>
          <Buttons>
            <button type="button" onClick={() => {}}>
              <img src={dislikeIcon} alt="Dislike" />
            </button>

            <button type="button" onClick={() => {}}>
              <img src={likeIcon} alt="Like" />
            </button>
          </Buttons>
        </Card>
      </List>
    </Container>
  );
}

export default Main;
