import React from 'react'
import Login from './login';
// import SignUp from "./signup";
import Todo from "./Todo"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState('');


  function handleLogin(name){
        // Set the loggedIn state to true after successful login

    setLoggedIn(true);
    setUserName(name);

  }
  function handleLogout(){
    // Set the loggedIn state to false after successful logout
    setLoggedIn(false);
    setUserName('');

  }

  return (
<Switch>

  {/* <Route path="/todo" component={Todo} />
  <Route path="/login" component={Login} /> */}


  <Route path="/" component={Login}  onLogin={handleLogin}/>
  <Route path="/todo" render={() => <Todo userName={userName} onLogout={handleLogout} />}  /> 
</Switch>

  );
}

export default App;
