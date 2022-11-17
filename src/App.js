import "./App.css";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <p className="navbar-brand">Prison Break</p>
      </nav>
      <div className="container">
        <div className="row h-100">
          <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
