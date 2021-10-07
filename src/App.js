import "./App.css";
// import Theme from "./theme/theme";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

// import Home from "./pages/Home";

import Routes from "router/Routes";
import FilterPage from "pages/FilterPage";

function App() {
  return (
    // <Theme>
    <BrowserRouter>
      <Switch>
        {/* <Route exact path={Routes.home} component={Home} /> */}
        <Route exact path={Routes.filterPage} component={FilterPage} />

        <Route path={"/"}>
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </BrowserRouter>
    // </Theme>
  );
}

export default App;
