import React, { useContext } from "react";
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
          adicionar regras aqui
        </div>
        <button className="btn-voltar" onClick={nagivateToHome}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default Rules;
