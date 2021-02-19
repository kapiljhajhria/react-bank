import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { SideBar } from "./components/SideBar/index";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
