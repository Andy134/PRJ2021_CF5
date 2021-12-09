import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useApp } from "../App";
import Navigation from "../components/Navigation";
import { routes } from "../routes";

export default function MyApp() {
  const { darkMode } = useApp();
  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Router>
        <Suspense
          fallback={
            <Spinner
              className="loader-center"
              animation="border"
              role="status"
            />
          }
        >
          <div>
            <Navigation />
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route key={index} path={route.path} exact={route.exact}>
                    {route.component}
                  </Route>
                );
              })}
            </Switch>
          </div>
        </Suspense>
      </Router>
    </div>
  );
}
