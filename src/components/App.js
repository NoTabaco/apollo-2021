import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
