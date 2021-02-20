import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import { SigninPage } from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SigninPage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
