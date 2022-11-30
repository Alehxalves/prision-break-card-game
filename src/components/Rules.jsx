import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import  ListGroup  from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

import "./rules.css";

function Rules() {
  const { setShowMenu } = useContext(AppContext);
  const navigate = useNavigate();

  const nagivateToHome = () => {
    setShowMenu("flex");
    navigate("/");
  };

  return (
    <div className="rules-container">
      <div className="container_rules">
        <p>Regras do Jogo</p>
        <div className="regras">
          <ListGroup as="ol" numbered>
            <ListGroup.Item variant="secondary" as="li">Mínimo de 2 Jogadores</ListGroup.Item>
            <ListGroup.Item variant="secondary" as="li">Máximo de 5 Jogadores</ListGroup.Item>
            <ListGroup.Item variant="secondary" as="li">Todos os jogadores devem receber o mesmo número de cartas</ListGroup.Item>
            <ListGroup.Item variant="secondary" as="li">
              O número de cartas é uma regra de jogo que pode ser 
              combinada previamente, podendo ser 
              qualquer número X maior que 0
            </ListGroup.Item>
            <ListGroup.Item variant="secondary" as="li"> 
              Clicar em start no menu principal do aplicativo levará à tela de jogo,
              onde irá sortear o naipe
            </ListGroup.Item>
            <ListGroup.Item variant="secondary" as="li">
            Para dar início à primeira rodada, clique na carta ao centro, 
            ela mostrará o naipe correspondente para aquela rodada.
            </ListGroup.Item>
            <ListGroup.Item variant="secondary" as="li">
            O jogo acaba quando as cartas nas mãos dos jogadores acabarem, lembrando que se usa uma por vez, portanto, 
            o número de cartas determina o número de rodadas.
            </ListGroup.Item>
          </ListGroup>
        </div>

        <Button 
          variant="secondary" 
          style={{marginTop: "15px"}} 
          onClick={nagivateToHome}>
            Voltar
        </Button>
      </div>
    </div>
  );
}

export default Rules;
