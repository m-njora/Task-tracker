// import './App.css';
// import Login from './login';
// import SignUp from "./signup";
import Todo from "./Todo"
import { Route, Switch, Redirect } from "react-router-dom"
function App() {
  return (
<Switch>

  {/* <Route path="/login" component={Login} /> */}
  {/* <Route path="/signup" component={SignUp} /> */}
  {/* <Redirect from="/" to="/login" /> */}
  <Route path="/todo" component={Todo} />

</Switch>

  );
}

export default App;
