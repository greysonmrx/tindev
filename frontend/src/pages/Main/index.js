import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, List, Card, Buttons } from "./styles";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";
import likeIcon from "../../assets/like.svg";
import dislikeIcon from "../../assets/dislike.svg";

function Main({ match }) {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      try {
        const response = await api.get("/devs", {
          headers: { user: match.params.id }
        });

        setDevs(response.data);
      } catch (err) {
        alert(err.response.data.message);
      }
    }

    loadDevs();
  }, [match.params.id]);

  async function handleLike(id) {
    try {
      setDevs(oldState => oldState.filter(item => item._id !== id));

      await api.post(`/devs/${id}/likes`, null, {
        headers: { user: match.params.id }
      });
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  async function handleDislike(id) {
    try {
      setDevs(oldState => oldState.filter(item => item._id !== id));

      await api.post(`/devs/${id}/dislikes`, null, {
        headers: { user: match.params.id }
      });
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Tindev" />
      </Link>
      <List>
        {devs.map(dev => (
          <Card key={dev._id}>
            <img src={dev.avatar} alt={dev.user} />
            <footer>
              <strong>{dev.name}</strong>
              <p>{dev.bio}</p>
            </footer>
            <Buttons>
              <button type="button" onClick={() => handleDislike(dev._id)}>
                <img src={dislikeIcon} alt="Dislike" />
              </button>

              <button type="button" onClick={() => handleLike(dev._id)}>
                <img src={likeIcon} alt="Like" />
              </button>
            </Buttons>
          </Card>
        ))}
      </List>
    </Container>
  );
}

export default Main;
