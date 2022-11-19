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
    <div className="container">
      <div className="container_rules">
        <p>Regras do Jogo</p>
        <div className="regras">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          laboriosam, sunt facilis, earum, nostrum accusantium molestiae nisi
          eveniet pariatur porro enim culpa vero expedita placeat rerum nihil
          animi. Placeat, minus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto quas hic repellendus saepe odio, fugit
          dolores voluptate consequuntur perspiciatis nam nemo! Commodi fuga
          cumque, ut quo quam vitae. Sed, architecto. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Quos est accusamus incidunt maxime,
          deleniti eum tempora saepe illo? Facere quibusdam illum ut saepe
          porro. Illo doloribus omnis maxime sit accusantium.
        </div>
        <button className="btn-voltar" onClick={nagivateToHome}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default Rules;
