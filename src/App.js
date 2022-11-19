import { Routes, Route, Link, useNavigate } from "react-router-dom";

import "./styles.scss";

import Rules from "./components/Rules";
import Game from "./components/Game";
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

function App() {
  const [showMenu, setShowMenu] = useState("visible");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("beforeunload", navigate("/"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeMenu = () => {
    setShowMenu("none");
  };

  const ShowMenu = () => {
    setShowMenu("flex");
  };

  return (
    <div>
      <AppContext.Provider value={{ setShowMenu }}>
        <div className="app_container">
          <nav className="navbar navbar-dark bg-dark justify-content-center">
            <Link
              to={"/"}
              className="navbar-brand"
              style={{ paddingLeft: 10 }}
              onClick={ShowMenu}
            >
              Prison Break
            </Link>
          </nav>
          <div className="menu" style={{ display: `${showMenu}` }}>
            <div className="links">
              <button onClick={closeMenu}>
                <Link to={"game"} className="nav-link">
                  Game
                </Link>
              </button>
              <button onClick={closeMenu}>
                <Link to={"rules"} className="nav-link">
                  Rules
                </Link>
              </button>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="rules" element={<Rules />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
