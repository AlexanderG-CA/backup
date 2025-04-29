import { Switch, Route, Router as WouterRouter } from "wouter";
import ProjectsPage from "./pages/projects-page";
import NotFound from "./pages/not-found";
import AuthPage from "./pages/auth-page.tsx";

function App() {
  return (
    <WouterRouter>
      <Switch>
        <Route path="/" component={ProjectsPage} />
        <Route path="/auth" component={AuthPage} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}
export default App;
